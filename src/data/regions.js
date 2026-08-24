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
  cerebellar: '#8bc954',
}

export const CATEGORY_LABELS = {
  cortical: 'Cortex',
  limbic: 'Limbic / emotion',
  striatal: 'Striatal / reward',
  memory: 'Memory (hippocampal)',
  midbrain: 'Midbrain',
  serotonergic: 'Serotonergic',
  cerebellar: 'Cerebellar',
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
      'Local 5-HT1A and CB1 receptors mediate antidepressant-like effects; CBD also modulates the glutamate/GABA (excitation–inhibition) balance measured with MR spectroscopy. The orbitofrontal cortex, a ventral part of this region, was directly tested in a reward task (Lawn 2020) and showed no significant CBD effect — a null result, not an untested area.',
    autismNote:
      'Prefrontal glutamate–GABA imbalance is a leading model of autism. In autistic adults, CBD decreases dorsomedial-prefrontal GABA (Pretzsch 2019). Prefrontal 2-AG (a different endocannabinoid, not glutamate) is separately reported reduced in autism (Jia 2025). CBDV normalises atypical fronto-striatal connectivity in autistic adults (Pretzsch 2021), and a 2025 EEG study found CBD increased right fronto-parietal connectivity in autistic children (Parrella 2025) — though behavioural trials of CBD in autism have shown mixed, often null, primary-outcome results (Aran 2021, Trauner 2025, Parrella 2026).',
    nonAutismNote:
      'In non-autistic adults, CBD increases dorsomedial-prefrontal GABA — the opposite direction from autistic adults (Pretzsch 2019). The basal-ganglia glutamate rise and dorsomedial-prefrontal glutamate drop CBD produces happen the same way in non-autistic adults as in autistic adults — those parts aren’t different by diagnosis (Pretzsch 2019, CBDV: Pretzsch 2019).',
    sourceIds: [
      'bhatt2012', 'bhatt2015', 'oneill2021', 'grimm2018', 'wall2022', 'batalla2021', 'campos2012', 'sartim2016',
      'blessing2015', 'melas2021', 'garciagutierrez2020', 'pretzschCBD2019', 'pretzschCBDV2019',
      'parrella2025eeg', 'yeh2017', 'pretzschCBDV2021', 'jia2025', 'lawn2020',
    ],
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
    nonAutismNote: null,
    sourceIds: [
      'fusarpoli2009', 'fusarpoli2010', 'perry2024', 'batalla2021',
      'kowal2013', 'lawn2020', 'bloomfield2022', 'koethe2007', 'vallee2022', 'rutledge2026', 'parrella2025eeg',
    ],
  },
  {
    id: 'pcc',
    name: 'Posterior cingulate cortex',
    abbr: 'PCC',
    category: 'cortical',
    autism: true,
    map: { shape: 'ellipse', cx: 400, cy: 256, rx: 26, ry: 13, rot: -8 },
    summary:
      'The hub of the default-mode network. CBD’s effects here are the least settled in the atlas: single-dose SPECT studies find shifted blood flow, and CBD (unlike THC-only cannabis) preserves PCC-anchored resting-state connectivity — but a 2026 systematic review found no consistent direction of effect across studies.',
    functions: ['Default-mode network hub', 'Self-referential thought', 'Autobiographical memory', 'Internally directed attention'],
    mechanism:
      'Densely connected to the hippocampus, parahippocampal gyrus and precuneus; CBD studies here rely on resting perfusion (SPECT) and resting-state fMRI connectivity rather than task activation, which likely explains the mixed findings.',
    autismNote:
      'In autistic adults, CBDV lowered functional connectivity between the parahippocampal gyrus and the posterior cingulate cortex (part of the ventral default-mode network) (Pretzsch, INSAR 2018). As far as this atlas’s research could determine, this finding was presented at a conference but never published as a full peer-reviewed paper — the only source in this atlas for which that’s true.',
    nonAutismNote:
      'In the same study, non-autistic controls showed no significant CBDV-related change in this parahippocampal–posterior-cingulate connection — it was autistic adults’ connectivity that differed, not the controls’ (Pretzsch, INSAR 2018).',
    sourceIds: ['crippa2004', 'crippa2011', 'wall2019dissociable', 'vanboxel2023', 'rutledge2026', 'pretzsch2018insar'],
  },
  {
    id: 'parietal',
    name: 'Parietal cortex (incl. temporoparietal junction)',
    abbr: 'PAR',
    category: 'cortical',
    autism: true,
    map: { shape: 'ellipse', cx: 378, cy: 204, rx: 24, ry: 12, rot: -8 },
    summary:
      'The least-studied region in this atlas. The temporoparietal junction (TPJ) is a core hub for theory-of-mind and social-cue processing, but direct evidence for CBD acting on parietal cortex is limited to one 2025 pediatric-autism EEG study and a fMRI salience study noting effects at the parietal operculum.',
    functions: ['Theory of mind & social cognition (TPJ)', 'Spatial & sensory integration', 'Attention networks'],
    mechanism:
      'No parietal-specific CBD receptor mechanism has been established; evidence so far is limited to functional connectivity changes (EEG, fMRI) rather than a defined pharmacological target in this region.',
    autismNote:
      'Right fronto-parietal beta-band connectivity — recorded at an electrode over the right inferior parietal lobule — increased after 12 weeks of CBD oil in autistic children, with a hint (not surviving correction for multiple comparisons) that this tracked improvements in social responsiveness and adaptive behaviour (Parrella 2025). This is the closest thing in this atlas to direct evidence on the inferior parietal lobule specifically.',
    nonAutismNote: null,
    sourceIds: ['parrella2025eeg', 'wilson2019'],
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
    nonAutismNote: null,
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
      'The brain’s threat detector. Several single-dose studies find CBD dampens amygdala reactivity to fearful faces and negative stimuli, though a larger, better-powered 2022 crossover trial found no such effect — one of several inconsistent-replication patterns in this atlas.',
    functions: ['Fear & threat processing', 'Emotional salience', 'Stress responses'],
    mechanism:
      'Where an effect is seen, reduced amygdala BOLD response accompanies lower physiological arousal, mediated partly via 5-HT1A receptors and altered limbic connectivity — but this has not replicated in every study (Bloomfield 2022).',
    autismNote: null,
    nonAutismNote: null,
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
      'Anandamide-dependent neurogenesis (via FAAH inhibition) underlies chronic effects; dorsal-hippocampal CB1/CB2 receptors gate fear-memory consolidation. The parahippocampal gyrus specifically — not just the hippocampus proper — shows its own CBD-related blood-flow and activation changes across several human studies (Crippa 2004, Crippa 2011, O’Neill 2021), and CBDV alters parahippocampal-to-posterior-cingulate connectivity in autistic adults (see the Posterior cingulate cortex region).',
    autismNote:
      'In the valproate rat model of autism, CBDV restored hippocampal endocannabinoid signalling and reduced microglial activation (Zamberletti 2019). A 2025 meta-analysis found hippocampal anandamide is itself reduced in autism animal models — an underactive tone CBD’s anandamide-boosting mechanism could in principle counteract (Jia 2025).',
    nonAutismNote: null,
    sourceIds: [
      'bhatt2012', 'bhatt2015', 'bhatt2018', 'davies2020', 'oneill2021', 'batalla2021', 'campos2012', 'stern2017',
      'blessing2015', 'melas2021', 'garciagutierrez2020', 'zamberletti2019', 'jia2025', 'crippa2004', 'crippa2011',
    ],
  },
  {
    id: 'striatum',
    name: 'Striatum (caudate & putamen)',
    abbr: 'STR',
    category: 'striatal',
    autism: true,
    map: { shape: 'ellipse', cx: 386, cy: 272, rx: 30, ry: 24, rot: -12 },
    summary:
      'CBD changes striatal activation and its connectivity with cortex during salience and fear tasks — often opposite to THC — and both CBD and CBDV raise basal-ganglia glutamate in autistic and non-autistic adults alike.',
    functions: ['Reward & motivation', 'Habit & motor control', 'Salience attribution'],
    mechanism:
      'Enhances fronto-striatal connectivity; increases basal-ganglia glutamate (Glx) measured with MR spectroscopy — a shared drug effect seen in both autistic and non-autistic adults, not an autism-specific correction.',
    autismNote:
      'In autistic adults, CBDV normalises atypical caudate/putamen/accumbens hyperconnectivity toward the non-autistic pattern (Pretzsch 2021). Separately, in the prefrontal cortex (not the striatum itself), CBD decreases GABA in autistic adults (Pretzsch 2019).',
    nonAutismNote:
      'Non-autistic people don’t show the atypical striatal hyperconnectivity CBDV corrects in autism — there’s nothing there for it to normalise (Pretzsch 2021). The basal-ganglia glutamate rise from CBD and CBDV happens the same way in non-autistic people as in autistic people. In the prefrontal cortex, CBD increases GABA in non-autistic adults — the opposite direction from autistic adults (Pretzsch 2019).',
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
      'In autistic adults, CBDV shifted atypical caudate/putamen/accumbens connectivity toward the non-autistic pattern (Pretzsch 2021), and cortico-striato-thalamo-cortical circuitry involving the caudate is implicated in both autism and OCD.',
    nonAutismNote:
      'Non-autistic adults’ caudate/putamen/accumbens connectivity was largely unaffected by CBDV — their baseline pattern is the target autistic adults’ connectivity shifted toward, not something CBDV needed to change (Pretzsch 2021).',
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
    nonAutismNote:
      'Non-autistic adults didn’t show the same nucleus-accumbens connectivity difference CBDV corrected in autism — their baseline connectivity is what autistic adults’ pattern shifted toward (Pretzsch 2021).',
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
    nonAutismNote: null,
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
      'The dorsal periaqueductal grey organises defensive responses and pain. Microinjected directly into this region, CBD blocks panic-like escape behaviour in rats via local 5-HT1A receptors.',
    functions: ['Defensive behaviour', 'Panic responses', 'Descending pain control'],
    mechanism:
      'A single CBD dose blocks panic-like responses in the dPAG via 5-HT1A activation (Soares 2010); repeated dosing achieves a similar antipanic effect without changing 5-HT1A receptor density itself, suggesting a functional rather than structural adaptation (Casarotto 2013).',
    autismNote: null,
    nonAutismNote: null,
    sourceIds: ['campos2012', 'soares2010pag', 'casarotto2013pag'],
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
      'CBD is often shorthanded as a "5-HT1A agonist," but direct recordings from rat DRN neurons find it doesn’t itself change serotonin-cell firing — instead it acts as a negative allosteric modulator, blunting the effect of a selective 5-HT1A agonist (Mendiguren 2022). Indirect activation of these same somatodendritic 5-HT1A autoreceptors also underlies CBD’s anti-nausea/anti-vomiting effects (Rock 2012), extending the DRN’s role for CBD beyond mood into nausea control.',
    autismNote: null,
    nonAutismNote: null,
    sourceIds: ['campos2012', 'blessing2015', 'melas2021', 'garciagutierrez2020', 'rock2012drn', 'mendiguren2022drn'],
  },
  {
    id: 'bnst',
    name: 'Bed nucleus of the stria terminalis',
    abbr: 'BNST',
    category: 'limbic',
    autism: false,
    map: { shape: 'ellipse', cx: 358, cy: 298, rx: 10, ry: 8 },
    summary:
      'The BNST drives sustained (“anticipatory”) anxiety. Microinjected CBD reduces both acute anxiety-like behaviour and sustained contextual fear here, through serotonin receptors.',
    functions: ['Sustained anxiety', 'Threat anticipation', 'HPA-axis modulation'],
    mechanism:
      'Like the dorsal PAG, anxiolysis here relies on 5-HT1A-mediated neurotransmission: CBD injected into the BNST reduces anxiety-like behaviour in the elevated plus-maze and Vogel conflict test (Gomes 2011) and reduces freezing when a fear-conditioned context is re-encountered (Gomes 2012), both effects blocked by a 5-HT1A antagonist.',
    autismNote: null,
    nonAutismNote: null,
    sourceIds: ['campos2012', 'gomes2011bnst', 'gomes2012bnstfear'],
  },
  {
    id: 'cerebellum',
    name: 'Cerebellum (vermis)',
    abbr: 'CBM',
    category: 'cerebellar',
    autism: true,
    map: { shape: 'ellipse', cx: 656, cy: 398, rx: 38, ry: 28 },
    summary:
      'Traditionally viewed as purely a motor structure, the cerebellar vermis is now recognised for roles in language and social cognition — and cerebellar abnormalities (e.g., Purkinje cell loss) are among autism’s most-replicated neuropathological findings. This is the only region in the atlas where CBD’s effect was seen almost exclusively in autistic participants, not controls.',
    functions: ['Motor coordination & timing', 'Cerebellar contribution to language & social cognition', 'Sensorimotor prediction'],
    mechanism:
      'A single 600 mg CBD dose increased fALFF (a measure of regional activity) in the vermis and altered its functional connectivity with subcortical and cortical targets — an effect driven almost entirely by the autistic group, with little or no change in non-autistic controls.',
    autismNote:
      'CBD increased cerebellar vermis activity (fALFF) in autistic participants. The same study found an analogous autism-selective activity increase in the right fusiform gyrus, a face-processing region on the underside of the temporal lobe not otherwise mapped in this atlas (Pretzsch 2019). Unlike most autism findings elsewhere in this atlas — where CBD affects both diagnostic groups but something else (GABA, connectivity) diverges by diagnosis — here the drug response itself is autism-specific.',
    nonAutismNote:
      'Non-autistic controls given the same CBD dose showed little or no change in vermis or fusiform-gyrus activity (Pretzsch 2019) — this is the one region in the atlas where CBD essentially does nothing measurable in non-autistic brains.',
    sourceIds: ['pretzsch2019falff'],
  },
]

export const REGION_BY_ID = Object.fromEntries(REGIONS.map((r) => [r.id, r]))
