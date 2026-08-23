import { useState } from 'react'
import { REGIONS, CATEGORY_COLORS } from '../data/regions.js'

// Where the abbreviation label sits for a region.
function labelPos(r) {
  if (r.map.shape === 'ellipse') return { x: r.map.cx, y: r.map.cy }
  return { x: r.map.labelX ?? 500, y: r.map.labelY ?? 372 }
}

function RegionNode({ region, selected, dimmed, onSelect }) {
  const [hover, setHover] = useState(false)
  const color = CATEGORY_COLORS[region.category]
  const m = region.map
  const active = selected || hover
  const opacity = dimmed ? 0.12 : 1
  const lp = labelPos(region)

  const commonProps = {
    fill: region.map.shape === 'path' ? 'none' : color,
    stroke: active ? '#ffffff' : region.map.dashed ? color : '#0c1220',
    strokeWidth: active ? 2.4 : 1,
    strokeDasharray: region.map.dashed ? '4 3' : undefined,
    style: {
      cursor: dimmed ? 'default' : 'pointer',
      transition: 'opacity .25s ease, filter .15s ease',
      filter: active && !dimmed ? 'drop-shadow(0 0 6px rgba(255,255,255,.55))' : 'none',
    },
  }

  const handle = () => {
    if (!dimmed) onSelect(region.id)
  }

  return (
    <g
      opacity={opacity}
      onClick={handle}
      onMouseEnter={() => !dimmed && setHover(true)}
      onMouseLeave={() => setHover(false)}
      pointerEvents={dimmed ? 'none' : 'auto'}
      role="button"
      aria-label={region.name}
      tabIndex={dimmed ? -1 : 0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handle()}
    >
      <title>{region.name}</title>

      {m.shape === 'ellipse' && (
        <ellipse
          cx={m.cx}
          cy={m.cy}
          rx={m.rx}
          ry={m.ry}
          transform={m.rot ? `rotate(${m.rot} ${m.cx} ${m.cy})` : undefined}
          fillOpacity={region.map.dashed ? 0.18 : 0.82}
          {...commonProps}
        />
      )}

      {m.shape === 'path' && (
        <path d={m.d} strokeWidth={m.sw} strokeLinecap="round" fill="none" stroke={active ? '#ffffff' : color}
          style={commonProps.style} />
      )}
      {/* colored core for the path shape so it reads as filled even when highlighted */}
      {m.shape === 'path' && (
        <path d={m.d} strokeWidth={m.sw - 4} strokeLinecap="round" fill="none" stroke={color} pointerEvents="none" opacity={0.9} />
      )}

      {/* autism badge ring */}
      {region.autism && !dimmed && (
        <circle
          cx={lp.x}
          cy={lp.y}
          r={m.shape === 'path' ? 2 : Math.max(m.rx ?? 12, m.ry ?? 12) + 5}
          fill="none"
          stroke="#ff5da2"
          strokeWidth="1.6"
          strokeDasharray="3 3"
          pointerEvents="none"
          opacity={m.shape === 'path' ? 0 : 0.9}
        />
      )}

      <text
        x={lp.x}
        y={lp.y + 3.5}
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="700"
        fill="#ffffff"
        stroke="#0c1220"
        strokeWidth="2.4"
        paintOrder="stroke"
        pointerEvents="none"
        style={{ userSelect: 'none' }}
      >
        {region.abbr}
      </text>
    </g>
  )
}

export default function BrainMap({ selectedId, onSelect, autismOnly }) {
  return (
    <svg viewBox="0 0 820 540" className="brain-svg" role="img" aria-label="Sagittal brain schematic with CBD-affected regions">
      <defs>
        <radialGradient id="brainFill" cx="45%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#243247" />
          <stop offset="100%" stopColor="#1a2536" />
        </radialGradient>
      </defs>

      {/* ---- context anatomy (non-interactive) ---- */}
      <g className="context">
        {/* cerebrum silhouette */}
        <path
          d="M150 300 C150 205 250 150 360 150 C470 150 560 156 626 178 C690 202 718 250 704 300 C700 330 678 350 652 356 C620 364 596 372 560 374 C520 378 496 384 470 402 C440 420 400 430 360 428 C300 426 240 414 200 388 C168 368 150 340 150 300 Z"
          fill="url(#brainFill)"
          stroke="#33475f"
          strokeWidth="2"
        />
        {/* a few gyri strokes for texture */}
        <path d="M250 190 C330 175 430 175 520 190" fill="none" stroke="#33475f" strokeWidth="1.5" opacity="0.6" />
        <path d="M235 220 C330 205 440 205 545 224" fill="none" stroke="#33475f" strokeWidth="1.5" opacity="0.5" />
        <path d="M560 200 C610 210 645 235 660 265" fill="none" stroke="#33475f" strokeWidth="1.5" opacity="0.5" />

        {/* corpus callosum arc */}
        <path d="M300 252 C360 234 448 234 508 262" fill="none" stroke="#3d5674" strokeWidth="6" strokeLinecap="round" opacity="0.7" />

        {/* thalamus (context) */}
        <ellipse cx="452" cy="272" rx="26" ry="21" fill="#2c3d54" stroke="#3d5674" strokeWidth="1" opacity="0.85" />
        <text x="452" y="275" textAnchor="middle" fontSize="9" fill="#7d93ac" pointerEvents="none" style={{ userSelect: 'none' }}>Thal</text>

        {/* brainstem */}
        <path d="M486 372 C500 402 496 442 480 486 L456 480 C468 440 466 404 462 378 Z" fill="#2c3d54" stroke="#3d5674" strokeWidth="1" />
        {/* cerebellum */}
        <ellipse cx="656" cy="398" rx="56" ry="42" fill="#26374d" stroke="#3d5674" strokeWidth="1.5" />
        <path d="M612 380 C636 388 676 388 700 380 M610 398 C636 406 676 406 702 398 M614 416 C638 424 674 424 698 416" fill="none" stroke="#3d5674" strokeWidth="1" opacity="0.8" />
        <text x="656" y="458" textAnchor="middle" fontSize="9" fill="#7d93ac" pointerEvents="none" style={{ userSelect: 'none' }}>Cerebellum</text>

        {/* front / back orientation hints */}
        <text x="150" y="470" fontSize="10" fill="#5f7695">◀ front</text>
        <text x="712" y="470" fontSize="10" fill="#5f7695" textAnchor="end">back ▶</text>
      </g>

      {/* ---- interactive regions ---- */}
      {REGIONS.map((r) => (
        <RegionNode
          key={r.id}
          region={r}
          selected={selectedId === r.id}
          dimmed={autismOnly && !r.autism}
          onSelect={onSelect}
        />
      ))}
    </svg>
  )
}
