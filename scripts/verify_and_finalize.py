import json, subprocess, time, sys

ALT = {
 "camomille-romaine": "Fleurs de camomille romaine",
 "cassis-bourgeons": "Bourgeons et feuilles de cassis",
 "chardon-marie": "Fleur de chardon-Marie",
 "desmodium": "Feuillage de desmodium",
 "echinacee": "Fleur d'echinacee pourpre",
 "eleutherocoque": "Plant d'eleutherocoque",
 "fenouil": "Plante de fenouil",
 "gentiane": "Fleurs de gentiane jaune",
 "gingembre": "Rhizome de gingembre frais",
 "ginkgo": "Feuilles de ginkgo biloba",
 "ginseng": "Racine de ginseng",
 "harpagophytum": "Plante d'harpagophytum",
 "lavande-vraie": "Fleurs de lavande vraie",
 "melisse": "Feuilles de melisse",
 "menthe-poivree": "Feuilles de menthe poivree",
 "ortie": "Feuilles d'ortie",
 "passiflore": "Fleur de passiflore",
 "pissenlit": "Fleur de pissenlit",
 "prele-des-champs": "Tiges de prele des champs",
 "reine-des-pres": "Fleurs de reine-des-pres",
 "rhodiole": "Plante de rhodiole",
 "romarin": "Brins de romarin",
 "sauge-officinale": "Feuilles de sauge officinale",
 "thym": "Brins de thym",
 "valeriane": "Fleurs de valeriane officinale",
 "millepertuis-hypericum-depression": "Fleurs de millepertuis",
 "5-htp-griffonia-serotonine": "Graines de griffonia",
 "safran-crocus-depression": "Fleur de crocus a safran",
 "alimentation-vivante": "Assiette d'aliments crus vivants",
 "graines-germees": "Graines germees",
 "lacto-fermentation": "Bocaux de legumes lacto-fermentes",
}
ORDER = list(ALT.keys())

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"

def check(url):
    for attempt in range(4):
        try:
            out = subprocess.run(
                ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code} %{content_type}",
                 "--max-time", "20", "-A", UA, "-e", "https://commons.wikimedia.org/", url],
                capture_output=True, text=True, timeout=30).stdout.strip()
        except Exception:
            out = ""
        parts = out.split(" ", 1)
        code = parts[0] if parts else ""
        ct = parts[1] if len(parts) > 1 else ""
        if code == "429":
            time.sleep(8 * (attempt + 1)); continue
        return code == "200" and ct.startswith("image/")
    return False

data = json.load(open("scripts/_lot2_candidates.json", encoding="utf-8"))
used = set()
results = []
for slug in ORDER:
    cands = data[slug][1]
    chosen = ""
    for u in cands:
        if u in used:
            continue
        if check(u):
            chosen = u; used.add(u); break
        time.sleep(1)
    results.append({"slug": slug, "src": chosen, "alt": ALT[slug]})
    print(slug, "->", ("OK" if chosen else "EMPTY"), chosen, file=sys.stderr)
    time.sleep(1)

json.dump({"results": results}, open("scripts/_lot2_final.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({"results": results}, ensure_ascii=False))
