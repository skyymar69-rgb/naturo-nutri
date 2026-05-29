import json, urllib.parse, urllib.request, sys, time

UA = "NutritherapyImageBot/1.0 (contact@example.com)"
BAD = ("logo", "icon", "map", "diagram", "chart", "svg", ".pdf", "graph")

def api_search(query, limit=8):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": query, "gsrnamespace": "6", "gsrlimit": str(limit),
        "prop": "imageinfo", "iiprop": "url|mime|size", "iiurlwidth": "1200",
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=25) as r:
                d = json.load(r)
            pages = d.get("query", {}).get("pages", {})
            items = sorted(pages.values(), key=lambda p: p.get("index", 999))
            out = []
            for p in items:
                ii = p.get("imageinfo", [{}])[0]
                t, thumb, mime = p["title"], ii.get("thumburl"), ii.get("mime")
                if not thumb or mime not in ("image/jpeg", "image/png"):
                    continue
                if any(b in t.lower() for b in BAD):
                    continue
                out.append(thumb)
            return out
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = 10 * (attempt + 1)
                print(f"429, wait {wait}s ({query})", file=sys.stderr)
                time.sleep(wait)
                continue
            print("ERR", query, e, file=sys.stderr); return []
        except Exception as e:
            time.sleep(5); continue
    return []

QUERIES = {
 "camomille-romaine": ["Chamaemelum nobile flower", "Roman chamomile flowers"],
 "cassis-bourgeons": ["Ribes nigrum plant", "Ribes nigrum berries"],
 "chardon-marie": ["Silybum marianum plant", "milk thistle flower"],
 "desmodium": ["Desmodium plant leaves", "Desmodium gangeticum plant"],
 "echinacee": ["Echinacea purpurea flower", "purple coneflower"],
 "eleutherocoque": ["Eleutherococcus senticosus plant", "Siberian ginseng plant"],
 "fenouil": ["Foeniculum vulgare plant", "fennel bulb plant"],
 "gentiane": ["Gentiana lutea plant", "yellow gentian flower"],
 "gingembre": ["ginger root rhizome", "Zingiber officinale rhizome"],
 "ginkgo": ["Ginkgo biloba leaves", "Ginkgo biloba tree"],
 "ginseng": ["Panax ginseng root", "Panax ginseng plant"],
 "harpagophytum": ["Harpagophytum procumbens plant", "devil's claw plant flower"],
 "lavande-vraie": ["Lavandula angustifolia field flowers", "true lavender flowers"],
 "melisse": ["Melissa officinalis plant", "lemon balm leaves"],
 "menthe-poivree": ["Mentha piperita plant", "peppermint leaves"],
 "ortie": ["Urtica dioica plant", "stinging nettle leaves"],
 "passiflore": ["Passiflora incarnata flower", "passionflower bloom"],
 "pissenlit": ["Taraxacum officinale flower", "dandelion flower plant"],
 "prele-des-champs": ["Equisetum arvense plant", "field horsetail plant"],
 "reine-des-pres": ["Filipendula ulmaria flowers", "meadowsweet flowers"],
 "rhodiole": ["Rhodiola rosea plant flower", "Rhodiola rosea"],
 "romarin": ["Rosmarinus officinalis plant", "rosemary herb plant"],
 "sauge-officinale": ["Salvia officinalis plant leaves", "common sage plant"],
 "thym": ["Thymus vulgaris plant", "thyme herb plant"],
 "valeriane": ["Valeriana officinalis plant flower", "valerian flowers"],
 "millepertuis-hypericum-depression": ["Hypericum perforatum flower", "St John's wort flowers"],
 "5-htp-griffonia-serotonine": ["Griffonia simplicifolia seeds plant", "Griffonia simplicifolia"],
 "safran-crocus-depression": ["Crocus sativus flower saffron", "saffron crocus flower"],
 "alimentation-vivante": ["raw food vegetables fruits", "raw vegan food plate"],
 "graines-germees": ["sprouted seeds sprouts", "bean sprouts germinated"],
 "lacto-fermentation": ["fermented vegetables jar sauerkraut", "lacto fermented vegetables jars"],
}

data = json.load(open("scripts/_lot2_candidates.json", encoding="utf-8"))
for slug, (alt, cands) in data.items():
    if cands:
        continue
    allc = []
    for q in QUERIES[slug]:
        for u in api_search(q):
            if u not in allc:
                allc.append(u)
        time.sleep(3)
    data[slug][1] = allc
    print(slug, "->", len(allc), file=sys.stderr)
    json.dump(data, open("scripts/_lot2_candidates.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("done", file=sys.stderr)
