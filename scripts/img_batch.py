import json, time, urllib.parse, urllib.request

UA = {"User-Agent":"NutritherapyImageSourcer/1.0 (https://example.org; contact@example.org)"}

def http_json(url, tries=5):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(8*(i+1)); continue
            raise
        except Exception:
            time.sleep(4); continue
    return None

def search(query):
    params = {
        "action":"query","format":"json","generator":"search",
        "gsrsearch":query,"gsrnamespace":"6","gsrlimit":"8",
        "prop":"imageinfo","iiprop":"url|mime|size","iiurlwidth":"1200",
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    d = http_json(url)
    out=[]
    if not d: return out
    for p in d.get("query",{}).get("pages",{}).values():
        ii=p.get("imageinfo",[{}])
        if not ii: continue
        ii=ii[0]
        out.append({"title":p.get("title"),"thumb":ii.get("thumburl"),"mime":ii.get("mime"),
                    "index":p.get("index",99)})
    out.sort(key=lambda x:x["index"])
    return out

def verify(u, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(u, method="HEAD", headers=UA)
            with urllib.request.urlopen(req, timeout=20) as r:
                ct = r.headers.get("Content-Type","")
                return r.status==200 and ct.startswith("image/"), r.status, ct
        except urllib.error.HTTPError as e:
            if e.code==429:
                time.sleep(6*(i+1)); continue
            return False, e.code, ""
        except Exception as ex:
            time.sleep(3); continue
    return False, None, ""

BAD = ("logo","icon",".svg","map","diagram","chart","seal",".pdf","coat of arms")

def good_candidate(c):
    if not c["thumb"]: return False
    if c["mime"] not in ("image/jpeg","image/png"): return False
    t=c["title"].lower()
    if any(b in t for b in BAD): return False
    return True

# slug -> list of queries (fallbacks)
PLAN = {
 "smoothie-banane-epinards-amande-post-effort": (["banana spinach smoothie glass","green smoothie banana glass"],"Smoothie banane-epinards dans un verre"),
 "jus-ananas-celeri-gingembre-recuperation": (["pineapple juice glass","pineapple smoothie glass"],"Jus d'ananas dans un verre"),
 "jus-carotte-betterave-gingembre-pre-seance": (["carrot beetroot juice glass","beetroot carrot juice"],"Jus carotte-betterave dans un verre"),
 "jus-carotte-betterave-walker": (["beetroot juice glass","beet juice carrot"],"Jus de betterave et carotte"),
 "jus-concombre-betterave-walker": (["cucumber juice glass","cucumber drink glass"],"Jus de concombre dans un verre"),
 "jus-carotte-laitue-alfalfa-walker": (["carrot juice glass","fresh carrot juice"],"Jus de carotte frais"),
 "jus-celeri-persil-walker": (["celery juice glass","celery green juice"],"Jus de celeri dans un verre"),
 "jus-pomme-celeri-walker": (["apple celery juice glass","apple juice glass"],"Jus pomme-celeri dans un verre"),
 "jus-printemps-pissenlit-pomme": (["dandelion leaves green juice","green juice dandelion"],"Jus vert pissenlit-pomme"),
 "jus-ete-pasteque-menthe-citron": (["watermelon juice glass mint","watermelon juice glass"],"Jus de pasteque a la menthe"),
 "jus-automne-pomme-cannelle-betterave": (["apple beetroot juice glass","apple cinnamon drink"],"Jus pomme-betterave-cannelle"),
 "jus-hiver-orange-curcuma-gingembre": (["orange turmeric juice glass","orange ginger turmeric drink"],"Jus orange-curcuma-gingembre"),
 "jus-equinoxe-vert-cresson": (["watercress green juice","green vegetable juice glass"],"Jus vert au cresson"),
 "protocole-jus-21-jours": (["fresh juices glasses variety","colorful juice glasses row"],"Assortiment de jus frais en verres"),
 "jus-monodiete-raisin-rentree": (["grape juice glass","red grapes juice"],"Jus de raisin dans un verre"),
 "jus-bouillon-legumes-soir": (["vegetable broth bowl","vegetable soup bowl"],"Bouillon de legumes dans un bol"),
 "jus-acerola-camu-camu-shot": (["acerola fruit juice","acerola cherry fruit"],"Shot d'acerola riche en vitamine C"),
 "jus-spiruline-citron-sport": (["spirulina drink glass","green spirulina smoothie"],"Jus a la spiruline et citron"),
}

used=set()
results=[]
for slug,(queries,alt) in PLAN.items():
    chosen=""
    for q in queries:
        cands=[c for c in search(q) if good_candidate(c)]
        time.sleep(2)
        picked=False
        for c in cands:
            if c["thumb"] in used: continue
            ok,code,ct=verify(c["thumb"])
            time.sleep(1.5)
            if ok:
                chosen=c["thumb"]; used.add(chosen); picked=True
                print(f"[OK] {slug} <- {c['title']} ({q})")
                break
        if picked: break
    if not chosen:
        print(f"[MISS] {slug}")
    results.append({"slug":slug,"src":chosen,"alt":alt})

with open("img_results.json","w",encoding="utf-8") as f:
    json.dump({"results":results}, f, ensure_ascii=False, indent=1)
print("DONE")
