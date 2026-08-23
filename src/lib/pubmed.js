// ---------------------------------------------------------------------------
// Minimal PubMed E-utilities client (runs in the browser).
// Lets the app fetch fresh papers on demand, beyond the curated library.
//
// NOTE: NCBI rate-limits anonymous requests to ~3/second. This helper does one
// esearch + one esummary per query, so normal interactive use is well within
// limits. If a corporate network or ad-blocker blocks eutils.ncbi.nlm.nih.gov,
// the call will fail gracefully and the UI shows an explanatory message.
// ---------------------------------------------------------------------------

const BASE = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils'

async function getJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`PubMed request failed (${res.status})`)
  return res.json()
}

/**
 * Search PubMed and return lightweight article records.
 * @param {string} term  free-text query
 * @param {number} retmax how many results (default 15)
 * @returns {Promise<Array<{pmid,title,authors,journal,year,url}>>}
 */
export async function searchPubMed(term, retmax = 15) {
  const q = encodeURIComponent(term.trim())
  if (!q) return []

  const esearch = await getJson(
    `${BASE}/esearch.fcgi?db=pubmed&retmode=json&sort=relevance&retmax=${retmax}&term=${q}`
  )
  const ids = esearch?.esearchresult?.idlist ?? []
  if (ids.length === 0) return []

  const esummary = await getJson(
    `${BASE}/esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(',')}`
  )
  const result = esummary?.result ?? {}

  return ids
    .map((id) => {
      const r = result[id]
      if (!r) return null
      const authors = (r.authors || [])
        .filter((a) => a.authtype === 'Author')
        .map((a) => a.name)
      const authorStr =
        authors.length === 0
          ? 'Unknown authors'
          : authors.length <= 3
          ? authors.join(', ')
          : `${authors.slice(0, 3).join(', ')}, et al.`
      const year = (r.pubdate || '').split(' ')[0] || ''
      return {
        pmid: id,
        title: r.title ? r.title.replace(/\.$/, '') : '(untitled)',
        authors: authorStr,
        journal: r.fulljournalname || r.source || '',
        year,
        url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
      }
    })
    .filter(Boolean)
}
