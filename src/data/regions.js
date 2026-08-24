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
  thalamic: '#7c93b3',
}

export const CATEGORY_LABELS = {
  cortical: 'Cortex',
  limbic: 'Limbic / emotion',
  striatal: 'Striatal / reward',
  memory: 'Memory (hippocampal)',
  midbrain: 'Midbrain',
  serotonergic: 'Serotonergic',
  cerebellar: 'Cerebellar',
  thalamic: 'Thalamic',
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
      'CBD shifts prefrontal activity and excitatory/inhibitory balance. In salience and memory tasks it tends to reduce over-activation, and in autistic adults it lowers prefrontal GABA where it does not in non-autistic controls. In practice, this excitation/inhibition shift is the main biological rationale for testing CBD in psychosis-risk and autism trials targeting executive function and social cognition — though a shifted brain chemical doesn’t automatically mean a felt or measurable behavioural benefit.',
    functions: ['Executive control & decision-making', 'Emotion regulation', 'Working memory', 'Social cognition'],
    mechanism:
      'Local 5-HT1A and CB1 receptors mediate antidepressant-like effects; CBD also modulates the glutamate/GABA (excitation–inhibition) balance measured with MR spectroscopy. The orbitofrontal cortex, a ventral part of this region, was directly tested in a human reward task (Lawn 2020) and showed no significant CBD effect there — but a separate whole-brain mouse fMRI study found CBD increased BOLD signal specifically in the orbital, prelimbic and infralimbic prefrontal subregions (Sadaka 2021), a reminder that null results in one species/task don’t settle the question for another.',
    autismNote:
      'Prefrontal glutamate–GABA imbalance is a leading model of autism. In autistic adults, CBD decreases dorsomedial-prefrontal GABA (Pretzsch 2019). Prefrontal 2-AG (a different endocannabinoid, not glutamate) is separately reported reduced in autism (Jia 2025). A 2025 EEG study found CBD increased right fronto-parietal connectivity in autistic children (Parrella 2025) — though behavioural trials of CBD in autism have shown mixed, often null, primary-outcome results (Aran 2021, Trauner 2025, Parrella 2026).',
    nonAutismNote:
      'In non-autistic adults, CBD increases dorsomedial-prefrontal GABA — the opposite direction from autistic adults (Pretzsch 2019). The basal-ganglia glutamate rise and dorsomedial-prefrontal glutamate drop CBD produces happen the same way in non-autistic adults as in autistic adults — those parts aren’t different by diagnosis (Pretzsch 2019, CBDV: Pretzsch 2019).',
    sourceIds: [
      'bhatt2012', 'bhatt2015', 'oneill2021', 'grimm2018', 'wall2022', 'batalla2021', 'campos2012', 'sartim2016',
      'blessing2015', 'melas2021', 'garciagutierrez2020', 'pretzschCBD2019', 'pretzschCBDV2019',
      'parrella2025eeg', 'yeh2017', 'jia2025', 'lawn2020', 'sadaka2021',
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
      'A core node of the “emotional brain.” CBD blunts anterior cingulate responses to threat and reshapes its connectivity with the amygdala. In practice, this is part of the biological case for CBD as an anxiety treatment — dampening the brain’s threat-monitoring circuit is a plausible route to feeling less on edge, though (as below) the effect hasn’t always replicated.',
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
      'The hub of the default-mode network. CBD’s effects here are the least settled in the atlas: single-dose SPECT studies find shifted blood flow, and CBD (unlike THC-only cannabis) preserves PCC-anchored resting-state connectivity — but a 2026 systematic review found no consistent direction of effect across studies. In practice, this inconsistency is a caution sign: claims that CBD "calms the default-mode network" or improves mind-wandering and self-referential thought outrun what this region’s evidence can currently support.',
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
      'The least-studied region in this atlas. The temporoparietal junction (TPJ) is a core hub for theory-of-mind and social-cue processing, but direct evidence for CBD acting on parietal cortex is limited to one 2025 pediatric-autism EEG study and a fMRI salience study noting effects at the parietal operculum. In practice, this means claims that CBD improves social cognition or theory-of-mind processing via the parietal cortex are still speculative extrapolation, not something directly demonstrated yet.',
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
      'The anterior insula tracks bodily/interoceptive arousal. CBD — and even the expectation of CBD — alters its stress-related connectivity with the amygdala and cingulate. In practice, this is a big reason placebo-controlled (not just before/after) trial design matters so much for CBD research: simply believing you’ve taken it can measurably change this circuit.',
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
      'The brain’s threat detector. Several single-dose studies find CBD dampens amygdala reactivity to fearful faces and negative stimuli, though a larger, better-powered 2022 crossover trial found no such effect — one of several inconsistent-replication patterns in this atlas. In practice, this is the single most-cited brain basis for CBD’s reputation as calming — and the failed replication is real reason to be cautious about how reliable that effect actually is.',
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
      'CBD modulates hippocampal (and parahippocampal) activity, supports adult neurogenesis under stress, and disrupts the consolidation of fear memories. In practice, this is the proposed mechanism behind CBD’s potential to ease PTSD-type fear memories, support hippocampal health during chronic stress, and — in animal models — protect against THC-related memory harms.',
    functions: ['Learning & memory', 'Contextual fear', 'Adult neurogenesis', 'Mood regulation'],
    mechanism:
      'Anandamide-dependent neurogenesis (via FAAH inhibition) underlies chronic effects; dorsal-hippocampal CB1/CB2 receptors gate fear-memory consolidation. The parahippocampal gyrus specifically — not just the hippocampus proper — shows its own CBD-related blood-flow and activation changes across several human studies (Crippa 2004, Crippa 2011, O’Neill 2021), and CBDV alters parahippocampal-to-posterior-cingulate connectivity in autistic adults (see the Posterior cingulate cortex region).',
    autismNote:
      'In the valproate rat model of autism, CBDV restored hippocampal endocannabinoid signalling and reduced microglial activation (Zamberletti 2019). A 2025 meta-analysis found hippocampal anandamide is itself reduced in autism animal models — an underactive tone CBD’s anandamide-boosting mechanism could in principle counteract (Jia 2025).',
    nonAutismNote: null,
    sourceIds: [
      'bhatt2012', 'bhatt2015', 'bhatt2018', 'davies2020', 'oneill2021', 'batalla2021', 'campos2012', 'stern2017',
      'blessing2015', 'melas2021', 'garciagutierrez2020', 'zamberletti2019', 'jia2025', 'crippa2004', 'crippa2011',
      'esposito2011ppar',
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
      'CBD changes striatal activation and its connectivity with cortex during salience and fear tasks — often opposite to THC — and both CBD and CBDV raise basal-ganglia glutamate in autistic and non-autistic adults alike. In practice, this opposite-to-THC pattern is the core evidence behind using CBD to blunt THC’s psychosis-like effects, and behind interest in CBD as an add-on antipsychotic.',
    functions: ['Reward & motivation', 'Habit & motor control', 'Salience attribution'],
    mechanism:
      'Enhances fronto-striatal connectivity; increases basal-ganglia glutamate (Glx) measured with MR spectroscopy — a shared drug effect seen in both autistic and non-autistic adults, not an autism-specific correction. A whole-brain mouse fMRI study, by contrast, found no significant overall BOLD-signal change in the basal ganglia (Sadaka 2021) — a reminder that glutamate concentration (MRS) and blood-oxygen activity (fMRI) are different measures that don’t have to move together.',
    autismNote:
      'At baseline, autistic adults show higher ventral-striatum-to-putamen connectivity and higher putamen-to-posterior-superior-temporal-gyrus connectivity than non-autistic adults (plus lower ventral-striatum-to-anterior-cingulate connectivity, which CBDV didn’t significantly change). CBDV significantly reduces both of the elevated connections toward the non-autistic level (Pretzsch 2021). Separately, in the prefrontal cortex (not the striatum itself), CBD decreases GABA in autistic adults (Pretzsch 2019).',
    nonAutismNote:
      'Non-autistic adults don’t show the elevated ventral-striatum-to-putamen and putamen-to-temporal connectivity seen in autism — there’s nothing there for CBDV to reduce, and indeed CBDV produced no significant connectivity change in this group (Pretzsch 2021). The basal-ganglia glutamate rise from CBD and CBDV happens the same way in non-autistic people as in autistic people. In the prefrontal cortex, CBD increases GABA in non-autistic adults — the opposite direction from autistic adults (Pretzsch 2019).',
    sourceIds: [
      'bhatt2012', 'bhatt2015', 'bhatt2018', 'davies2020', 'oneill2021', 'grimm2018', 'wall2022', 'batalla2021',
      'pretzschCBD2019', 'pretzschCBDV2019', 'pretzschCBDV2021',
      'bhattacharyya2010', 'seeman2016', 'mosley2023', 'morenoalcazar2018', 'wall2019dissociable', 'sadaka2021',
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
      'The dorsomedial part of the striatum, singled out across many of the studies above: CBD raises caudate activation opposite to THC, and the receptor mechanisms behind CBD’s antipsychotic and anti-craving effects (GPR55, dopamine D2High) are concentrated here. In practice, this is where CBD’s antipsychotic-like drug action most plausibly originates at the receptor level — the mechanistic backbone behind ongoing schizophrenia and psychosis-risk trials.',
    functions: ['Goal-directed action selection', 'Habit learning', 'Cognitive/motor loop of the basal ganglia', 'Salience & reward signalling'],
    mechanism:
      'CBD antagonises GPR55 and acts as a dopamine-D2High partial agonist, both receptor types dense in caudate medium spiny neurons; in imaging studies CBD boosts caudate activation during verbal-memory encoding and salience tasks where THC does the opposite.',
    autismNote:
      'In autistic adults, CBDV significantly reduced two specific elevated connections toward the non-autistic level: ventral-striatum-to-putamen connectivity and putamen-to-posterior-superior-temporal-gyrus connectivity, both higher than in non-autistic adults at baseline (Pretzsch 2021). Cortico-striato-thalamo-cortical circuitry involving the caudate is also implicated in both autism and OCD.',
    nonAutismNote:
      'Non-autistic adults didn’t show these elevated connections in the first place, and CBDV produced no significant connectivity change in this group — their baseline pattern is what autistic adults’ connectivity moved toward (Pretzsch 2021).',
    sourceIds: [
      'ryberg2007', 'seeman2016', 'bhattacharyya2010', 'sharma2019', 'mosley2023', 'lawn2020',
      'morenoalcazar2018', 'wall2019dissociable', 'rutledge2026', 'vallee2022',
      'bhatt2012', 'davies2020', 'oneill2021', 'pretzschCBDV2021', 'sadaka2021',
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
      'Part of the ventral striatum’s reward circuitry. At baseline, autistic adults show lower ventral-striatum-to-anterior-cingulate connectivity than non-autistic adults — CBDV nudged this up slightly but not to a statistically significant degree. Separately, single-dose CBD lowers cue-induced accumbens activation during craving in substance use disorders. In practice, this is the neural basis for CBD’s emerging use as an anti-craving aid in addiction treatment, and a candidate clue to why reward and social motivation can feel different for autistic people.',
    functions: ['Reward & pleasure', 'Motivation', 'Social reward'],
    mechanism:
      'Studied as part of striatal functional connectivity; sits within the mesolimbic dopamine system that CBD influences indirectly, partly via accumbal D1/D2 dopamine receptors.',
    autismNote:
      'Autistic adults show lower ventral-striatum-to-anterior-cingulate connectivity than non-autistic adults at baseline — a pattern that relates to social-motivation models of autism. CBDV increased this connectivity slightly in autistic adults, though the change didn’t reach statistical significance (Pretzsch 2021) — unlike the two other striatal connections (see Striatum and Caudate nucleus) where CBDV’s effect was significant.',
    nonAutismNote:
      'Non-autistic adults’ connectivity here is the reference level autistic adults’ lower baseline was compared against; CBDV produced no significant change in this group either (Pretzsch 2021).',
    sourceIds: ['pretzschCBDV2021', 'zimmermann2025', 'sharifi2022', 'morenoalcazar2018', 'lawn2020', 'hurd2019heroin', 'chisholm2026heroin', 'suzuki2023oud'],
  },
  {
    id: 'midbrain',
    name: 'Midbrain (substantia nigra / VTA)',
    abbr: 'MB',
    category: 'midbrain',
    autism: false,
    map: { shape: 'ellipse', cx: 470, cy: 314, rx: 16, ry: 14 },
    summary:
      'CBD partially normalises abnormal midbrain activation — a dopamine hub — in people at high risk for psychosis. In practice, this is part of the biological case for testing CBD as an early intervention in people showing warning signs of psychosis, before a full episode develops.',
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
      'The dorsal periaqueductal grey organises defensive responses and pain. Microinjected directly into this region, CBD blocks panic-like escape behaviour in rats via local 5-HT1A receptors. In practice, this is animal evidence for a specific antipanic mechanism, not proof CBD works this way in humans — but it’s part of why CBD is investigated for panic disorder specifically, not just generic anxiety.',
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
      'The dorsal raphe is the brain’s main serotonin source. CBD’s acute mood and anxiety effects hinge on 5-HT1A signalling linked to this system. In practice, this serotonergic route is why CBD is sometimes discussed alongside SSRIs and buspirone-type anxiety medications, despite working through a different, less direct mechanism.',
    functions: ['Serotonin (5-HT) supply', 'Mood regulation', 'Stress resilience'],
    mechanism:
      'CBD is often shorthanded as a "5-HT1A agonist," but direct recordings from rat DRN neurons find it doesn’t itself change serotonin-cell firing — instead it acts as a negative allosteric modulator, blunting the effect of a selective 5-HT1A agonist (Mendiguren 2022). Indirect activation of these same somatodendritic 5-HT1A autoreceptors also underlies CBD’s anti-nausea/anti-vomiting effects (Rock 2012), extending the DRN’s role for CBD beyond mood into nausea control. A whole-brain mouse fMRI study separately found CBD decreased BOLD signal in the dorsal raphe itself, alongside other brainstem arousal nuclei — a dose-dependent effect distinct from, but consistent with, a serotonergic system being directly dialled down rather than up (Sadaka 2021).',
    autismNote: null,
    nonAutismNote: null,
    sourceIds: ['campos2012', 'blessing2015', 'melas2021', 'garciagutierrez2020', 'rock2012drn', 'mendiguren2022drn', 'sadaka2021'],
  },
  {
    id: 'bnst',
    name: 'Bed nucleus of the stria terminalis',
    abbr: 'BNST',
    category: 'limbic',
    autism: false,
    map: { shape: 'ellipse', cx: 358, cy: 298, rx: 10, ry: 8 },
    summary:
      'The BNST drives sustained (“anticipatory”) anxiety. Microinjected CBD reduces both acute anxiety-like behaviour and sustained contextual fear here, through serotonin receptors. In practice, this distinguishes CBD’s potential from drugs that only blunt acute fear spikes — if the effect generalises to humans, it would target the lingering, anticipatory dread that’s often the most disabling part of anxiety disorders.',
    functions: ['Sustained anxiety', 'Threat anticipation', 'HPA-axis modulation'],
    mechanism:
      'Like the dorsal PAG, anxiolysis here relies on 5-HT1A-mediated neurotransmission: CBD injected into the BNST reduces anxiety-like behaviour in the elevated plus-maze and Vogel conflict test (Gomes 2011) and reduces freezing when a fear-conditioned context is re-encountered (Gomes 2012), both effects blocked by a 5-HT1A antagonist. Downstream, the BNST helps drive the hypothalamic-pituitary-adrenal (HPA) stress-hormone axis — and directly testing CBD there complicates the simple "CBD calms the stress response" story: in mice, CBD actually increased HPA-axis reactivity (significantly in males) while easing anxiety-like behaviour specifically in females whose HPA axis was underactive to begin with (Jenkins 2026).',
    autismNote: null,
    nonAutismNote: null,
    sourceIds: ['campos2012', 'gomes2011bnst', 'gomes2012bnstfear', 'jenkins2026hpa'],
  },
  {
    id: 'cerebellum',
    name: 'Cerebellum (vermis)',
    abbr: 'CBM',
    category: 'cerebellar',
    autism: true,
    map: { shape: 'ellipse', cx: 656, cy: 398, rx: 38, ry: 28 },
    summary:
      'The vermis is the narrow strip of cerebellum running down the midline, sandwiched between the cerebellum’s two larger side lobes. Traditionally viewed as purely a motor structure, it’s now recognised for roles in language and social cognition — and cerebellar abnormalities (e.g., loss of the cerebellum’s main output neurons) are among autism’s most-replicated neuropathological findings. This is the only region in the atlas where CBD’s effect was seen almost exclusively in autistic participants, not controls. In practice, this makes the vermis one of the more promising leads for an autism-specific (not just generic anxiety or psychosis) effect of CBD — though, like the atlas’s other autism findings, it comes from a single small study and needs replication before it means much clinically.',
    functions: ['Motor coordination & timing', 'Cerebellar contribution to language & social cognition', 'Sensorimotor prediction'],
    mechanism:
      'A single 600 mg CBD dose increased fALFF in the vermis in autistic humans — meaning that, while participants lay resting and doing nothing in particular, their vermis showed a bigger natural rise-and-fall in activity level than it did on placebo. CBD also altered how strongly the vermis was “talking to” (functionally connected with) other brain areas like the striatum and cortex. Both effects were driven almost entirely by the autistic group, with little or no change in non-autistic controls (Pretzsch 2019). A separate whole-brain mouse fMRI study found the opposite direction for the cerebellum overall — CBD decreased BOLD signal across several cerebellar subregions (Sadaka 2021) — though it studied unselected mice at rest rather than autistic humans, so the two findings aren’t directly comparable, just worth flagging as a real divergence rather than glossing over it.',
    autismNote:
      'CBD increased the vermis’s resting activity level in autistic participants. The same study found an analogous autism-selective activity increase in the right fusiform gyrus, a face-processing region on the underside of the temporal lobe not otherwise mapped in this atlas (Pretzsch 2019). Unlike most autism findings elsewhere in this atlas — where CBD affects both diagnostic groups but something else (GABA, connectivity) diverges by diagnosis — here the drug response itself is autism-specific.',
    nonAutismNote:
      'Non-autistic controls given the same CBD dose showed little or no change in vermis or fusiform-gyrus activity (Pretzsch 2019) — this is the one region in the atlas where CBD essentially does nothing measurable in non-autistic brains.',
    sourceIds: ['pretzsch2019falff', 'sadaka2021'],
  },
  {
    id: 'thalamus',
    name: 'Thalamus',
    abbr: 'THA',
    category: 'thalamic',
    autism: false,
    map: { shape: 'ellipse', cx: 452, cy: 272, rx: 24, ry: 19 },
    summary:
      'The brain’s central relay station, routing almost all sensory information to the cortex. Despite being tested directly in a whole-brain screen, CBD produced no significant change in thalamic activity — one of the few regions in this atlas with a genuine, confirmed null result rather than an untested gap. In practice, this argues against claims that CBD works by directly recalibrating sensory-gating circuits at the thalamic level, at least at the single doses tested so far.',
    functions: ['Sensory relay (all senses except smell)', 'Arousal & alertness', 'Sensory gating'],
    mechanism:
      'In a whole-brain pharmacological fMRI screen in mice, CBD (3–30 mg/kg) shifted BOLD signal in the prefrontal cortex, olfactory system, cerebellum and brainstem arousal circuitry — but the thalamus was explicitly reported as unchanged (Sadaka 2021).',
    autismNote: null,
    nonAutismNote: null,
    sourceIds: ['sadaka2021'],
  },
]

export const REGION_BY_ID = Object.fromEntries(REGIONS.map((r) => [r.id, r]))
