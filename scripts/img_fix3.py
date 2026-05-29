import json, time, urllib.parse, urllib.request
UA={"User-Agent":"NutritherapyImageSourcer/1.0 (https://example.org; contact@example.org)"}
def http_json(url,tries=7):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code==429: time.sleep(7*(i+1)); continue
            raise
        except Exception: time.sleep(4); continue
    return None
def search(q):
    p={"action":"query","format":"json","generator":"search","gsrsearch":q,"gsrnamespace":"6",
       "gsrlimit":"12","prop":"imageinfo","iiprop":"url|mime|size","iiurlwidth":"1200"}
    d=http_json("https://commons.wikimedia.org/w/api.php?"+urllib.parse.urlencode(p)); o=[]
    if not d: return o
    for pg in d.get("query",{}).get("pages",{}).values():
        ii=pg.get("imageinfo",[{}])
        if not ii: continue
        ii=ii[0]; o.append({"title":pg.get("title"),"thumb":ii.get("thumburl"),"mime":ii.get("mime"),"i":pg.get("index",99)})
    o.sort(key=lambda x:x["i"]); return o
def verify(u,tries=3):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(u,method="HEAD",headers=UA),timeout=20) as r:
                ct=r.headers.get("Content-Type",""); return r.status==200 and ct.startswith("image/")
        except urllib.error.HTTPError as e:
            if e.code==429: time.sleep(6*(i+1)); continue
            return False
        except Exception: time.sleep(3); continue
    return False
BAD=("logo","icon",".svg","map","diagram","chart","seal",".pdf","cocktail","caesar","bread",
     "cookery","book","dessert","cake","page","cover","label","poster","menu","wunsen","salad","yam","soup")
def good(c):
    if not c["thumb"] or c["mime"] not in ("image/jpeg","image/png"): return False
    return not any(b in c["title"].lower() for b in BAD)
existing=json.load(open("img_results.json",encoding="utf-8"))["results"]
res={r["slug"]:r for r in existing}; used=set(r["src"] for r in existing if r["src"])
FIX={"jus-equinoxe-vert-cresson":["watercress plant fresh","green juice bottle","celery juice","wheatgrass juice glass","green juice"]}
for slug,qs in FIX.items():
    chosen=""
    for q in qs:
        for c in [c for c in search(q) if good(c)]:
            if c["thumb"] in used: continue
            if verify(c["thumb"]):
                chosen=c["thumb"]; used.add(chosen); print("[OK]",slug,"<-",c["title"].encode("ascii","replace").decode()); break
            time.sleep(1)
        time.sleep(2)
        if chosen: break
    if not chosen: print("[MISS]",slug)
    res[slug]["src"]=chosen
json.dump({"results":[res[r["slug"]] for r in existing]},open("img_results.json","w",encoding="utf-8"),ensure_ascii=False,indent=1)
print("DONE")
