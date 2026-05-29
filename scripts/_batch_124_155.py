# -*- coding: utf-8 -*-
import json, urllib.parse, urllib.request, sys, time, subprocess

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "ImageSourcingBot/1.0 (contact: example@example.com)"}

def search(q):
    params = {
        "action":"query","format":"json","generator":"search","gsrsearch":q,
        "gsrnamespace":"6","gsrlimit":"8","prop":"imageinfo","iiprop":"url|mime|size",
        "iiurlwidth":"1200",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    d = None
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=25) as r:
                d = json.load(r)
            break
        except Exception:
            time.sleep(2.5 * (attempt + 1))
            if attempt == 3:
                return None
    if d is None:
        return None
    pages = d.get("query",{}).get("pages",{})
    items = sorted(pages.values(), key=lambda p: p.get("index", 999))
    out = []
    for p in items:
        ii = p.get("imageinfo",[{}])[0]
        out.append({"title":p.get("title",""), "url":ii.get("thumburl"), "mime":ii.get("mime","")})
    return out

DEVNULL = "NUL" if sys.platform.startswith("win") else "/dev/null"
def http_status(url):
    try:
        out = subprocess.run(
            ["curl","-s","-o",DEVNULL,
             "-A","Mozilla/5.0 (ImageSourcingBot)",
             "-I","-w","%{http_code} %{content_type}","--max-time","25", url],
            capture_output=True, text=True, timeout=40
        ).stdout.strip()
        parts = out.split()
        if len(parts) >= 2:
            return parts[0], parts[1]
        return parts[0] if parts else "0", ""
    except Exception:
        return "0", ""

def verify(url):
    # Returns True if confirmed image/* 200.
    # If repeatedly rate-limited (429), accept it: the Commons API already
    # confirmed the thumbnail exists; 429 is a transient CDN throttle, not a 404.
    saw_429 = False
    for attempt in range(5):
        code, ct = http_status(url)
        if code == "200" and ct.startswith("image/"):
            return True
        if code == "429":
            saw_429 = True
            time.sleep(5 * (attempt + 1))
            continue
        if code in ("404","403","0"):
            time.sleep(2)
            # one more chance for transient
            code2, ct2 = http_status(url)
            if code2 == "200" and ct2.startswith("image/"):
                return True
            if code2 == "429":
                saw_429 = True
                continue
            return False
        time.sleep(3)
    return saw_429  # accept if only ever throttled

BAD = ("logo","diagram","chart"," map",".svg","icon","seal","coat of arms","flag","label")

def good_candidate(c):
    if not c["url"]: return False
    if c["mime"] not in ("image/jpeg","image/png"): return False
    t = c["title"].lower()
    if any(b in t for b in BAD): return False
    return True

PLAN = {
 "calcium": ["cheese dairy milk", "milk glass bottle"],
 "iode": ["seaweed kelp food", "dried seaweed wakame"],
 "selenium": ["brazil nuts bowl", "brazil nuts"],
 "chrome": ["broccoli vegetable fresh", "broccoli"],
 "cuivre": ["copper supplement pills", "shellfish oysters food"],
 "silicium": ["horsetail plant equisetum", "oats cereal grain"],
 "manganese": ["whole grains nuts food", "hazelnuts bowl"],
 "potassium": ["bananas avocado fruit", "bananas bunch"],
 "molybdene": ["legumes beans lentils", "dried beans bowl"],
 "lithium-oligo": ["mineral water glass", "lithium supplement pills"],
 "bore": ["almonds prunes raisins", "almonds bowl"],
 "omega-3-fondamentaux": ["fish oil capsules salmon", "salmon fillet food"],
 "omega-3-vegetaux": ["flax seeds oil", "flaxseed linseed"],
 "huile-cco-mct": ["coconut oil jar", "coconut oil coconut"],
 "huiles-cuisson": ["olive oil cooking bottle", "cooking oil bottles"],
 "huile-perilla": ["perilla plant leaves", "perilla frutescens"],
 "ghee-beurre-clarifie": ["ghee clarified butter jar", "clarified butter"],
 "tryptophane": ["turkey meat food", "eggs cheese food protein"],
 "tyrosine": ["almonds cheese protein food", "amino acid supplement powder"],
 "glutamine": ["protein powder supplement scoop", "amino acid powder"],
 "taurine": ["energy drink can", "amino acid supplement"],
 "glycine": ["gelatin bone broth", "collagen powder supplement"],
 "arginine-citrulline": ["watermelon fruit slice", "watermelon"],
 "carnitine-acetyl": ["red meat beef food", "raw beef meat"],
 "glutathion": ["broccoli sulfur vegetables", "garlic onion food"],
 "coenzyme-q10-detail": ["coenzyme q10 capsules supplement", "softgel capsules supplement"],
 "resveratrol": ["red wine grapes glass", "red grapes bunch"],
 "astaxanthine": ["salmon fillet pink", "shrimp seafood pink"],
 "acide-alpha-lipoique": ["spinach green vegetable", "alpha lipoic acid supplement"],
 "quercetine": ["onions red food", "apples fruit red"],
 "polyphenols-fruits-rouges": ["blueberries blackberries fruit", "mixed berries bowl"],
}

