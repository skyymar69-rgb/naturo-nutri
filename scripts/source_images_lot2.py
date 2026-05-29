import json, urllib.parse, urllib.request, sys, time

UA = "NutritherapyImageBot/1.0 (contact@example.com)"

def api_search(query, limit=8):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": query, "gsrnamespace": "6", "gsrlimit": str(limit),
        "prop": "imageinfo", "iiprop": "url|mime|size", "iiurlwidth": "1200",
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=25) as r:
                d = json.load(r)
            break
        except Exception as e:
            if attempt == 2:
                print("ERR search", query, e, file=sys.stderr)
                return []
            time.sleep(1.5)
    pages = d.get("query", {}).get("pages", {})
    # preserve search order via index
    items = sorted(pages.values(), key=lambda p: p.get("index", 999))
    out = []
    for p in items:
        ii = p.get("imageinfo", [{}])[0]
        out.append((p["title"], ii.get("thumburl"), ii.get("mime")))
    return out

VERIFY = "--verify" in sys.argv

def verify(url):
    if not VERIFY:
        return True  # trust API-provided thumburls; verified separately via curl
    if not url:
        return False
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Referer": "https://commons.wikimedia.org/",
        "Range": "bytes=0-0",
    })
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            ct = r.headers.get("Content-Type", "")
            return r.status in (200, 206) and ct.startswith("image/")
    except Exception as e:
        print("ERR verify", url, e, file=sys.stderr)
        return False

BAD = ("logo", "icon", "map", "diagram", "chart", "svg", ".pdf", "graph")

def acceptable(candidates, used):
    out = []
    for title, thumb, mime in candidates:
        if not thumb or not mime:
            continue
        if mime not in ("image/jpeg", "image/png"):
            continue
        tl = title.lower()
        if any(b in tl for b in BAD):
            continue
        if thumb in used:
            continue
        out.append(thumb)
    return out

# slug -> list of query attempts, alt
JOBS = {
 "camomille-romaine": (["Chamaemelum nobile flower", "Roman chamomile flowers"], "Fleurs de camomille romaine"),
 "cassis-bourgeons": (["Ribes nigrum plant", "Ribes nigrum berries"], "Bourgeons et feuilles de cassis"),
 "chardon-marie": (["Silybum marianum plant", "milk thistle flower"], "Fleur de chardon-Marie"),
 "desmodium": (["Desmodium plant leaves", "Desmodium gangeticum plant"], "Feuillage de desmodium"),
 "echinacee": (["Echinacea purpurea flower", "purple coneflower"], "Fleur d'echinacee pourpre"),
 "eleutherocoque": (["Eleutherococcus senticosus plant", "Siberian ginseng plant"], "Plant d'eleutherocoque"),
 "fenouil": (["Foeniculum vulgare plant", "fennel bulb plant"], "Plante de fenouil"),
 "gentiane": (["Gentiana lutea plant", "yellow gentian flower"], "Fleurs de gentiane jaune"),
 "gingembre": (["ginger root rhizome", "Zingiber officinale rhizome"], "Rhizome de gingembre frais"),
 "ginkgo": (["Ginkgo biloba leaves", "Ginkgo biloba tree"], "Feuilles de ginkgo biloba"),
 "ginseng": (["Panax ginseng root", "Panax ginseng plant"], "Racine de ginseng"),
 "harpagophytum": (["Harpagophytum procumbens plant", "devil's claw plant flower"], "Plante d'harpagophytum"),
 "lavande-vraie": (["Lavandula angustifolia field flowers", "true lavender flowers"], "Fleurs de lavande vraie"),
 "melisse": (["Melissa officinalis plant", "lemon balm leaves"], "Feuilles de melisse"),
 "menthe-poivree": (["Mentha piperita plant", "peppermint leaves"], "Feuilles de menthe poivree"),
 "ortie": (["Urtica dioica plant", "stinging nettle leaves"], "Feuilles d'ortie"),
 "passiflore": (["Passiflora incarnata flower", "passionflower bloom"], "Fleur de passiflore"),
 "pissenlit": (["Taraxacum officinale flower", "dandelion flower plant"], "Fleur de pissenlit"),
 "prele-des-champs": (["Equisetum arvense plant", "field horsetail plant"], "Tiges de prele des champs"),
 "reine-des-pres": (["Filipendula ulmaria flowers", "meadowsweet flowers"], "Fleurs de reine-des-pres"),
 "rhodiole": (["Rhodiola rosea plant flower", "Rhodiola rosea"], "Plante de rhodiole"),
 "romarin": (["Rosmarinus officinalis plant", "rosemary herb plant"], "Brins de romarin"),
 "sauge-officinale": (["Salvia officinalis plant leaves", "common sage plant"], "Feuilles de sauge officinale"),
 "thym": (["Thymus vulgaris plant", "thyme herb plant"], "Brins de thym"),
 "valeriane": (["Valeriana officinalis plant flower", "valerian flowers"], "Fleurs de valeriane officinale"),
 "millepertuis-hypericum-depression": (["Hypericum perforatum flower", "St John's wort flowers"], "Fleurs de millepertuis"),
 "5-htp-griffonia-serotonine": (["Griffonia simplicifolia seeds plant", "Griffonia simplicifolia"], "Graines de griffonia"),
 "safran-crocus-depression": (["Crocus sativus flower saffron", "saffron crocus flower"], "Fleur de crocus a safran"),
 "alimentation-vivante": (["raw food vegetables fruits", "raw vegan food plate"], "Assiette d'aliments crus vivants"),
 "graines-germees": (["sprouted seeds sprouts", "bean sprouts germinated"], "Graines germees"),
 "lacto-fermentation": (["fermented vegetables jar sauerkraut", "lacto fermented vegetables jars"], "Bocaux de legumes lacto-fermentes"),
}

collected = {}  # slug -> (alt, [candidate urls in priority order])
for slug, (queries, alt) in JOBS.items():
    cands_all = []
    for q in queries:
        for u in acceptable(api_search(q), set()):
            if u not in cands_all:
                cands_all.append(u)
        time.sleep(0.3)
    collected[slug] = (alt, cands_all)
    print(slug, "->", len(cands_all), "candidates", file=sys.stderr)

json.dump(collected, open("scripts/_lot2_candidates.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("WROTE scripts/_lot2_candidates.json", file=sys.stderr)
