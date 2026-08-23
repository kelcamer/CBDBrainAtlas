import { useMemo, useState } from 'react'
import { SOURCES } from '../data/sources.js'
import { REGIONS, REGION_BY_ID } from '../data/regions.js'

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All types' },
  { id: 'imaging', label: 'Human neuroimaging' },
  { id: 'clinical', label: 'Clinical trials' },
  { id: 'preclinical', label: 'Preclinical' },
  { id: 'review', label: 'Reviews' },
]

const CATEGORY_BADGE = {
  imaging: 'badge-imaging',
  clinical: 'badge-clinical',
  preclinical: 'badge-preclinical',
  review: 'badge-review',
}

export default function SourceList({ autismOnly, regionFilter, onRegionFilter }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return SOURCES.filter((s) => {
      if (autismOnly && !s.autism) return false
      if (category !== 'all' && s.category !== category) return false
      if (regionFilter !== 'all' && !s.regions.includes(regionFilter)) return false
      if (q) {
        const hay = `${s.title} ${s.authors} ${s.journal} ${s.finding}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [query, category, autismOnly, regionFilter])

  return (
    <div className="sources">
      <div className="sources-toolbar">
        <input
          className="search-input"
          type="search"
          placeholder="Search titles, authors, findings…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORY_FILTERS.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        <select className="select" value={regionFilter} onChange={(e) => onRegionFilter(e.target.value)}>
          <option value="all">All brain regions</option>
          {REGIONS.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sources-count">
        {filtered.length} of {SOURCES.length} sources
        {autismOnly && <span className="tag tag-autism">autism only</span>}
        {regionFilter !== 'all' && (
          <span className="tag tag-region">
            {REGION_BY_ID[regionFilter]?.name}
            <button className="tag-x" onClick={() => onRegionFilter('all')} aria-label="Clear region filter">
              ×
            </button>
          </span>
        )}
      </div>

      {filtered.length === 0 && <p className="muted">No sources match these filters.</p>}

      <ol className="source-cards">
        {filtered.map((s) => (
          <li key={s.id} className="source-card">
            <div className="source-card-head">
              <a className="source-title" href={s.url} target="_blank" rel="noopener noreferrer">
                {s.title}
              </a>
              {s.autism && <span className="tag tag-autism">autism</span>}
            </div>
            <div className="source-meta">
              {s.authors} · {s.year} · <em>{s.journal}</em>
            </div>
            <p className="source-finding">{s.finding}</p>
            <div className="source-footer">
              <span className={`badge ${CATEGORY_BADGE[s.category]}`}>{s.type}</span>
              {s.regions.map((rid) => (
                <button key={rid} className="region-pill" onClick={() => onRegionFilter(rid)}>
                  {REGION_BY_ID[rid]?.abbr}
                </button>
              ))}
              <a className="pubmed-link" href={s.url} target="_blank" rel="noopener noreferrer">
                open ↗
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
