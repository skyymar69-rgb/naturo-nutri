import json, time, sys
sys.path.insert(0, ".")
from scripts._imgsearch import search, verify

sys.stdout.reconfigure(encoding='utf-8')

# slug -> list of queries (tried in order)
PLAN = {
    "astragale-membranaceus-immunite": (["Astragalus membranaceus plant", "Astragalus membranaceus flower", "dried astragalus root"], "Racine et plante d'astragale (Astragalus membranaceus)"),
    "bacopa-monnieri-memoire-cognition": (["Bacopa monnieri plant", "Bacopa monnieri flower"], "Bacopa monnieri en fleur"),
    "ginkgo-biloba-cognition-dementia": (["Ginkgo biloba leaves", "Ginkgo biloba tree"], "Feuilles de Ginkgo biloba"),
    "probiotiques-prevention-diarrhee-antibiotiques": (["probiotic capsules", "yogurt probiotic", "antibiotic pills capsules"], "Gelules de probiotiques"),
    "regime-cetogene-epilepsie-pediatrique": (["ketogenic diet food", "avocado eggs cheese keto", "high fat low carb food"], "Aliments riches en lipides d'un regime cetogene"),
    "resveratrol-sirtuines-vieillissement": (["red grapes bunch", "red wine glass grapes", "red grapes"], "Raisins rouges, source de resveratrol"),
    "coq10-myopathie-statines": (["coenzyme Q10 supplement", "dietary supplement softgel capsules", "fish oil softgel capsules"], "Complement de coenzyme Q10"),
    "nmn-nad-anti-vieillissement": (["dietary supplement capsules white", "nicotinamide supplement", "supplement pills white background"], "Gelules de complement alimentaire"),
    "valeriane-sommeil": (["Valeriana officinalis plant", "Valeriana officinalis flower"], "Valeriane officinale en fleur"),
    "passiflore-sommeil": (["Passiflora incarnata flower", "Passiflora incarnata plant"], "Fleur de passiflore (Passiflora incarnata)"),
    "melisse-sommeil": (["Melissa officinalis plant", "Melissa officinalis leaves"], "Melisse officinale (Melissa officinalis)"),
    "tilleul-sommeil": (["Tilia cordata flower", "Tilia cordata tree", "Tilia platyphyllos flower"], "Fleurs de tilleul (Tilia cordata)"),
    "aubepine-sommeil": (["Crataegus monogyna flower", "Crataegus monogyna plant"], "Aubepine en fleur (Crataegus monogyna)"),
    "ashwagandha-stress": (["Withania somnifera plant", "Withania somnifera fruit", "ashwagandha root"], "Plante d'ashwagandha (Withania somnifera)"),
    "rhodiole-stress": (["Rhodiola rosea plant", "Rhodiola rosea flower"], "Rhodiole (Rhodiola rosea)"),
    "basilic-sacre-stress": (["Ocimum tenuiflorum plant", "Ocimum tenuiflorum leaves", "holy basil tulsi plant"], "Basilic sacre / Tulsi (Ocimum tenuiflorum)"),
    "eschscholtzia-stress": (["Eschscholzia californica flower", "Eschscholzia californica plant"], "Pavot de Californie (Eschscholzia californica)"),
    "artichaut-digestion": (["Cynara scolymus plant", "Cynara scolymus flower", "artichoke plant"], "Artichaut (Cynara scolymus)"),
    "chardon-marie-digestion": (["Silybum marianum flower", "Silybum marianum plant"], "Chardon-Marie (Silybum marianum)"),
    "romarin-digestion": (["Rosmarinus officinalis plant", "Rosmarinus officinalis flower"], "Romarin (Rosmarinus officinalis)"),
    "gentiane-digestion": (["Gentiana lutea plant", "Gentiana lutea flower"], "Gentiane jaune (Gentiana lutea)"),
    "fenouil-digestion": (["Foeniculum vulgare plant", "Foeniculum vulgare flower", "fennel plant"], "Fenouil (Foeniculum vulgare)"),
    "menthe-poivree-digestion": (["Mentha piperita plant", "Mentha piperita leaves", "peppermint plant"], "Menthe poivree (Mentha x piperita)"),
    "echinacee-immunite": (["Echinacea purpurea flower", "Echinacea purpurea plant"], "Echinacee pourpre (Echinacea purpurea)"),
    "thym-immunite": (["Thymus vulgaris plant", "Thymus vulgaris flower", "thyme plant"], "Thym commun (Thymus vulgaris)"),
    "sureau-noir-immunite": (["Sambucus nigra berries", "Sambucus nigra flower", "Sambucus nigra plant"], "Sureau noir (Sambucus nigra)"),
    "propolis-immunite": (["propolis", "bee propolis", "propolis honeycomb"], "Propolis recoltee par les abeilles"),
    "cypres-immunite": (["Cupressus sempervirens tree", "Cupressus sempervirens foliage"], "Cypres toujours vert (Cupressus sempervirens)"),
    "aubepine-circulation": (["Crataegus monogyna berries", "Crataegus monogyna fruit", "Crataegus monogyna flower"], "Baies d'aubepine (Crataegus monogyna)"),
    "vigne-rouge-circulation": (["Vitis vinifera red leaves autumn", "red grape vine leaves", "Vitis vinifera leaves"], "Vigne rouge (Vitis vinifera)"),
    "hamamelis-circulation": (["Hamamelis virginiana flower", "Hamamelis virginiana plant"], "Hamamelis (Hamamelis virginiana)"),
}

BAD = ("logo", "map", "diagram", "chart", "icon", ".svg", "distribution", "range")

def is_photo(c):
    if c["mime"] not in ("image/jpeg", "image/png"):
        return False
    t = (c["title"] or "").lower()
    if any(b in t for b in BAD):
        return False
    if not c["thumb"]:
        return False
    return True

used = set()
results = []

for slug, (queries, alt) in PLAN.items():
    chosen = ""
    for q in queries:
        cands = search(q)
        time.sleep(0.4)
        for c in cands:
            if not is_photo(c):
                continue
            if c["thumb"] in used:
                continue
            if verify(c["thumb"]):
                chosen = c["thumb"]
                used.add(chosen)
                break
        if chosen:
            break
    results.append({"slug": slug, "src": chosen, "alt": alt})
    print(f"{slug} -> {'OK' if chosen else 'EMPTY'} {chosen}", flush=True)

with open("scripts/_results.json", "w", encoding="utf-8") as f:
    json.dump({"results": results}, f, ensure_ascii=False, indent=2)
print("DONE")
