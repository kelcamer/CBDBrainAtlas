// ---------------------------------------------------------------------------
// Shared direction glyph + color for the Full Autism Research Summary table.
// One canonical code per row (not a raw glyph) so both the "what's atypical
// in autism" column and the "CBD evidence" column render the same visual
// language: diagonal arrows, colored by direction.
//
// Codes:
//   'up'    — increase (activity, connectivity, volume, whatever the row is
//             measuring) — green, up-right diagonal
//   'down'  — decrease — red, down-right diagonal
//   'mixed' — genuinely opposite findings across studies/subregions/doses —
//             amber, two-way vertical
//   'null'  — tested directly, no significant effect — muted, em dash
//   null/undefined — no data at all (nothing to point a direction at)
// ---------------------------------------------------------------------------

export const DIR_ARROW = {
  up: '↗',
  down: '↘',
  mixed: '↕',
  null: '—',
}

export const DIR_COLOR = {
  up: '#3fbf8f', // matches --cbd
  down: '#ff5c86',
  mixed: '#f2c14e', // matches --nonautism
  null: '#9fb2c9',
}

export function dirArrow(code) {
  return code ? DIR_ARROW[code] : null
}

export function dirColor(code) {
  return code ? DIR_COLOR[code] : null
}
