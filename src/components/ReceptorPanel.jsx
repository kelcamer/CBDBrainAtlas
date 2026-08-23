import { RECEPTORS } from '../data/receptors.js'

export default function ReceptorPanel() {
  return (
    <div className="receptors">
      <p className="muted receptor-intro">
        CBD is a “promiscuous” molecule — it engages many targets at once and binds the classic cannabinoid
        receptor CB1 only weakly. This polypharmacology is why its effects span so many brain regions.
        Targets compiled from mechanism reviews (Campos 2012; Blessing 2015; Melas 2021; Batalla 2021).
      </p>
      <div className="receptor-grid">
        {RECEPTORS.map((r) => (
          <div key={r.id} className="receptor-card">
            <div className="receptor-name">{r.name}</div>
            <div className="receptor-action">{r.action}</div>
            <div className="receptor-effect">{r.effect}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
