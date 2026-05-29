# -*- coding: utf-8 -*-
import urllib.request, urllib.parse, json, time, sys

HEADERS = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) NutritherapyResearch/1.0',
    'Api-User-Agent':'NutritherapyResearch/1.0 (research@nutritherapy.local)',
    'Accept':'application/json',
}

# slug -> list of candidate queries (tried in order)
QUERIES = {
    "vitamine-d-supplementation-infections-respiratoires": ["vitamin D supplement pills", "vitamin D capsules"],
    "vitamine-b12-vegetariens-deficit": ["salmon eggs food", "salmon fillet eggs"],
    "folates-methylfolate-depression": ["green leafy vegetables spinach", "fresh spinach leaves"],
    "vitamine-k2-arteres-os": ["natto food", "fermented soybeans natto"],
    "magnesium-formes-biodisponibilite": ["magnesium supplement pills", "magnesium tablets"],
    "zinc-immunite-infections-respiratoires": ["pumpkin seeds bowl", "pumpkin seeds"],
    "fer-bisglycinate-vs-sulfate": ["lentils food bowl", "cooked lentils"],
    "iode-thyroide-carence": ["seaweed kelp", "dried seaweed food"],
    "selenium-hashimoto-thyroidite": ["brazil nuts", "brazil nuts bowl"],
    "ashwagandha-stress-cortisol": ["Withania somnifera plant", "Withania somnifera fruit"],
    "rhodiole-fatigue-performance-mentale": ["Rhodiola rosea plant", "Rhodiola rosea flower"],
    "curcuma-piperine-biodisponibilite": ["turmeric powder root", "Curcuma longa rhizome"],
    "ginseng-fatigue-meta-analyses": ["Panax ginseng root", "ginseng root"],
    "cordyceps-performance-sportive": ["Cordyceps militaris", "Cordyceps mushroom"],
    "probiotiques-axe-intestin-cerveau": ["yogurt probiotic food", "probiotic yogurt"],
    "omega-3-epa-dha-cardiovasculaire": ["fish oil capsules", "omega 3 fish oil supplement"],
    "jeune-intermittent-autophagie-metabolisme": ["empty plate fork knife", "water glass fasting"],
    "polyphenols-regime-mediterraneen-cardiovasculaire": ["olive oil mediterranean food", "mediterranean diet food"],
    "fibres-prebiotiques-acides-gras-chaine-courte": ["whole grains fiber food", "high fiber foods"],
    "vitamine-a-toxicite-retinol": ["carrots", "fresh carrots"],
    "vitamine-e-alpha-gamma-tocopherol": ["nuts seeds mix", "almonds nuts"],
    "vitamine-b6-neuropathie-dose-elevee": ["vitamin supplement pills", "supplement capsules"],
    "niacine-vitamine-b3-flush-lipides": ["niacin supplement", "vitamin B3 tablets"],
    "thiamine-wernicke-alcool": ["whole grain bread food", "brown rice grains"],
    "calcium-supplementation-cardiovasculaire-controverse": ["calcium supplement tablets", "milk cheese dairy"],
    "potassium-tension-arterielle-meta-analyses": ["bananas", "banana fruit"],
    "manganese-neurotoxicite-exposition": ["whole grains nuts", "hazelnuts food"],
    "cuivre-zinc-equilibre-ratio": ["oysters seafood", "cashew nuts"],
    "chrome-picolinate-diabete-type-2": ["broccoli vegetable", "broccoli fresh"],
    "reishi-ganoderma-immunite-cancer": ["Ganoderma lucidum", "Ganoderma lucidum mushroom"],
    "maca-lepidium-meyenii-fonction-sexuelle": ["Lepidium meyenii maca", "maca root"],
}

