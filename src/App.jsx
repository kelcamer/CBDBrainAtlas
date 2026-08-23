import { useEffect, useMemo, useState } from 'react'
import BrainMap from './components/BrainMap.jsx'
import RegionPanel from './components/RegionPanel.jsx'
import SourceList from './components/SourceList.jsx'
import ReceptorPanel from './components/ReceptorPanel.jsx'
import LiveScan from './components/LiveScan.jsx'
import GapsPanel from './components/GapsPanel.jsx'
import { REGIONS, REGION_BY_ID, CATEGORY_COLORS } from './data/regions.js'
import { SOURCES } from './data/sources.js'
import { RECEPTORS } from './data/receptors.js'

const TABS = [
  { id: 'sources', label: 'Sources' },
  { id: 'targets', label: 'Molecular targets' },
  { id: 'scan', label: 'Live PubMed scan' },
  { id: 'gaps', label: 'Research gaps' },
]

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [autismOnly, setAutismOnly] = useState(false)
  const [tab, setTab] = useState('sources')
  const [regionFilter, setRegionFilter] = useState('all')

  const selectedRegion = selectedId ? REGION_BY_ID[selectedId] : null

  // Stats
  const stats = useMemo(() => {
    const autismCount = SOURCES.filter((s) => s.autism).length
    return {
      sources: SOURCES.length,
      regions: REGIONS.length,
      autism: autismCount,
      targets: RECEPTORS.length,
    }
  }, [])

  // If autism-only hides the current selection, clear it.
  useEffect(() => {
    if (autismOnly && selectedRegion && !selectedRegion.autism) setSelectedId(null)
  }, [autismOnly, selectedRegion])

  const selectRegion = (id) => setSelectedId((cur) => (cur === id ? null : id))

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-main">
          <h1>
            <span className="leaf">✿</span> CBD Brain Atlas
          </h1>
          <p className="subtitle">
            An interactive map of the brain regions cannabidiol affects — with a dedicated autism-research
            view. Built from {stats.sources} peer-reviewed sources.
          </p>
        </div>

        <div className="header-controls">
          <div className="stat-row">
            <Stat n={stats.sources} label="sources" />
            <Stat n={stats.regions} label="brain regions" />
            <Stat n={stats.autism} label="autism studies" highlight={autismOnly} />
            <Stat n={stats.targets} label="molecular targets" />
          </div>

          <div className="mode-toggle" role="group" aria-label="Research view">
            <button
              className={!autismOnly ? 'toggle active' : 'toggle'}
              onClick={() => setAutismOnly(false)}
            >
              All research
            </button>
            <button
              className={autismOnly ? 'toggle active toggle-autism' : 'toggle'}
              onClick={() => setAutismOnly(true)}
            >
              Autism research only
            </button>
          </div>
        </div>
      </header>

      {autismOnly && (
        <div className="autism-banner">
          Showing autism-specific research only. On the map, {REGIONS.filter((r) => r.autism).length} regions
          have direct autism evidence — the rest are dimmed. The source list and live scan are filtered to ASD
          studies.
        </div>
      )}

      <main className="app-main">
        <section className="map-section">
          <div className="panel map-panel">
            <BrainMap selectedId={selectedId} onSelect={selectRegion} autismOnly={autismOnly} />

            <div className="legend">
              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <span key={cat} className="legend-item">
                  <span className="legend-dot" style={{ background: color }} />
                  {legendLabel(cat)}
                </span>
              ))}
              <span className="legend-item">
                <span className="legend-dot legend-autism" />
                autism evidence
              </span>
            </div>

            <div className="chip-grid">
              {REGIONS.map((r) => {
                const dimmed = autismOnly && !r.autism
                return (
                  <button
                    key={r.id}
                    className={
                      'region-chip' +
                      (selectedId === r.id ? ' selected' : '') +
                      (dimmed ? ' dimmed' : '') +
                      (r.autism ? ' has-autism' : '')
                    }
                    style={{ '--chip-color': CATEGORY_COLORS[r.category] }}
                    disabled={dimmed}
                    onClick={() => selectRegion(r.id)}
                  >
                    <span className="chip-abbr">{r.abbr}</span>
                    <span className="chip-name">{r.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <RegionPanel region={selectedRegion} onClear={() => setSelectedId(null)} />
        </section>

        <section className="tabs-section">
          <div className="tab-bar">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={tab === t.id ? 'tab active' : 'tab'}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="panel tab-panel">
            {tab === 'sources' && (
              <SourceList
                autismOnly={autismOnly}
                regionFilter={regionFilter}
                onRegionFilter={setRegionFilter}
              />
            )}
            {tab === 'targets' && <ReceptorPanel />}
            {tab === 'scan' && <LiveScan />}
            {tab === 'gaps' && <GapsPanel />}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          <strong>Educational summary of published research — not medical advice.</strong> CBD interacts with
          many medications (notably some anti-seizure drugs) and is not risk-free. Findings here are simplified;
          follow each link to the primary source, and consult a clinician for personal decisions.
        </p>
        <p className="muted small">
          All {stats.sources} sources link to PubMed, JAMA, NEJM, The Lancet, Nature, or the journal’s DOI.
          Brain-region positions are a simplified schematic.
        </p>
      </footer>
    </div>
  )
}

function Stat({ n, label, highlight }) {
  return (
    <div className={'stat' + (highlight ? ' stat-hot' : '')}>
      <div className="stat-n">{n}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function legendLabel(cat) {
  const map = {
    cortical: 'Cortex',
    limbic: 'Limbic',
    striatal: 'Striatal',
    memory: 'Hippocampal',
    midbrain: 'Midbrain',
    serotonergic: 'Serotonergic',
    cerebellar: 'Cerebellar',
  }
  return map[cat] || cat
}
