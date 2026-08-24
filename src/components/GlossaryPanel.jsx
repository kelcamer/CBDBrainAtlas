import { GLOSSARY } from '../data/glossary.js'

export default function GlossaryPanel() {
  return (
    <div className="glossary">
      <p className="muted receptor-intro">
        Plain-English definitions for the recurring technical terms used throughout this atlas — enough to
        make a finding make sense without looking anything up elsewhere.
      </p>
      <div className="glossary-list">
        {GLOSSARY.map((g) => (
          <div key={g.term} className="glossary-item">
            <div className="glossary-term">
              {g.term}
              {g.full && <span className="glossary-full"> — {g.full}</span>}
            </div>
            <p className="glossary-def">{g.definition}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
