export const meta = {
  name: 'fetch-images',
  description: 'Source unique royalty-free Wikimedia Commons photos per article, verified',
  phases: [
    { title: 'Source', detail: '14 agents — query Commons, pick best, verify 200' },
  ],
};

const TOTAL = args && args.total ? args.total : 421;
const BATCHES = args && args.batches ? args.batches : 14;
const size = Math.ceil(TOTAL / BATCHES);

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          slug: { type: 'string' },
          src: { type: 'string', description: 'Direct verified upload.wikimedia.org URL, or empty string if none found' },
          alt: { type: 'string', description: 'Courte description FR de la photo' },
        },
        required: ['slug', 'src', 'alt'],
      },
    },
  },
  required: ['results'],
};

function promptFor(start, end, idx) {
  return `Tu es un agent de sourcing d'images libres de droits. Source : Wikimedia Commons UNIQUEMENT (licence libre, pas Unsplash).

OBJECTIF : pour chaque item de ton lot, trouver UNE photo qui correspond VRAIMENT au sujet, et VÉRIFIER qu'elle se charge.

ÉTAPE 1 — Lis ton lot depuis le fichier (utilise Bash) :
\`\`\`
python -c "import json; d=json.load(open('scripts/items.json')); items=d[${start}:${end}]; print(json.dumps(items,ensure_ascii=False))"
\`\`\`
Chaque item = {slug, section, category, subject (FR), latin?}.

ÉTAPE 2 — Pour CHAQUE item, fabrique UNE requête de recherche en ANGLAIS, concrète et visuelle, selon ces règles :
- section "plante" : utilise le NOM LATIN (champ latin) + "plant" ou "flower" (ex: "Valeriana officinalis plant").
- section "jus" : ingrédients principaux + "juice glass" (ex: "carrot orange ginger juice glass").
- vitamines (slug/sujet) : source alimentaire (vitamine A→"carrots", C→"citrus oranges", D→"sunlight" ou "vitamin D supplement", E→"nuts seeds", K2→"natto cheese", B12→"salmon eggs", B9→"green leafy vegetables"...). Pour un sujet "toxicité/dose/supplémentation" → "vitamin supplement pills".
- minéraux : source OU complément OU élément (magnésium→"magnesium supplement", fer→"iron supplement" ou "spinach lentils", iode→"seaweed kelp", zinc→"pumpkin seeds", calcium→"dairy milk cheese", sélénium→"brazil nuts", potassium→"bananas avocado"...).
- techniques (jeûne, hydrothérapie, purges, massage, sommeil, stress) : scène littérale ("water glass fasting", "sauna wood interior", "lymphatic drainage massage", "dark bedroom sleep", "meditation nature").
- aromathérapie : "essential oil bottles" ou la plante source.
- compléments/objectifs : "dietary supplement capsules" + thème.
Reste simple et concret. alt = courte description FR.

ÉTAPE 3 — Interroge l'API (remplace QUERY par ta requête, garde les guillemets) :
\`\`\`
curl -sG --max-time 25 "https://commons.wikimedia.org/w/api.php" \\
  --data-urlencode "action=query" --data-urlencode "format=json" \\
  --data-urlencode "generator=search" --data-urlencode "gsrsearch=QUERY" \\
  --data-urlencode "gsrnamespace=6" --data-urlencode "gsrlimit=6" \\
  --data-urlencode "prop=imageinfo" --data-urlencode "iiprop=url|mime|size" \\
  --data-urlencode "iiurlwidth=1200" \\
| python -c "import sys,json; d=json.load(sys.stdin); [print(p['title'],'||',p['imageinfo'][0].get('thumburl'),'||',p['imageinfo'][0].get('mime')) for p in d.get('query',{}).get('pages',{}).values()]"
\`\`\`
Choisis le candidat le PLUS pertinent : mime image/jpeg ou image/png, vraie photo (évite logos, cartes, diagrammes, captures), titre cohérent avec le sujet. Si rien de bon, refais avec une requête plus simple (max 2 essais).

ÉTAPE 4 — VÉRIFIE l'URL choisie (thumburl) :
\`\`\`
curl -s -o /dev/null -I -w "%{http_code} %{content_type}\\n" --max-time 20 "URL_CHOISIE"
\`\`\`
Ne retiens l'URL QUE si code 200 et content_type image/*. Sinon prends un autre candidat. Si vraiment aucune image vérifiée, mets src = "".

CONTRAINTES :
- src = l'URL thumburl complète (https://upload.wikimedia.org/...).
- Ne réutilise PAS la même URL pour deux slugs différents de ton lot (unicité). Si un candidat est déjà pris, prends le suivant.
- Traite TOUS les items de ton lot [${start}:${end}].

SORTIE : objet {results: [{slug, src, alt}, ...]} pour tous tes items.`;
}

phase('Source');

const ranges = [];
for (let i = 0; i < BATCHES; i++) {
  const start = i * size;
  if (start >= TOTAL) break;
  const end = Math.min(start + size, TOTAL);
  ranges.push([start, end, i]);
}

const batches = await parallel(
  ranges.map(([start, end, idx]) => () =>
    agent(promptFor(start, end, idx), {
      label: `imgs ${start}-${end}`,
      phase: 'Source',
      schema: SCHEMA,
      agentType: 'general-purpose',
    }),
  ),
);

const all = [];
for (const b of batches) {
  if (b && Array.isArray(b.results)) all.push(...b.results);
}
const filled = all.filter((r) => r && r.src && r.src.startsWith('http'));
const missing = all.filter((r) => !r || !r.src || !r.src.startsWith('http')).map((r) => (r ? r.slug : null)).filter(Boolean);

log(`Collecté: ${all.length} | avec image: ${filled.length} | manquants: ${missing.length}`);

return { results: filled, missing, count: all.length };
