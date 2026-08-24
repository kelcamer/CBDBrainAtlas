// ---------------------------------------------------------------------------
// Full autism brain-area summary: every region with a documented autism
// finding, its direction, and — directly alongside it — what CBD research
// (if any) exists there. This is the merge of the atlas's own regions/
// sources data with the broader autism-neuroimaging literature, so it
// includes areas that have NO CBD research at all (status: 'gap') as well
// as areas covered elsewhere in this atlas.
//
// cbdStatus:
//   'autism'  — direct CBD/CBDV evidence IN AUTISTIC people or animal models
//   'general' — CBD has been studied here, but not specifically in autism
//   'null'    — CBD was directly tested here and found NOT to have an effect
//   'gap'     — no CBD research (autism-specific or general) found at all
// ---------------------------------------------------------------------------

export const AUTISM_SUMMARY = [
  {
    area: 'Lingual gyrus',
    direction: '▲',
    autismFinding: 'Greater activation vs. controls (shared with ADHD) on matched cognitive tasks — visual-imagery and memory-encoding region.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD research on this region.',
    regionId: null,
  },
  {
    area: 'Gyrus rectus',
    direction: '▲',
    autismFinding: 'Greater activation vs. controls (shared with ADHD) — ventral frontal region tied to social cognition and decision-making.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD research on this region.',
    regionId: null,
  },
  {
    area: 'Middle frontal gyrus',
    direction: '▼',
    autismFinding: 'Lower activation vs. controls (shared with ADHD) — overlaps functionally with dorsolateral prefrontal cortex.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD study isolates this specific gyrus; general prefrontal-cortex evidence exists nearby.',
    regionId: 'pfc',
  },
  {
    area: 'Parahippocampal gyrus',
    direction: '▼',
    autismFinding: 'Lower activation vs. controls (shared with ADHD); CBDV specifically shows reduced connectivity to the posterior cingulate in autistic adults.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes. Several CBD studies show blood-flow/activation changes here (Crippa 2004, Crippa 2011, O’Neill 2021), and CBDV alters its connectivity to the PCC specifically in autistic adults (Pretzsch, INSAR 2018).',
    regionId: 'hippocampus',
  },
  {
    area: 'Insula',
    direction: '▼',
    autismFinding: 'Lower activation vs. controls on task-based fMRI (shared with ADHD). Caveat: interoceptive accuracy itself appears intact in autistic adults per a 2025 meta-analysis — this is a task-activation finding, not proof of "reduced interoception."',
    cbdStatus: 'general',
    cbdFinding: 'CBD normalises insula over-activation in people at clinical high risk for psychosis (Wilson 2019) and produced a null effect in a reward task (Lawn 2020) — neither study was in autistic people specifically.',
    regionId: 'insula',
  },
  {
    area: 'Middle temporal gyrus',
    direction: '↕',
    autismFinding: 'Genuinely lateralized — greater activation on the left, lower on the right, vs. controls. Supports semantic/language processing and social perception.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD research, autism-specific or general, examines this region.',
    regionId: null,
  },
  {
    area: 'Amygdala',
    direction: '↕',
    autismFinding: 'Task-dependent: lower activation on passive face tasks, higher when fixating eyes/faces directly; structurally enlarged in early toddlerhood.',
    cbdStatus: 'general',
    cbdFinding: 'CBD dampens amygdala reactivity to fearful faces in several studies, though a larger 2022 crossover trial found no effect — none of this research was autism-specific.',
    regionId: 'amygdala',
  },
  {
    area: 'Cerebellum (vermis)',
    direction: '↕',
    autismFinding: 'Increased right-cerebellum task activation during facial emotion processing; an earlier borderline volume increase didn’t replicate in a larger sample.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes — and uniquely so. CBD increased vermis activity almost exclusively in autistic participants, with little change in non-autistic controls (Pretzsch 2019).',
    regionId: 'cerebellum',
  },
  {
    area: 'Medial prefrontal cortex',
    direction: '▼',
    autismFinding: 'Reduced long-range default-mode-network connectivity, tied to self/other differentiation. Caveat: shouldn’t be read as a universal empathy deficit — the "double-empathy problem" reframes many social breakdowns as bidirectional mismatches, not one-sided.',
    cbdStatus: 'autism',
    cbdFinding: 'Partial. General rodent evidence exists (Sartim 2016, not autism-specific), but a 2025 EEG study specifically targeted the mPFC as part of a hypothesized "social brain" network in autistic children (Parrella 2025).',
    regionId: 'pfc',
  },
  {
    area: 'Posterior cingulate cortex',
    direction: '▼',
    autismFinding: 'Decreased functional connectivity and interhemispheric coherence, part of the DMN’s reflective self-processing.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes, though thinly. CBDV alters parahippocampal-to-PCC connectivity specifically in autistic adults (Pretzsch, INSAR 2018) — but this result was only ever presented at a conference, never published as a full peer-reviewed paper.',
    regionId: 'pcc',
  },
  {
    area: 'Anterior cingulate cortex',
    direction: '↕',
    autismFinding: 'Decreased connectivity with the PCC (DMN); a separate meta-analysis found a genuine dissociation within the ACC itself during emotional/reward tasks.',
    cbdStatus: 'general',
    cbdFinding: 'Extensively studied for threat/fear response and connectivity with the amygdala, but none of that research was done in autistic people specifically.',
    regionId: 'acc',
  },
  {
    area: 'Orbitofrontal cortex',
    direction: '▲',
    autismFinding: 'Overactivation during cognitive control, differentiating autism from ADHD specifically (not a shared finding).',
    cbdStatus: 'general',
    cbdFinding: 'Null in a human reward task (Lawn 2020); increased BOLD signal in a mouse whole-brain screen (Sadaka 2021) — neither in autistic subjects.',
    regionId: 'pfc',
  },
  {
    area: 'Locus coeruleus',
    direction: '↕',
    autismFinding: 'Increased tonic (resting pupil) but reduced phasic noradrenergic activity vs. peers — implicated in hyperarousal and sensory over-responsivity.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD research at all — only THC, synthetic CB1 agonists, and the related cannabinoid CBG have been tested here.',
    regionId: null,
  },
  {
    area: 'Putamen',
    direction: '▲',
    autismFinding: 'ASD-specific greater activation (vs. ADHD); also shows higher connectivity to the ventral striatum and posterior superior temporal gyrus at baseline.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes. CBDV significantly reduces both of those elevated connections toward the non-autistic level (Pretzsch 2021).',
    regionId: 'striatum',
  },
  {
    area: 'Hippocampus',
    direction: '↕',
    autismFinding: 'Genuine within-study dissociation — greater activation at one subregion, lower at another.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes. CBDV restores hippocampal endocannabinoid signalling in the valproate rat model of autism (Zamberletti 2019); hippocampal anandamide is separately reported reduced in autism generally (Jia 2025).',
    regionId: 'hippocampus',
  },
  {
    area: 'Inferior parietal lobule',
    direction: '▲',
    autismFinding: 'ASD-specific greater activation — the second-largest cluster in a large task-matched meta-analysis.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes. An EEG electrode over this region showed increased connectivity after 12 weeks of CBD oil in autistic children (Parrella 2025).',
    regionId: 'parietal',
  },
  {
    area: 'Superior temporal gyrus',
    direction: '▼',
    autismFinding: 'Lower activation vs. controls (shared with ADHD) — processes auditory information, speech, and (posteriorly) voice-based social cognition.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD research on this region. The closest evidence in this atlas is for the neighbouring fusiform gyrus (which does have a finding) and superior temporal sulcus (also untested).',
    regionId: null,
  },
  {
    area: 'Dorsolateral prefrontal cortex',
    direction: '▲',
    autismFinding: 'Increased gray-matter volume, differentiating autism from ADHD specifically (not a shared finding).',
    cbdStatus: 'general',
    cbdFinding: 'General prefrontal-cortex CBD evidence exists, but nothing isolates the DLPFC itself or tests it in autistic people.',
    regionId: 'pfc',
  },
  {
    area: 'Ventrolateral prefrontal cortex',
    direction: '▲',
    autismFinding: 'Bilateral overactivation during cognitive-control tasks, differentiating autism from ADHD specifically.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD study isolates this specific subregion.',
    regionId: null,
  },
  {
    area: 'Globus pallidus',
    direction: '↕',
    autismFinding: 'No overall volume difference, but pallidal shape/surface area correlates with restricted-repetitive-behavior severity and grows more concave with age.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD study isolates this nucleus. A whole-brain mouse fMRI screen found no overall basal-ganglia change, but didn’t break results out by individual structure (Sadaka 2021).',
    regionId: null,
  },
  {
    area: 'Thalamus',
    direction: '↕',
    autismFinding: 'No overall volume difference, but shape analysis found expanded right-posterior surface area and a more concave left mediodorsal nucleus.',
    cbdStatus: 'null',
    cbdFinding: 'Tested directly — a whole-brain mouse fMRI screen found no significant thalamic change from CBD (Sadaka 2021). A genuine null result, not an untested gap.',
    regionId: 'thalamus',
  },
  {
    area: 'Supplementary motor area',
    direction: '↕',
    autismFinding: 'Atypical sensorimotor activation, plus increased premotor gray-matter volume with altered white-matter tracts — autism’s well-documented motor/praxis differences live largely here.',
    cbdStatus: 'gap',
    cbdFinding: 'No CBD research examines the supplementary motor area or premotor cortex, in autism or generally.',
    regionId: null,
  },
  {
    area: 'Fusiform gyrus',
    direction: '▼',
    autismFinding: 'Hypoactivation is the most-replicated face-processing finding in autism, though largely gaze/attention-mediated rather than a fixed inability to process faces.',
    cbdStatus: 'autism',
    cbdFinding: 'Yes. The same study as the cerebellum found an autism-selective activity increase here too (Pretzsch 2019).',
    regionId: 'cerebellum',
  },
  {
    area: 'Hypothalamus',
    direction: '↕',
    autismFinding: 'Contested structural findings — one study found decreased gray-matter density and enlarged third ventricle; a later study found no volume difference but an altered oxytocin association.',
    cbdStatus: 'general',
    cbdFinding: 'A mouse study found CBD increases HPA-axis (stress-hormone) reactivity in a sex-specific way (Jenkins 2026) — a real, direct hypothalamic finding, but not done in autistic subjects.',
    regionId: 'bnst',
  },
]
