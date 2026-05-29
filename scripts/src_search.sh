#!/usr/bin/env bash
export PYTHONIOENCODING=utf-8
UA="NutritherapyImageSourcer/1.0 (contact@example.com)"
OUT=/tmp/results.txt
: > "$OUT"

search() {
  local slug="$1"; local q="$2"; local tries=0
  while [ $tries -lt 5 ]; do
    sleep 13
    out=$(curl -sG --max-time 25 -A "$UA" "https://commons.wikimedia.org/w/api.php" \
      --data-urlencode "action=query" --data-urlencode "format=json" \
      --data-urlencode "generator=search" --data-urlencode "gsrsearch=$q" \
      --data-urlencode "gsrnamespace=6" --data-urlencode "gsrlimit=6" \
      --data-urlencode "prop=imageinfo" --data-urlencode "iiprop=url|mime|size" \
      --data-urlencode "iiurlwidth=1200")
    res=$(echo "$out" | python -c "import sys,json
try:
  d=json.load(sys.stdin)
  ps=d.get('query',{}).get('pages',{})
  if not ps: print('NORESULTS'); sys.exit()
  rows=sorted(ps.values(), key=lambda p:p.get('index',99))
  for p in rows:
    ii=p['imageinfo'][0]
    print(p['title'],'||',ii.get('thumburl'),'||',ii.get('mime'))
except Exception as e:
  print('RETRY')")
    if echo "$res" | grep -q "RETRY"; then tries=$((tries+1)); continue; fi
    echo "### $slug || $q" >> "$OUT"
    echo "$res" >> "$OUT"
    return
  done
  echo "### $slug || $q" >> "$OUT"
  echo "FAILED" >> "$OUT"
}

search "fatigue-chronique-curtay-mitochondrie" "mitochondria cell biology"
search "microbiote-lagarde-cellulaire" "gut microbiome bacteria"
search "cure-thermale-tradition" "thermal bath spa"
search "douche-soleil-vivifiante" "cold shower bathroom"
search "enveloppement-froid-priessnitz" "wet body wrap towel"
search "cataplasme-argile-applications" "green clay poultice"
search "roll-on-anti-stress-formules" "essential oil roller bottle"
search "diffusion-bureau-concentration" "essential oil diffuser desk"
search "olfactotherapie-base" "woman smelling essential oil"
search "huile-massage-jambes-lourdes" "leg massage oil"
search "gemmotherapie-bases" "plant buds spring branch"
search "teintures-meres-fabrication" "herbal tincture bottle"
search "cure-bourgeon-cassis-printemps" "Ribes nigrum blackcurrant bud"
search "desmodium-foie-renaissance" "Desmodium adscendens plant"
search "vitamine-d-mortalite-toute-cause" "vitamin D capsules sunlight"
search "b12-cognition-personne-agee" "elderly person memory"
search "vitamine-k2-mk7-osteoporose" "natto fermented soybeans"
search "magnesium-syndrome-metabolique" "magnesium supplement tablets"
search "zinc-fertilite-masculine" "pumpkin seeds bowl"
search "selenium-cancer-prevention-update" "brazil nuts"
search "safran-depression-meta-2024" "saffron threads Crocus sativus"
search "curcuma-arthrose-genou-update" "turmeric powder root"
search "rhodiole-fatigue-recente" "Rhodiola rosea plant flower"
search "probiotiques-eczema-enfant" "child skin eczema"
search "mediterraneen-mortalite-cohorte" "mediterranean diet food table"
search "jeune-intermittent-poids-mortalite" "empty plate fork clock fasting"
search "vitamine-c-non-toxicite-limites" "vitamin C tablets oranges"
search "fer-bisglycinate-anemie-alt" "ferrous iron tablets"
search "omega-3-epa-dha-ratio" "omega 3 fish oil capsules"
echo "ALLDONE" >> "$OUT"
