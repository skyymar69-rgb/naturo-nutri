import json, time, urllib.parse, urllib.request

UA = {"User-Agent":"NutritherapyImageSourcer/1.0 (https://example.org; contact@example.org)"}

def http_json(url, tries=6):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(7*(i+1)); continue
            raise
        except Exception:
            time.sleep(4); continue
    return None

def search(query):
    params = {"action":"query","format":"json","generator":"search","gsrsearch":query,
        "gsrnamespace":"6","gsrlimit":"10","prop":"imageinfo","iiprop":"url|mime|size","iiurlwidth":"1200"}
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    d = http_json(url); out=[]
    if not d: return out
    for p in d.get("query",{}).get("pages",{}).values():
        ii=p.get("imageinfo",[{}])
        if not ii: continue
        ii=ii[0]
        out.append({"title":p.get("title"),"thumb":ii.get("thumburl"),"mime":ii.get("mime"),"index":p.get("index",99)})
    out.sort(key=lambda x:x["index"])
    return out

def verify(u, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(u, method="HEAD", headers=UA)
            with urllib.request.urlopen(req, timeout=20) as r:
                ct=r.headers.get("Content-Type","")
                return r.status==200 and ct.startswith("image/")
        except urllib.error.HTTPError as e:
            if e.code==429: time.sleep(6*(i+1)); continue
            return False
        except Exception:
            time.sleep(3); continue
    return False

BAD=("logo","icon",".svg","map","diagram","chart","seal",".pdf","coat of arms","cocktail",
     "caesar","bread","cookery","book","dessert","cake","page","cover","label","poster","menu")
def good(c):
    if not c["thumb"]: return False
    if c["mime"] not in ("image/jpeg","image/png"): return False
    t=c["title"].lower()
    if any(b in t for b in BAD): return False
    return True

# load existing used urls to keep uniqueness across whole batch
existing=json.load(open("img_results.json",encoding="utf-8"))["results"]
res_by_slug={r["slug"]:r for r in existing}
used=set(r["src"] for r in existing if r["src"])

FIX={
 "jus-carotte-betterave-walker":["beetroot juice glass","beet root juice drink","beetroot smoothie glass"],
 "jus-celeri-persil-walker":["celery juice glass","green celery juice","parsley green juice glass"],
 "jus-pomme-celeri-walker":["apple juice glass fresh","green apple juice glass"],
 "jus-printemps-pissenlit-pomme":["green smoothie glass leaves","green vegetable juice glass","green detox juice glass"],
 "jus-ete-pasteque-menthe-citron":["watermelon juice glass","watermelon drink glass fresh"],
 "jus-automne-pomme-cannelle-betterave":["beetroot apple juice glass","red juice glass beet"],
 "jus-hiver-orange-curcuma-gingembre":["orange juice glass fresh","fresh orange juice glass turmeric"],
 "jus-equinoxe-vert-cresson":["green juice glass vegetable","green detox drink glass"],
 "protocole-jus-21-jours":["fresh fruit juices glasses","smoothies glasses variety colorful"],
 "jus-bouillon-legumes-soir":["vegetable broth bowl soup","clear vegetable soup bowl"],
 "jus-spiruline-citron-sport":["green smoothie glass","spirulina drink","green juice glass healthy"],
}

for slug,queries in FIX.items():
    # free up old (possibly bad) url
    old=res_by_slug[slug]["src"]
    if old in used: used.discard(old)
    chosen=""
    for q in queries:
        cands=[c for c in search(q) if good(c)]
        time.sleep(2)
        for c in cands:
            if c["thumb"] in used: continue
            if verify(c["thumb"]):
                chosen=c["thumb"]; used.add(chosen)
                print(f"[OK] {slug} <- {c['title']} ({q})")
                break
            time.sleep(1)
        if chosen: break
    if not chosen:
        print(f"[MISS] {slug}")
        # restore old only if it was a verified non-empty (keep empty otherwise)
    res_by_slug[slug]["src"]=chosen
    used.add(chosen) if chosen else None

out={"results":[res_by_slug[r["slug"]] for r in existing]}
json.dump(out, open("img_results.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
print("DONE")
