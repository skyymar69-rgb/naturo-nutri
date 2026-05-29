import json, time, urllib.parse, urllib.request, sys

UA = "NutritherapyImageSourcer/1.0 (contact: naturonutri@example.com)"

ITEMS = [
 ("marronnier-inde-circulation", "Aesculus hippocastanum flower", "Fleurs de marronnier d'Inde"),
 ("ginkgo-biloba-circulation", "Ginkgo biloba leaves", "Feuilles de ginkgo biloba"),
 ("eucalyptus-respiration", "Eucalyptus globulus leaves", "Feuillage d'eucalyptus"),
 ("plantain-lanceole-respiration", "Plantago lanceolata plant", "Plantain lancéolé"),
 ("mauve-respiration", "Malva sylvestris flower", "Fleur de mauve sauvage"),
 ("bourgeon-pin-respiration", "Pinus sylvestris tree", "Pin sylvestre"),
 ("hysope-respiration", "Hyssopus officinalis flower", "Fleurs d'hysope"),
 ("ortie-articulations", "Urtica dioica plant", "Ortie dioïque"),
 ("prele-silicium", "Equisetum arvense plant", "Prêle des champs"),
 ("harpagophytum-griffe-diable", "Harpagophytum procumbens plant", "Harpagophytum (griffe du diable)"),
 ("curcuma-peau-articulations", "Curcuma longa plant", "Plant de curcuma"),
 ("bardane-peau", "Arctium lappa plant", "Bardane"),
 ("calendula-peau", "Calendula officinalis flower", "Fleur de souci (calendula)"),
 ("achillee-millefeuille-feminin", "Achillea millefolium flower", "Achillée millefeuille"),
 ("gattilier-vitex-feminin", "Vitex agnus-castus plant", "Gattilier (vitex)"),
 ("alchemille-feminin", "Alchemilla vulgaris plant", "Alchémille"),
 ("sauge-officinale-menopause", "Salvia officinalis plant", "Sauge officinale"),
 ("framboisier-feuilles-feminin", "Rubus idaeus leaves", "Feuilles de framboisier"),
 ("verveine-officinale-sommeil", "Verbena officinalis flower", "Verveine officinale"),
 ("coquelicot-sommeil", "Papaver rhoeas flower", "Coquelicot"),
 ("houblon-sommeil", "Humulus lupulus plant", "Houblon"),
 ("oranger-fleurs-sommeil", "Citrus aurantium flower", "Fleurs d'oranger amer"),
 ("pissenlit-digestion", "Taraxacum officinale flower", "Pissenlit en fleur"),
 ("boldo-digestion", "Peumus boldus plant", "Boldo"),
 ("radis-noir-digestion", "Raphanus sativus niger", "Radis noir"),
 ("angelique-digestion", "Angelica archangelica plant", "Angélique officinale"),
 ("griffonia-stress", "Griffonia simplicifolia plant", "Griffonia simplicifolia"),
 ("safran-stress", "Crocus sativus flower", "Fleur de safran (crocus)"),
 ("magnolia-stress", "Magnolia officinalis flower", "Magnolia officinalis"),
 ("pavot-de-californie-stress", "Eschscholzia californica flower", "Pavot de Californie"),
 ("pelargonium-immunite", "Pelargonium sidoides plant", "Pélargonium sidoides"),
]

# fallback simpler query (drop last word)
FALLBACK = {
 "Pinus sylvestris tree": "Pinus sylvestris",
 "Raphanus sativus niger": "black radish Raphanus",
 "Peumus boldus plant": "Peumus boldus",
 "Citrus aurantium flower": "Citrus aurantium blossom",
}

def api_search(q):
    params = {
        "action":"query","format":"json","generator":"search",
        "gsrsearch":q,"gsrnamespace":"6","gsrlimit":"10",
        "prop":"imageinfo","iiprop":"url|mime|size","iiurlwidth":"1200",
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    for attempt in range(7):
        try:
            req = urllib.request.Request(url, headers={"User-Agent":UA})
            with urllib.request.urlopen(req, timeout=25) as r:
                data = r.read().decode("utf-8")
            if "too many requests" in data.lower() or not data.strip().startswith("{"):
                time.sleep(8+attempt*5); continue
            d = json.loads(data)
            pages = d.get("query",{}).get("pages",{})
            out=[]
            for p in pages.values():
                ii = p.get("imageinfo",[{}])[0]
                out.append((p.get("index",99), p.get("title",""), ii.get("thumburl"), ii.get("mime","")))
            out.sort(key=lambda x:x[0])
            return out
        except urllib.error.HTTPError as e:
            if e.code==429:
                time.sleep(15+attempt*8); continue
            time.sleep(5+attempt*4)
        except Exception:
            time.sleep(5+attempt*4)
    return []

def verify(u):
    if not u: return False
    for attempt in range(4):
        try:
            req = urllib.request.Request(u, headers={"User-Agent":UA}, method="HEAD")
            with urllib.request.urlopen(req, timeout=20) as r:
                ct = r.headers.get("Content-Type","")
                return r.status==200 and ct.startswith("image/")
        except urllib.error.HTTPError as e:
            if e.code==429:
                time.sleep(12+attempt*6); continue
            return False
        except Exception:
            time.sleep(4)
    return False

BAD = ("logo","map","diagram","distribution","chart","range_","locator","icon",".svg",".pdf",".tif")

def good(title, mime):
    t=title.lower()
    if mime not in ("image/jpeg","image/png"): return False
    if any(b in t for b in BAD): return False
    return True

used=set()
results=[]
for slug, q, alt in ITEMS:
    chosen=""
    queries=[q]
    if q in FALLBACK: queries.append(FALLBACK[q])
    else:
        queries.append(" ".join(q.split()[:2]))
    for qi in queries:
        cands = api_search(qi)
        time.sleep(4)
        for idx,title,thumb,mime in cands:
            if not thumb or thumb in used: continue
            if not good(title,mime): continue
            if verify(thumb):
                chosen=thumb; used.add(thumb); break
        if chosen: break
    results.append({"slug":slug,"src":chosen,"alt":alt})
    print(f"{slug}: {'OK' if chosen else 'EMPTY'} {chosen}", file=sys.stderr)

print(json.dumps({"results":results}, ensure_ascii=False))
