/**
 * Proxy NCBI E-utilities — recherche PubMed.
 * GET /api/pubmed/search?q=ascorbic+acid+toxicity&n=10
 *
 * Renvoie un tableau de résultats { pmid, title, authors, journal, year, url }.
 * Cache 24 h pour éviter les rate limits NCBI (3 req/s sans clé).
 */

const EUTILS = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

interface Summary {
  uid: string;
  title?: string;
  authors?: { name: string }[];
  fulljournalname?: string;
  pubdate?: string;
}

export const revalidate = 86400; // 24 h

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') ?? '').trim();
  const n = Math.min(Math.max(parseInt(searchParams.get('n') ?? '10', 10) || 10, 1), 25);

  if (!q) {
    return Response.json({ error: 'Missing q parameter' }, { status: 400 });
  }

  try {
    // 1) esearch — trouve les PMIDs
    const esearchUrl = `${EUTILS}/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmode=json&retmax=${n}&sort=relevance`;
    const esearchRes = await fetch(esearchUrl, {
      next: { revalidate: 86400 },
      headers: { 'User-Agent': 'Nutriea/1.0 (https://naturo-nutri.vercel.app)' },
    });
    if (!esearchRes.ok) {
      return Response.json({ error: 'NCBI esearch failed' }, { status: 502 });
    }
    const esearchData = await esearchRes.json();
    const ids: string[] = esearchData?.esearchresult?.idlist ?? [];
    if (ids.length === 0) {
      return Response.json({ results: [], total: 0 });
    }

    // 2) esummary — récupère les métadonnées
    const esummaryUrl = `${EUTILS}/esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json`;
    const esummaryRes = await fetch(esummaryUrl, {
      next: { revalidate: 86400 },
      headers: { 'User-Agent': 'Nutriea/1.0 (https://naturo-nutri.vercel.app)' },
    });
    if (!esummaryRes.ok) {
      return Response.json({ error: 'NCBI esummary failed' }, { status: 502 });
    }
    const esummaryData = await esummaryRes.json();
    const result = esummaryData?.result ?? {};

    const items = ids
      .map((id) => result[id] as Summary | undefined)
      .filter((s): s is Summary => !!s)
      .map((s) => ({
        pmid: s.uid,
        title: s.title ?? '',
        authors: (s.authors ?? []).slice(0, 3).map((a) => a.name).join(', '),
        journal: s.fulljournalname ?? '',
        year: s.pubdate ? parseInt(s.pubdate.slice(0, 4), 10) : undefined,
        url: `https://pubmed.ncbi.nlm.nih.gov/${s.uid}/`,
      }));

    return Response.json(
      { results: items, total: items.length },
      {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
        },
      },
    );
  } catch (err) {
    return Response.json({ error: 'Unexpected error', detail: String(err) }, { status: 500 });
  }
}
