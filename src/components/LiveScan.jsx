import { useState } from 'react'
import { searchPubMed } from '../lib/pubmed.js'

const PRESETS = [
  { label: 'CBD + autism', term: 'cannabidiol autism spectrum disorder' },
  { label: 'CBD + amygdala', term: 'cannabidiol amygdala fMRI' },
  { label: 'CBD + hippocampus', term: 'cannabidiol hippocampus' },
  { label: 'CBD + prefrontal', term: 'cannabidiol prefrontal cortex' },
  { label: 'CBDV + brain', term: 'cannabidivarin brain autism' },
  { label: 'CBD + epilepsy', term: 'cannabidiol epilepsy randomized' },
]

export default function LiveScan() {
  const [term, setTerm] = useState('cannabidiol autism brain')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  async function run(searchTerm) {
    const t = (searchTerm ?? term).trim()
    if (!t) return
    setTerm(t)
    setStatus('loading')
    setError('')
    try {
      const rows = await searchPubMed(t, 15)
      setResults(rows)
      setStatus('done')
    } catch (e) {
      setError(e?.message || 'Request failed')
      setStatus('error')
    }
  }

  return (
    <div className="livescan">
      <p className="muted">
        Query PubMed live for the newest papers — beyond the {`curated`} library above. Runs directly against
        NCBI’s E-utilities from your browser. (If your network or an ad-blocker blocks{' '}
        <code>eutils.ncbi.nlm.nih.gov</code>, the search will fail — that’s expected, and the curated library
        still works offline.)
      </p>

      <div className="livescan-bar">
        <input
          className="search-input"
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && run()}
          placeholder="e.g. cannabidiol striatum autism"
        />
        <button className="btn-primary" onClick={() => run()} disabled={status === 'loading'}>
          {status === 'loading' ? 'Searching…' : 'Search PubMed'}
        </button>
      </div>

      <div className="preset-row">
        {PRESETS.map((p) => (
          <button key={p.term} className="preset-chip" onClick={() => run(p.term)}>
            {p.label}
          </button>
        ))}
      </div>

      {status === 'error' && (
        <p className="scan-error">Couldn’t reach PubMed: {error}</p>
      )}

      {status === 'done' && results.length === 0 && <p className="muted">No results for “{term}”.</p>}

      {results.length > 0 && (
        <>
          <div className="sources-count">{results.length} results from PubMed</div>
          <ol className="source-cards">
            {results.map((r) => (
              <li key={r.pmid} className="source-card">
                <a className="source-title" href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.title}
                </a>
                <div className="source-meta">
                  {r.authors} · {r.year} · <em>{r.journal}</em>
                </div>
                <div className="source-footer">
                  <span className="badge badge-review">PMID {r.pmid}</span>
                  <a className="pubmed-link" href={r.url} target="_blank" rel="noopener noreferrer">
                    open ↗
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  )
}
