// ---------------------------------------------------------------------------
// Brain regions CBD is documented to affect.
// Each region references source ids from sources.js.
//
// `map` holds SVG geometry for the schematic sagittal brain (viewBox 0 0 820 540):
//   ellipse -> { shape:'ellipse', cx, cy, rx, ry, rot? }
//   path    -> { shape:'path', d, sw }   (rendered as a wide stroked path)
// `abbr` is drawn on the node; `labelDx/labelDy` nudges the abbreviation text.
//
// `category` drives node colour (see CATEGORY_COLORS).
// `autism` = true if at least one autism-specific study maps to this region.
// ---------------------------------------------------------------------------

export const CATEGORY_COLORS = {
  cortical: '#5b8cff',
  limbic: '#ff8a5c',
  striatal: '#b57cff',
  memory: '#2dd4a7',
  midbrain: '#f2c14e',
  serotonergic: '#4cc9e0',
}

export const CATEGORY_LABELS = {
  cortical: 'Cortex',
  limbic: 'Limbic / emotion',
  striatal: 'Striatal / reward',
  memory: 'Memory (hippocampal)',
  midbrain: 'Midbrain',
  serotonergic: 'Serotonergic',
}

export const REGIONS = [
  {
    id: 'pfc',
    name: 'Prefrontal cortex',
    abbr: 'PFC',
    category: 'cortical',
    autism: true,
    map: { shape: 'ellipse', cx: 214, cy: 262, rx: 30, ry: 42 },
    summary:
      'CBD shifts prefrontal activity and excitatory/inhibitory balance. In salience and memory tasks it tends to reduce over-activation, and in autistic adults it lowers prefrontal GABA where it does not in non-autistic controls.',
    functions: ['Executive control & decision-making', 'Emotion regulation', 'Working memory', 'Social cognition'],
    mechanism:
      'Local 5-HT1A and CB1 receptors mediate antidepressant-like effects; CBD also modulates the glutamate/GABA (excitation–inhibition) balance measured with MR spectroscopy.',
    autismNote:
      'Prefrontal glutamate–GABA imbalance is a leading model of autism. Both CBD and CBDV measurably shift these signals in autistic brains (Pretzsch 2019).',
    sourceIds: ['bhatt2012', 'bhatt2015', 'oneill2021', 'grimm2018', 'wall2022', 'batalla2021', 'campos2012', 'sartim2016', 'blessing2015', 'melas2021', 'garciagutierrez2020', 'pretzschCBD2019', 'pretzschCBDV2019'],
  },
  {
    id: 'acc',
    name: 'Anterior cingulate cortex',
    abbr: 'ACC',
    category: 'cortical',
    autism: false,
    map: { shape: 'ellipse', cx: 322, cy: 232, rx: 34, ry: 15, rot: -20 },
    summary:
      'A core node of the “emotional brain.” CBD blunts anterior cingulate responses to threat and reshapes its connectivity with the amygdala.',
    functions: ['Conflict & error monitoring', 'Emotional appraisal', 'Autonomic regulation'],
    mechanism:
      'Part of the amygdala–ACC–insula salience circuit engaged during fear; CBD reduces ACC reactivity and dampens forward ACC→amygdala connectivity.',
    autismNote: null,
    sourceIds: [
      'fusarpoli2009', 'fusarpoli2010', 'perry2024', 'batalla2021',
      'kowal2013', 'lawn2020', 'bloomfield2022', 'koethe2007', 'vallee2022', 'rutledge2026',
    ],
  },
  {
    id: 'pcc',
    name: 'Posterior cingulate cortex',
    abbr: 'PCC',
    category: 'cortical',
    autism: false,
    map: { shape: 'ellipse', cx: 400, cy: 256, rx: 26, ry: 13, rot: -8 },
    summary:
      'The hub of the default-mode network. CBD’s effects here are the least settled in the atlas: single-dose SPECT studies find shifted blood flow, and CBD (unlike THC-only cannabis) preserves PCC-anchored resting-state connectivity — but a 2026 systematic review found no consistent direction of effect across studies.',
    functions: ['Default-mode network hub', 'Self-referential thought', 'Autobiographical memory', 'Internally directed attention'],
    mechanism:
      'Densely connected to the hippocampus, parahippocampal gyrus and precuneus; CBD studies here rely on resting perfusion (SPECT) and resting-state fMRI connectivity rather than task activation, which likely explains the mixed findings.',
    autismNote:
      'The PCC/default-mode network is atypically connected in autism, but no study in this atlas has yet tested CBD’s effect on PCC function specifically in autistic people — a clear gap for future research.',
    sourceIds: ['crippa2004', 'crippa2011', 'wall2019dissociable', 'vanboxel2023', 'rutledge2026'],
  },
  {
    id: 'insula',
    name: 'Anterior insula',
    abbr: 'INS',
    category: 'limbic',
    autism: false,
    map: { shape: 'ellipse', cx: 292, cy: 300, rx: 15, ry: 19, dashed: true },
    summary:
      'The anterior insula tracks bodily/interoceptive arousal. CBD — and even the expectation of CBD — alters its stress-related connectivity with the amygdala and cingulate.',
    functions: ['Interoception (body-state sensing)', 'Salience detection', 'Anxiety & disgust processing'],
    mechanism:
      'A hub of the salience network; effects overlap with CBD’s broader anxiolytic modulation of limbic circuits. (Shown here schematically — the insula is buried in the lateral sulcus.)',
    autismNote: null,
    sourceIds: ['perry2024', 'batalla2021', 'wilson2019', 'lawn2020'],
  },
  {
    id: 'amygdala',
    name: 'Amygdala',
    abbr: 'AMY',
    category: 'limbic',
    autism: false,
    map: { shape: 'ellipse', cx: 402, cy: 324, rx: 15, ry: 12, rot: 20 },
    summary:
      'The brain’s threat detector. A single dose of CBD reliably dampens amygdala reactivity to fearful faces and negative stimuli.',
    functions: ['Fear & threat processing', 'Emotional salience', 'Stress responses'],
    mechanism:
      'Reduced amygdala BOLD response accompanies lower physiological arousal; mediated partly via 5-HT1A receptors and altered limbic connectivity.',
    autismNote: null,
    sourceIds: [
      'fusarpoli2009', 'fusarpoli2010', 'perry2024', 'davies2020', 'batalla2021', 'blessing2015', 'garciagutierrez2020',
      'crippa2004', 'bhattacharyya2010', 'bloomfield2022', 'lorenzetti2024',
    ],
  },
  {
    id: 'hippocampus',
    name: 'Hippocampus & medial temporal lobe',
    abbr: 'HPC',
    category: 'memory',
    autism: true,
    map: { shape: 'path', d: 'M436 314 C 454 314, 472 326, 488 336 C 500 344, 510 350, 520 352', sw: 15, labelX: 486, labelY: 378 },
    summary:
      'CBD modulates hippocampal (and parahippocampal) activity, supports adult neurogenesis under stress, and disrupts the consolidation of fear memories.',
    functions: ['Learning & memory', 'Contextual fear', 'Adult neurogenesis', 'Mood regulation'],
    mechanism:
      'Anandamide-dependent neurogenesis (via FAAH inhibition) underlies chronic effects; dorsal-hippocampal CB1/CB2 receptors gate fear-memory consolidation.',
    autismNote:
      'In the valproate rat model of autism, CBDV restored hippocampal endocannabinoid signalling and reduced microglial activation (Zamberletti 2019).',
    sourceIds: ['bhatt2012', 'bhatt2015', 'bhatt2018', 'davies2020', 'oneill2021', 'batalla2021', 'campos2012', 'stern2017', 'blessing2015', 'melas2021', 'garciagutierrez2020', 'zamberletti2019'],
  },
  {
    id: 'striatum',
    name: 'Striatum (caudate & putamen)',
    abbr: 'STR',
    category: 'striatal',
    autism: true,
    map: { shape: 'ellipse', cx: 386, cy: 272, rx: 30, ry: 24, rot: -12 },
    summary:
      'CBD changes striatal activation and its connectivity with cortex during salience and fear tasks — often opposite to THC — and shifts basal-ganglia glutamate in autistic adults.',
    functions: ['Reward & motivation', 'Habit & motor control', 'Salience attribution'],
    mechanism:
      'Enhances fronto-striatal connectivity; modulates basal-ganglia glutamate (Glx) measured with MR spectroscopy.',
    autismNote:
      'Basal-ganglia glutamate and striatal connectivity are atypical in autism; CBD and CBDV measurably shift both toward neurotypical patterns (Pretzsch 2019, 2021).',
    sourceIds: [
      'bhatt2012', 'bhatt2015', 'bhatt2018', 'davies2020', 'oneill2021', 'grimm2018', 'wall2022', 'batalla2021',
      'pretzschCBD2019', 'pretzschCBDV2019', 'pretzschCBDV2021',
      'bhattacharyya2010', 'seeman2016', 'mosley2023', 'morenoalcazar2018', 'wall2019dissociable',
    ],
  },
  {
    id: 'caudate',
    name: 'Caudate nucleus',
    abbr: 'CAU',
    category: 'striatal',
    autism: true,
    map: { shape: 'ellipse', cx: 366, cy: 244, rx: 16, ry: 13, rot: -10 },
    summary:
      'The dorsomedial part of the striatum, singled out across many of the studies above: CBD raises caudate activation opposite to THC, and the receptor mechanisms behind CBD’s antipsychotic and anti-craving effects (GPR55, dopamine D2High) are concentrated here.',
    functions: ['Goal-directed action selection', 'Habit learning', 'Cognitive/motor loop of the basal ganglia', 'Salience & reward signalling'],
    mechanism:
      'CBD antagonises GPR55 and acts as a dopamine-D2High partial agonist, both receptor types dense in caudate medium spiny neurons; in imaging studies CBD boosts caudate activation during verbal-memory encoding and salience tasks where THC does the opposite.',
    autismNote:
      'CBDV shifted atypical caudate/putamen/accumbens connectivity in autistic adults toward the non-autistic pattern (Pretzsch 2021), and cortico-striato-thalamo-cortical circuitry involving the caudate is implicated in both autism and OCD.',
    sourceIds: [
      'ryberg2007', 'seeman2016', 'bhattacharyya2010', 'sharma2019', 'mosley2023', 'lawn2020',
      'morenoalcazar2018', 'wall2019dissociable', 'rutledge2026', 'vallee2022',
      'bhatt2012', 'davies2020', 'oneill2021', 'pretzschCBDV2021',
    ],
  },
  {
    id: 'nac',
    name: 'Nucleus accumbens (ventral striatum)',
    abbr: 'NAc',
    category: 'striatal',
    autism: true,
    map: { shape: 'ellipse', cx: 338, cy: 322, rx: 14, ry: 11 },
    summary:
      'Part of the ventral striatum’s reward circuitry. CBDV shifts atypical nucleus-accumbens functional connectivity in autistic adults toward the non-autistic pattern, and single-dose CBD lowers cue-induced accumbens activation during craving in substance use disorders.',
    functions: ['Reward & pleasure', 'Motivation', 'Social reward'],
    mechanism:
      'Studied as part of striatal functional connectivity; sits within the mesolimbic dopamine system that CBD influences indirectly, partly via accumbal D1/D2 dopamine receptors.',
    autismNote:
      'Nucleus-accumbens connectivity differences relate to social-motivation models of autism (Pretzsch 2021).',
    sourceIds: ['pretzschCBDV2021', 'zimmermann2025', 'sharifi2022', 'morenoalcazar2018', 'lawn2020'],
  },
  {
    id: 'midbrain',
    name: 'Midbrain (substantia nigra / VTA)',
    abbr: 'MB',
    category: 'midbrain',
    autism: false,
    map: { shape: 'ellipse', cx: 470, cy: 314, rx: 16, ry: 14 },
    summary:
      'CBD partially normalises abnormal midbrain activation — a dopamine hub — in people at high risk for psychosis.',
    functions: ['Dopamine production (SN/VTA)', 'Arousal', 'Salience signalling'],
    mechanism:
      'The midbrain–striatal–hippocampal loop is central to psychosis; CBD nudges over- or under-active nodes toward control levels.',
    autismNote: null,
    sourceIds: ['bhatt2018', 'batalla2021'],
  },
  {
    id: 'pag',
    name: 'Periaqueductal grey (dorsal PAG)',
    abbr: 'PAG',
    category: 'midbrain',
    autism: false,
    map: { shape: 'ellipse', cx: 492, cy: 330, rx: 11, ry: 10 },
    summary:
      'The dorsal periaqueductal grey organises defensive responses and pain. CBD acts here through serotonin receptors to reduce anxiety-like and panic responses.',
    functions: ['Defensive behaviour', 'Panic responses', 'Descending pain control'],
    mechanism:
      'Acute anxiolytic effects depend on facilitating 5-HT1A neurotransmission in the dorsal PAG.',
    autismNote: null,
    sourceIds: ['campos2012'],
  },
  {
    id: 'drn',
    name: 'Dorsal raphe nucleus',
    abbr: 'DRN',
    category: 'serotonergic',
    autism: false,
    map: { shape: 'ellipse', cx: 478, cy: 362, rx: 10, ry: 13 },
    summary:
      'The dorsal raphe is the brain’s main serotonin source. CBD’s acute mood and anxiety effects hinge on 5-HT1A signalling linked to this system.',
    functions: ['Serotonin (5-HT) supply', 'Mood regulation', 'Stress resilience'],
    mechanism:
      'CBD behaves as a 5-HT1A agonist/modulator, shaping the serotonergic tone that reaches the whole forebrain.',
    autismNote: null,
    sourceIds: ['campos2012', 'blessing2015', 'melas2021', 'garciagutierrez2020'],
  },
  {
    id: 'bnst',
    name: 'Bed nucleus of the stria terminalis',
    abbr: 'BNST',
    category: 'limbic',
    autism: false,
    map: { shape: 'ellipse', cx: 358, cy: 298, rx: 10, ry: 8 },
    summary:
      'The BNST drives sustained (“anticipatory”) anxiety. CBD reduces these responses through serotonin receptors.',
    functions: ['Sustained anxiety', 'Threat anticipation', 'HPA-axis modulation'],
    mechanism:
      'Like the dorsal PAG, acute anxiolysis here relies on 5-HT1A-mediated neurotransmission.',
    autismNote: null,
    sourceIds: ['campos2012'],
  },
]

export const REGION_BY_ID = Object.fromEntries(REGIONS.map((r) => [r.id, r]))
