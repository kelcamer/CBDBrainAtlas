import { CATEGORY_COLORS, CATEGORY_LABELS } from '../data/regions.js'
import { SOURCE_BY_ID } from '../data/sources.js'

function SourceLink({ id }) {
  const s = SOURCE_BY_ID[id]
  if (!s) return null
  return (
    <li>
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        {s.authors.split(',')[0]} et al. ({s.year})
      </a>
      <span className="src-mini-journal"> — {s.journal}</span>
      {s.autism && <span className="tag tag-autism">autism</span>}
    </li>
  )
}

export default function RegionPanel({ region, onClear }) {
  if (!region) {
    return (
      <div className="panel region-panel region-empty">
        <h2>Explore the map</h2>
        <p className="muted">
          Click any coloured region on the brain (or a chip below it) to see what CBD does there, how it
          works, and the studies behind it. Regions circled in{' '}
          <span style={{ color: '#ff5da2', fontWeight: 700 }}>pink</span> have autism-specific evidence.
        </p>
        <p className="muted small">
          The map is a simplified midsagittal schematic — positions are approximate and meant for
          orientation, not surgical accuracy.
        </p>
      </div>
    )
  }

  const color = CATEGORY_COLORS[region.category]
  const sources = region.sourceIds.map((id) => SOURCE_BY_ID[id]).filter(Boolean)
  const autismSources = sources.filter((s) => s.autism)

  return (
    <div className="panel region-panel">
      <div className="region-head">
        <span className="region-swatch" style={{ background: color }} />
        <div>
          <h2>{region.name}</h2>
          <div className="region-cat">
            {CATEGORY_LABELS[region.category]} · {sources.length} source{sources.length !== 1 ? 's' : ''}
          </div>
        </div>
        <button className="close-btn" onClick={onClear} aria-label="Clear selection">
          ×
        </button>
      </div>

      <p className="region-summary">{region.summary}</p>

      <div className="region-block">
        <h3>What this region does</h3>
        <div className="chip-row">
          {region.functions.map((f) => (
            <span key={f} className="fn-chip">
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="region-block">
        <h3>How CBD acts here</h3>
        <p className="muted">{region.mechanism}</p>
      </div>

      {region.autismNote && (
        <div className="region-block autism-note">
          <h3>Autism connection</h3>
          <p>{region.autismNote}</p>
        </div>
      )}

      <div className="region-block">
        <h3>
          Sources {autismSources.length > 0 && <span className="autism-count">({autismSources.length} autism)</span>}
        </h3>
        <ul className="src-mini-list">
          {sources.map((s) => (
            <SourceLink key={s.id} id={s.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
