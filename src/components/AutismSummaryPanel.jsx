import { useState } from 'react'
import { AUTISM_SUMMARY } from '../data/autismSummary.js'

const STATUS_LABEL = {
  autism: 'CBD evidence in autism',
  general: 'CBD evidence, not autism-specific',
  null: 'Tested — no CBD effect',
  gap: 'No CBD research',
}

function buildSummaryText() {
  const lines = [
    'CBD Brain Atlas — Full Autism Research Summary',
    '',
    'Brain area | What’s atypical in autism | Why / whether CBD helps',
    '-----------|---------------------------|------------------------',
  ]
  for (const row of AUTISM_SUMMARY) {
    lines.push(
      `${row.direction} ${row.area} | ${row.autismFinding} | [${STATUS_LABEL[row.cbdStatus]}] ${row.cbdFinding}`
    )
  }
  return lines.join('\n')
}

export default function AutismSummaryPanel({ onJumpToRegion }) {
  const [copied, setCopied] = useState(false)

  const counts = AUTISM_SUMMARY.reduce((acc, r) => {
    acc[r.cbdStatus] = (acc[r.cbdStatus] || 0) + 1
    return acc
  }, {})

  const handleCopy = async () => {
    const text = buildSummaryText()
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for environments without clipboard API access
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="summary-panel">
      <div className="summary-header-row">
        <p className="muted receptor-intro">
          Every brain area with a documented autism finding in this atlas’s research, and — directly
          alongside it — what CBD research (if any) exists there. Rows with a link icon jump back to that
          region’s full detail on the map.
        </p>
        <button className={copied ? 'summary-copy-btn copied' : 'summary-copy-btn'} onClick={handleCopy}>
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>

      <div className="summary-legend">
        <span className="summary-chip status-autism">● CBD evidence in autism ({counts.autism || 0})</span>
        <span className="summary-chip status-general">● CBD evidence, not autism-specific ({counts.general || 0})</span>
        <span className="summary-chip status-null">● Tested — no CBD effect ({counts.null || 0})</span>
        <span className="summary-chip status-gap">● No CBD research ({counts.gap || 0})</span>
      </div>

      <div className="summary-table-wrap">
        <table className="summary-table">
          <thead>
            <tr>
              <th>Brain area</th>
              <th>What’s atypical in autism</th>
              <th>Why / whether CBD helps</th>
            </tr>
          </thead>
          <tbody>
            {AUTISM_SUMMARY.map((row) => (
              <tr
                key={row.area}
                className={row.regionId ? 'clickable' : undefined}
                onClick={row.regionId ? () => onJumpToRegion(row.regionId) : undefined}
              >
                <td className="summary-area">
                  <span className="summary-dir" aria-hidden="true">{row.direction}</span> {row.area}
                  {row.regionId && <span className="summary-link-hint"> ↗</span>}
                </td>
                <td className="summary-autism-cell">{row.autismFinding}</td>
                <td className={`summary-cbd-cell status-${row.cbdStatus}`}>
                  <span className="summary-status-label">{STATUS_LABEL[row.cbdStatus]}</span>
                  <p>{row.cbdFinding}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