ALT = {
 "calcium":"Fromage et produits laitiers, sources de calcium",
 "iode":"Algues marines, riches en iode",
 "selenium":"Noix du Bresil, source de selenium",
 "chrome":"Brocoli, legume contenant du chrome",
 "cuivre":"Sources alimentaires de cuivre",
 "silicium":"Prele (Equisetum), plante riche en silicium",
 "manganese":"Cereales completes et noix, sources de manganese",
 "potassium":"Bananes et avocat, riches en potassium",
 "molybdene":"Legumineuses, sources de molybdene",
 "lithium-oligo":"Eau minerale, apport en lithium oligo-element",
 "bore":"Amandes et fruits secs, sources de bore",
 "omega-3-fondamentaux":"Saumon et capsules d'huile de poisson, riches en omega-3",
 "omega-3-vegetaux":"Graines de lin, source vegetale d'omega-3",
 "huile-cco-mct":"Huile de coco, carburant cetogene",
 "huiles-cuisson":"Huiles de cuisson en bouteille",
 "huile-perilla":"Plante de perilla (Perilla frutescens)",
 "ghee-beurre-clarifie":"Ghee, beurre clarifie en pot",
 "tryptophane":"Aliments proteines, sources de tryptophane",
 "tyrosine":"Aliments riches en proteines, sources de tyrosine",
 "glutamine":"Poudre proteinee, complement de glutamine",
 "taurine":"Boisson contenant de la taurine",
 "glycine":"Bouillon d'os et gelatine, sources de glycine",
 "arginine-citrulline":"Pasteque, source de citrulline",
 "carnitine-acetyl":"Viande rouge, source de carnitine",
 "glutathion":"Legumes soufres, soutien du glutathion",
 "coenzyme-q10-detail":"Capsules de coenzyme Q10",
 "resveratrol":"Raisin et vin rouge, sources de resveratrol",
 "astaxanthine":"Saumon, riche en astaxanthine",
 "acide-alpha-lipoique":"Epinards, source d'acide alpha-lipoique",
 "quercetine":"Oignons, source de quercetine",
 "polyphenols-fruits-rouges":"Fruits rouges, riches en anthocyanes",
}

CACHE = "scripts/_batch_124_155_cache.json"
try:
    cache = json.load(open(CACHE))
except Exception:
    cache = {}

items = json.load(open("scripts/items.json"))[124:155]
used = set(v for v in cache.values() if v)
for it in items:
    slug = it["slug"]
    if cache.get(slug):
        continue
    chosen = ""
    for q in PLAN.get(slug, [it["subject"]]):
        cands = None
        for _try in range(5):
            cands = search(q)
            if cands is not None:
                break
            time.sleep(5 * (_try + 1))
        cands = cands or []
        for c in cands:
            if not good_candidate(c): continue
            if c["url"] in used: continue
            if verify(c["url"]):
                chosen = c["url"]; used.add(chosen)
                break
        if chosen: break
        time.sleep(1.0)
    if chosen:
        cache[slug] = chosen
        json.dump(cache, open(CACHE,"w"))
    sys.stderr.write(f"{slug}: {'OK' if chosen else 'EMPTY'}\n")
    sys.stderr.flush()
    time.sleep(1.2)

results = [{"slug":it["slug"], "src":cache.get(it["slug"],""), "alt":ALT.get(it["slug"], it["subject"])} for it in items]
print(json.dumps({"results":results}, ensure_ascii=False))
