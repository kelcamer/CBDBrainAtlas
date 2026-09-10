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
      'parrella2025eeg', 'yeh2017', 'jia2025', 'lawn2020', 'sadaka2021', 'swenson2023fetal',
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
      'stern2012reconsolidation',
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
      'crippa2004', 'bhattacharyya2010', 'bloomfield2022', 'lorenzetti2024', 'dirik2026alcohol',
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
      'esposito2011ppar', 'beale2018hippocampal',
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
      'dirik2026alcohol',
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
    // Circled as autism-relevant: two human PET studies measured dopamine
    // D2/3 in autistic people's thalamus specifically (Knudsen 2026,
    // Murayama 2022), and a CBD study in the valproate autism model turns
    // on thalamic filtering (Pedrazzi 2025). What is still missing is a CBD
    // study that measures an autistic thalamus — which the entry says.
    autism: true,
    map: { shape: 'ellipse', cx: 452, cy: 272, rx: 24, ry: 19 },
    summary:
      'The brain’s relay station: nearly everything you see, hear and feel passes through here on the way to cortex. Its neurons fire two ways — a steady tick that passes a signal on faithfully, and a burst, which works more like an alarm going off: something changed, look here. The switch between the two is a single calcium channel, and CBD plugs that channel at concentrations an ordinary dose reaches. So what CBD can do here is not a volume knob. It makes the alarm-style firing harder while leaving the steady stream intact — a change in the shape of what gets through, not the amount. That distinction also settles the awkward part of this page: the studies that measured the thalamus under CBD found no change, but they measured how much it was doing, not which way it was firing.',
    functions: ['Sensory relay (all senses except smell)', 'Arousal & alertness', 'Selects which sensory signals reach cortex, and when', 'Burst vs tonic firing mode (T-type calcium channels)'],
    mechanism:
      'Start with the route that is most specific to this structure, because it is the strongest thing on this page — and it is not dopaminergic. Relay neurons switch between two firing modes, and that switch is built on low-threshold T-type calcium channels: mice lacking Cav3.1 lose burst-mode firing in thalamocortical relay neurons entirely while tonic firing stays normal (Kim 2001). CBD inhibits those channels — Cav3.1 and Cav3.2 with IC50 near 1 µM from moderately hyperpolarised potentials, and over half of peak Cav3.1 current at 100 nM when held at −70 mV, by shifting steady-state inactivation; it is weak at Cav3.3 (Ross 2008). Vukadinovic 2013 built a whole thalamic account of cannabis and psychosis on this channel: cortically driven thalamic bursts carry trans-thalamic cortico-cortical traffic, so interference with burst mode disconnects cortical areas from one another, and the resulting failure to recognise re-afferent sensory input presents as psychosis — with THC the more damaging cannabinoid, because THC also stabilises the open channel while CBD does not.\n\nThe subtype map sharpens what that predicts. Relay neurons carry Cav3.1; the reticular nucleus carries Cav3.3 and Cav3.2 (Talley 1999). CBD is potent at Cav3.1 and Cav3.2 and weak at Cav3.3, so it should bite hardest on relay-neuron burst firing, partially on the reticular nucleus through Cav3.2, and hardly at all on the Cav3.3 machinery there — a shift of relay cells toward tonic, linear transmission rather than a change in how much signal passes. Two things follow. First, this is a plausible reason two resting-state screens found nothing: a burst-to-tonic mode shift need not move mean BOLD or blood flow at all. Second, the target is not hypothetical in neurodevelopment — gain-of-function variants in the Cav3.3 gene cause developmental delay, cognitive impairment and seizures in people (El Ghaleb 2021).\n\nWhere the D2 receptors sit decides the sign of the dopaminergic route, and that is genuinely unsettled. The textbook expectation — D2 is Gi/o-coupled, so less glutamate release presynaptically and less excitability postsynaptically — has not been demonstrated on thalamic relay neurons or their glutamatergic inputs, as far as this atlas’s search could determine. What has been recorded is D2 in the reticular nucleus itself, where a D2-like agonist reduced tonic spiking and depressed the electrical coupling between reticular neurons (Vaughn 2025). Since that nucleus inhibits relay cells, weakening it disinhibits them — the opposite sign to the presynaptic story. Anatomy narrows the question without closing it: thalamic dopamine innervation in humans and macaques is densest in midline/limbic, mediodorsal, pulvinar and motor nuclei rather than the primary sensory relays (Sánchez-González 2005, García-Cabezas 2007), so dopamine here is better placed to change which signals are prioritised than to act as a volume control on raw sensation — and the largest autism effect in the FLB457 study sat in the pulvinar, exactly that territory (Murayama 2022). One more caution from the autism side: in Ptchd1 mice, reticular-nucleus filtering and prefrontal filtering had to be corrected together before noise hypersensitivity resolved; fixing the thalamic half alone normalised only the automatic component (Nakajima 2019).\n\nWhat the direct measurements actually found, kept at the bottom because it is the weaker claim: no change. Two studies have pointed an imaging method at the thalamus under CBD and seen nothing move, and no human study has measured the thalamus under CBD at all — the human blood-flow work confined its regions of interest to the temporal lobe and prefrontal cortex (Bloomfield 2020). Both of the studies that did look measured bulk signal in resting animals, which is exactly the quantity a burst-to-tonic mode shift need not change.\n\nThe animal work behind that, in detail. In an awake-mouse whole-brain fMRI screen, CBD (3–30 mg/kg) shifted BOLD signal in the prefrontal cortex, olfactory system, cerebellum and brainstem arousal circuitry while the thalamus was explicitly reported as unchanged in both activity and connectivity — male mice only, which the authors flag themselves (Sadaka 2021). In anaesthetised male rats, 150 mg/kg CBD lowered whole-brain functional connectivity but left regional blood flow, thalamus included, where it was (MacNicol 2026). Set against those, three behavioural results using prepulse inhibition — where a quiet warning tone should blunt the startle response to a loud one — show CBD changing sensory filtering when it is broken: nothing in intact mice, but 5 mg/kg reverses disruption by the NMDA-receptor blocker MK-801 (Long 2006); the equivalent reversal against amphetamine is blocked by TRPV1 and especially 5-HT1A antagonists rather than CB1 or CB2 (Pedrazzi 2024); and 30–60 mg/kg reverses the deficit in male mice exposed to valproic acid in utero, the standard environmental autism model (Pedrazzi 2025). Nothing at baseline, correction under perturbation — the same shape this atlas reports at the cerebellum. Two cautions: prepulse inhibition is driven largely by brainstem circuitry, so it shows CBD can change sensory filtering without proving the thalamus is where it acts; and D2 was never tested in those experiments, so the filtering effect that does exist has not been shown to run through dopamine.',
    autismNote:
      'Never tested in autistic people or autism models by any imaging study — and there is a specific reason it should be. CBD is a partial agonist at high-affinity dopamine D2 receptors at concentrations matching its clinical dose (Seeman 2016), a dopaminergic route this atlas otherwise files only under the striatum. The autistic thalamus is where dopamine signalling most clearly diverges: [11C]raclopride PET in 30 autistic and 30 neurotypical adults found higher thalamic D2 receptor availability in the autistic group, plus raised thalamic glucose metabolism correlating with social and communication difficulties (Knudsen 2026). An earlier [11C]FLB457 study of 22 autistic men found the opposite sign — lower D2/3 availability, largest in the posterior thalamus/pulvinar, tracking social-affect scores and weaker thalamus-to-superior-temporal-sulcus connectivity (Murayama 2022). Different tracers and small single-site samples, so the direction is unsettled; what both agree on is that the thalamus is a dopaminergically atypical structure in autism. A drug with D2 partial agonism acting on a structure with atypical D2 availability is a testable hypothesis, and no one has run the test.\n\nStated properly, that hypothesis is specific and falsifiable rather than a hunch: if CBD’s D2High partial agonism operates in living brain, the autistic thalamus is where it should show up first, because that is the region where the receptor CBD targets is most atypical — and the existing nulls do not contradict it, because they were run in animals whose D2 system is ordinary, which is exactly where a partial agonist has least to do. Three conditions have to hold, and each is checkable. The D2High state has to exist in vivo and not only in membrane preparations — Seeman 2016 is a single in-vitro binding study and the high-affinity-state construct is contested. CBD has to reach those sites at clinical doses — Seeman’s own argument, from a dissociation constant of 11 nM at D2High against the plasma levels clinical doses produce. And the direction of the effect depends on ambient dopamine tone, because a partial agonist adds signal where dopamine is low and subtracts it where dopamine is high. That last condition is where the PET result becomes more interesting rather than less: [11C]raclopride binding is reduced by endogenous dopamine competing for the same sites, so the higher thalamic binding in autistic adults can mean more receptors, less ambient dopamine occupying them, or both — and if it is even partly the second, CBD would act there as an agonist rather than a brake.\n\nThe competing account of CBD’s dopaminergic reputation belongs here too. In the one head-to-head trial against an antipsychotic, CBD matched amisulpride’s effect on psychotic symptoms while the improvement tracked rising anandamide, and without the prolactin rise and movement effects that D2 blockade produces (Leweke 2012) — which is why much of the field reads CBD’s antipsychotic action as endocannabinoid rather than dopaminergic. The two accounts are not exclusive; a partial agonist at a receptor whose availability is atypical would not be expected to produce the side-effect signature of a full blocker anyway. As far as this atlas’s literature search could determine, no human study has ever imaged CBD’s effect on dopamine at all, in any region — which is what keeps this a prediction instead of a finding. The structural autism finding here is separate again: no overall volume difference, but an expanded right-posterior surface and a more concave left mediodorsal nucleus.',
    nonAutismNote:
      'In non-autistic, unperturbed animals every direct measurement is null — no thalamic BOLD change in awake mice (Sadaka 2021), no thalamic blood-flow change in rats (MacNicol 2026), and no effect on prepulse inhibition in intact mice (Long 2006). Taken together these say something narrower than “CBD does not act on the thalamus”: they say it does not act on a thalamus that is already filtering normally.',
    womenNote:
      'The elevated thalamic D2 receptor availability found in autistic adults holds in autistic women, not only men. Knudsen 2026 scanned 30 autistic and 30 neurotypical adults of both sexes and analysed them sex-stratified: the raised thalamic D2 availability is reported as a pattern seen across sexes, and the accompanying rise in thalamic glucose metabolism — which tracked social and communication difficulties — was confirmed within autistic women and autistic men separately. What was male-specific was the extra D2 increase outside the thalamus, in nucleus accumbens and putamen. Thalamic D2 availability also coupled to resting-state connectivity differently in autistic women than in autistic men, so the thalamus is not just elevated in women, it is wired to that elevation differently. (The paper reports availability of D2 receptors, which is not the same measurement as a count of dopamine neurons; and the per-sex thalamic statistics sit in the full text, which is paywalled, so what is quoted here is what the abstract states.)\n\nTwo further reasons the female thalamus is its own case rather than a footnote to the male one. In healthy volunteers, women have higher extrastriatal D2-like receptor availability than men in every region measured, thalamus included — significant in frontal cortex, largest in anterior cingulate (Kaasinen 2001). And in the one PET study run in women only, thalamic D2-like availability fell about 6% per decade of adult life, independent of oestradiol and progesterone (Kaasinen 2002). A woman’s thalamic D2 level is both higher than a man’s and moving with age, which is precisely the situation where borrowing a male dose-response is unsafe.\n\nAgainst that, the CBD half of this page is almost entirely male. Sadaka 2021 used male mice only (the authors flag it themselves), MacNicol 2026 male rats, Pedrazzi 2025 male mice, and Murayama 2022 had no women in it at all. Across the whole CBD literature, a scoping review found only 12 of 300 articles examined sex, none examined gender, two reported antidepressant-like effects in males only, and both a human and an animal study found higher plasma CBD in females (Matheson 2022) — with repeated dosing producing sex-differing metabolite ratios even where peak exposure matched (MacNair 2024). So the target is established in autistic women and the drug response in them is not: nobody has given a woman CBD and looked at her thalamus.\n\nAnd the prediction set out above applies to women with more force, not less. A partial agonist acts on the receptors that are there; autistic adults have more thalamic D2 availability than neurotypical ones, and women have more extrastriatal D2-like availability than men to begin with (Kaasinen 2001), so an autistic woman’s thalamus is the highest-availability case this evidence describes — while the age gradient found in women (Kaasinen 2002) means the same dose need not do the same thing at 30 as at 60. Every one of those numbers comes from studies that never administered CBD.',
    sourceIds: ['sadaka2021', 'macnicol2026', 'long2006ppi', 'pedrazzi2024ppi', 'pedrazzi2025vpa', 'ross2008ttype', 'vukadinovic2013', 'kim2001alpha1g', 'talley1999ttype', 'elghaleb2021cacna1i', 'seeman2016', 'leweke2012', 'vaughn2025trn', 'sanchezgonzalez2005', 'garciacabezas2007', 'nakajima2019ptchd1', 'knudsen2026thalamus', 'murayama2022d2', 'kaasinen2001sex', 'kaasinen2002women', 'matheson2022sex', 'macnair2024pk', 'bloomfield2020ofc'],
  },
]

export const REGION_BY_ID = Object.fromEntries(REGIONS.map((r) => [r.id, r]))