ALT = {
    "vitamine-d-supplementation-infections-respiratoires": "Gelules de vitamine D",
    "vitamine-b12-vegetariens-deficit": "Saumon et oeufs, sources de vitamine B12",
    "folates-methylfolate-depression": "Epinards frais, riches en folates",
    "vitamine-k2-arteres-os": "Natto, soja fermente riche en vitamine K2",
    "magnesium-formes-biodisponibilite": "Complement de magnesium en comprimes",
    "zinc-immunite-infections-respiratoires": "Graines de courge, source de zinc",
    "fer-bisglycinate-vs-sulfate": "Lentilles, source de fer",
    "iode-thyroide-carence": "Algues, source naturelle d'iode",
    "selenium-hashimoto-thyroidite": "Noix du Bresil, riches en selenium",
    "ashwagandha-stress-cortisol": "Plante d'ashwagandha (Withania somnifera)",
    "rhodiole-fatigue-performance-mentale": "Rhodiola rosea en fleur",
    "curcuma-piperine-biodisponibilite": "Curcuma en poudre et rhizome",
    "ginseng-fatigue-meta-analyses": "Racine de ginseng",
    "cordyceps-performance-sportive": "Champignon Cordyceps militaris",
    "probiotiques-axe-intestin-cerveau": "Yaourt, source de probiotiques",
    "omega-3-epa-dha-cardiovasculaire": "Capsules d'huile de poisson omega-3",
    "jeune-intermittent-autophagie-metabolisme": "Assiette vide, jeune intermittent",
    "polyphenols-regime-mediterraneen-cardiovasculaire": "Huile d'olive et regime mediterraneen",
    "fibres-prebiotiques-acides-gras-chaine-courte": "Aliments riches en fibres",
    "vitamine-a-toxicite-retinol": "Carottes, source de vitamine A",
    "vitamine-e-alpha-gamma-tocopherol": "Noix et graines, sources de vitamine E",
    "vitamine-b6-neuropathie-dose-elevee": "Complements en gelules",
    "niacine-vitamine-b3-flush-lipides": "Complement de niacine (vitamine B3)",
    "thiamine-wernicke-alcool": "Cereales completes, source de thiamine",
    "calcium-supplementation-cardiovasculaire-controverse": "Complement de calcium en comprimes",
    "potassium-tension-arterielle-meta-analyses": "Bananes, source de potassium",
    "manganese-neurotoxicite-exposition": "Noisettes et cereales completes",
    "cuivre-zinc-equilibre-ratio": "Huitres, source de cuivre et zinc",
    "chrome-picolinate-diabete-type-2": "Brocoli, source de chrome",
    "reishi-ganoderma-immunite-cancer": "Champignon reishi (Ganoderma lucidum)",
    "maca-lepidium-meyenii-fonction-sexuelle": "Racine de maca (Lepidium meyenii)",
}

def fetch(query, retries=8):
    params = {
        'action':'query','format':'json','generator':'search',
        'gsrsearch':query,'gsrnamespace':'6','gsrlimit':'6',
        'prop':'imageinfo','iiprop':'url|mime|size','iiurlwidth':'1200'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    for attempt in range(retries):
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                d = json.load(r)
            out=[]
            pages = d.get('query',{}).get('pages',{})
            # preserve search order via index
            items = sorted(pages.values(), key=lambda p: p.get('index',999))
            for p in items:
                ii = p.get('imageinfo',[{}])[0]
                mime = ii.get('mime','')
                if mime in ('image/jpeg','image/png'):
                    out.append((p['title'], ii.get('thumburl')))
            return out
        except urllib.error.HTTPError as e:
            if e.code==429:
                wait = 15*(attempt+1)
                print(f"  429, waiting {wait}s...", file=sys.stderr)
                time.sleep(wait)
                continue
            print(f"  HTTPError {e.code} for {query}", file=sys.stderr)
            return []
        except Exception as e:
            print(f"  err {e}", file=sys.stderr)
            time.sleep(5)
    return []

def verify(url, retries=3):
    for attempt in range(retries):
        req = urllib.request.Request(url, headers=HEADERS, method='HEAD')
        try:
            with urllib.request.urlopen(req, timeout=25) as r:
                ct = r.headers.get('Content-Type','')
                if r.status==200 and ct.startswith('image/'):
                    return True
                return False
        except urllib.error.HTTPError as e:
            if e.code==429:
                time.sleep(10*(attempt+1)); continue
            return False
        except Exception:
            time.sleep(4)
    return False

results=[]
used=set()
slugs=list(QUERIES.keys())
for slug in slugs:
    chosen=""
    for query in QUERIES[slug]:
        cands = fetch(query)
        time.sleep(1.5)
        picked=None
        for title,thumb in cands:
            if not thumb or thumb in used: continue
            if verify(thumb):
                picked=thumb; break
            time.sleep(1)
        if picked:
            chosen=picked; used.add(picked); break
        time.sleep(1)
    results.append({"slug":slug,"src":chosen,"alt":ALT[slug]})
    print(f"{slug} -> {chosen}", file=sys.stderr)
    time.sleep(1)

print(json.dumps({"results":results}, ensure_ascii=False))
