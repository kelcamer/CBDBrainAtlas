import { GAPS } from '../data/gaps.js'

export default function GapsPanel() {
  return (
    <div className="gaps">
      <p className="muted receptor-intro">
        Autism affects more of the brain than CBD research has looked at. The regions above all have at least
        one CBD study behind them; the areas below are well-replicated autism findings where this atlas’s
        literature review found <strong>no CBD research at all</strong> — autism-specific or general. Absence
        of evidence isn’t evidence of absence, but it’s worth being upfront about where the map runs out.
      </p>
      <div className="gap-grid">
        {GAPS.map((g) => (
          <div key={g.id} className="gap-card">
            <div className="gap-name">{g.name}</div>
            <div className="gap-row">
              <span className="gap-label gap-label-autism">Autism evidence</span>
              <p>{g.autismEvidence}</p>
            </div>
            <div className="gap-row">
              <span className="gap-label gap-label-cbd">CBD research</span>
              <p>{g.cbdGap}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
