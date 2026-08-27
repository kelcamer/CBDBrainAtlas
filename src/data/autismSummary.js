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
//
// direction / cbdDirection — canonical codes rendered via src/lib/direction.js
// (dirArrow/dirColor) so both columns share one visual language: diagonal
// arrows, colored by direction.
//   'up'    — increase — green ↗
//   'down'  — decrease — red ↘
//   'mixed' — genuinely opposite findings across studies/subregions/doses
//             (not just a big effect vs. a small one) — amber ↕
//   'null'  — tested directly, no significant effect — muted —
//   null/undefined (cbdDirection only) — no CBD data at all (cbdStatus 'gap')
// ---------------------------------------------------------------------------

export const AUTISM_SUMMARY = [
  {
    area: 'Lingual gyrus',
    direction: 'up',
    autismFinding: 'Greater activation vs. controls (shared with ADHD) on matched cognitive tasks — visual-imagery and memory-encoding region.',
    cbdStatus: 'general',
    cbdDirection: 'up',
    cbdFinding: '10 weeks of daily CBD increased amygdala-to-lingual-gyrus functional connectivity in cannabis users, with a large effect size (Lorenzetti 2024) — not studied in autistic people specifically.',
    regionId: 'amygdala',
  },
  {
    area: 'Gyrus rectus',
    direction: 'up',
    autismFinding: 'Greater activation vs. controls (shared with ADHD) — ventral frontal region tied to social cognition and decision-making.',
    cbdStatus: 'general',
    cbdDirection: 'up',
    cbdFinding: 'CBD increases blood flow in the orbitofrontal cortex — which anatomically includes the gyrus rectus, though this study didn’t isolate it — correlating with faster working-memory reaction times (Bloomfield 2020). Not studied in autistic people.',
    regionId: 'pfc',
  },
  {
    area: 'Middle frontal gyrus',
    direction: 'down',
    autismFinding: 'Lower activation vs. controls (shared with ADHD) — overlaps functionally with dorsolateral prefrontal cortex.',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'Yes, corrected from an earlier "gap" call. A secondary source cites a "Fusar-Poli 2012" finding of CBD activation here in established psychosis, and this project still could not independently verify that citation as a real, distinct primary paper. But a different, verifiable one exists: Borgwardt 2008 (Biol Psychiatry) reports CBD attenuating activity in the right superior, middle, inferior, and orbitofrontal gyri during a go/no-go response-inhibition task — not in autistic people specifically.',
    regionId: 'pfc',
  },
  {
    area: 'Parahippocampal gyrus',
    direction: 'down',
    autismFinding: 'Lower activation vs. controls (shared with ADHD); CBDV specifically shows reduced connectivity to the posterior cingulate in autistic adults.',
    cbdStatus: 'autism',
    cbdDirection: 'mixed',
    cbdFinding: 'Genuinely mixed, by study: CBD increased left parahippocampal blood flow in healthy volunteers (Crippa 2004), but decreased it in social-anxiety patients during a simulated public-speaking task (Crippa 2011) — different populations, opposite directions. O’Neill 2021 found CBD shifted parahippocampal activation toward the non-clinical pattern during verbal memory, which direction that means depends on how the patient group differed at baseline. Separately, CBDV reduces parahippocampal-to-PCC connectivity specifically in autistic adults (Pretzsch, INSAR 2018) — a decrease, but of connectivity, not activation.',
    regionId: 'hippocampus',
  },
  {
    area: 'Insula',
    direction: 'down',
    autismFinding: 'Lower activation vs. controls on task-based fMRI (shared with ADHD). Caveat: interoceptive accuracy itself appears intact in autistic adults per a 2025 meta-analysis — this is a task-activation finding, not proof of "reduced interoception."',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'CBD normalises insula over-activation in people at clinical high risk for psychosis (Wilson 2019) and produced a null effect in a reward task (Lawn 2020) — neither study was in autistic people specifically.',
    regionId: 'insula',
  },
  {
    area: 'Middle temporal gyrus',
    direction: 'mixed',
    autismFinding: 'Genuinely lateralized — greater activation on the left, lower on the right, vs. controls. Supports semantic/language processing and social perception.',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'Yes, corrected from an earlier "gap" call — a repeat of the lingual-gyrus lesson. Winton-Brown 2011, already cited in this atlas for the superior temporal gyrus, reports CBD attenuating activity specifically in the posterior middle temporal gyrus during auditory processing; the finding was just filed under the paper\'s STG framing rather than cross-referenced here. Not studied in autistic people.',
    regionId: null,
  },
  {
    area: 'Amygdala',
    direction: 'mixed',
    autismFinding: 'Task-dependent: lower activation on passive face tasks, higher when fixating eyes/faces directly; structurally enlarged in early toddlerhood.',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'CBD dampens amygdala reactivity to fearful faces in several studies, though a larger 2022 crossover trial found no effect — none of this research was autism-specific.',
    regionId: 'amygdala',
  },
  {
    area: 'Cerebellum (vermis)',
    direction: 'mixed',
    autismFinding: 'Increased right-cerebellum task activation during facial emotion processing; an earlier borderline volume increase didn’t replicate in a larger sample.',
    cbdStatus: 'autism',
    cbdDirection: 'up',
    cbdFinding: 'Yes — and uniquely so. CBD increased vermis activity almost exclusively in autistic participants, with little change in non-autistic controls (Pretzsch 2019).',
    regionId: 'cerebellum',
  },
  {
    area: 'Medial prefrontal cortex',
    direction: 'down',
    autismFinding: 'Reduced long-range default-mode-network connectivity, tied to self/other differentiation. Caveat: shouldn’t be read as a universal empathy deficit — the "double-empathy problem" reframes many social breakdowns as bidirectional mismatches, not one-sided.',
    cbdStatus: 'autism',
    cbdDirection: 'up',
    cbdFinding: 'Partial. General rodent evidence exists (Sartim 2016, not autism-specific), but a 2025 EEG study specifically targeted the mPFC as part of a hypothesized "social brain" network in autistic children (Parrella 2025).',
    regionId: 'pfc',
  },
  {
    area: 'Posterior cingulate cortex',
    direction: 'down',
    autismFinding: 'Decreased functional connectivity and interhemispheric coherence, part of the DMN’s reflective self-processing.',
    cbdStatus: 'autism',
    cbdDirection: 'down',
    cbdFinding: 'Yes, though thinly. CBDV alters parahippocampal-to-PCC connectivity specifically in autistic adults (Pretzsch, INSAR 2018) — but this result was only ever presented at a conference, never published as a full peer-reviewed paper.',
    regionId: 'pcc',
  },
  {
    area: 'Anterior cingulate cortex',
    direction: 'mixed',
    autismFinding: 'Decreased connectivity with the PCC (DMN); a separate meta-analysis found a genuine dissociation within the ACC itself during emotional/reward tasks.',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'Extensively studied for threat/fear response and connectivity with the amygdala, but none of that research was done in autistic people specifically.',
    regionId: 'acc',
  },
  {
    area: 'Orbitofrontal cortex',
    direction: 'up',
    autismFinding: 'Overactivation during cognitive control, differentiating autism from ADHD specifically (not a shared finding).',
    cbdStatus: 'general',
    cbdDirection: 'mixed',
    cbdFinding: 'Species-split: no effect in a human reward task (Lawn 2020, a Bayesian-confirmed null), but increased BOLD signal in a mouse whole-brain screen (Sadaka 2021) — neither in autistic subjects.',
    regionId: 'pfc',
  },
  {
    area: 'Locus coeruleus',
    direction: 'mixed',
    autismFinding: 'Increased tonic (resting pupil) but reduced phasic noradrenergic activity vs. peers — implicated in hyperarousal and sensory over-responsivity.',
    cbdStatus: 'gap',
    cbdDirection: null,
    cbdFinding: 'No direct brain-level CBD research — only THC, synthetic CB1 agonists, and the related cannabinoid CBG. The closest indirect evidence: CBD modestly improved heart-rate-variability measures of autonomic tone (Williams 2021), a peripheral readout, not a direct LC test.',
    regionId: null,
  },
  {
    area: 'Putamen',
    direction: 'up',
    autismFinding: 'ASD-specific greater activation (vs. ADHD); also shows higher connectivity to the ventral striatum and posterior superior temporal gyrus at baseline.',
    cbdStatus: 'autism',
    cbdDirection: 'down',
    cbdFinding: 'Yes. CBDV significantly reduces both of those elevated connections toward the non-autistic level (Pretzsch 2021).',
    regionId: 'striatum',
  },
  {
    area: 'Hippocampus',
    direction: 'mixed',
    autismFinding: 'Genuine within-study dissociation — greater activation at one subregion, lower at another.',
    cbdStatus: 'autism',
    cbdDirection: 'up',
    cbdFinding: 'Yes. CBDV restores hippocampal endocannabinoid signalling in the valproate rat model of autism (Zamberletti 2019); hippocampal anandamide is separately reported reduced in autism generally (Jia 2025).',
    regionId: 'hippocampus',
  },
  {
    area: 'Inferior parietal lobule',
    direction: 'up',
    autismFinding: 'ASD-specific greater activation — the second-largest cluster in a large task-matched meta-analysis.',
    cbdStatus: 'autism',
    cbdDirection: 'up',
    cbdFinding: 'Yes. An EEG electrode over this region showed increased connectivity after 12 weeks of CBD oil in autistic children (Parrella 2025).',
    regionId: 'parietal',
  },
  {
    area: 'Superior temporal gyrus',
    direction: 'down',
    autismFinding: 'Lower activation vs. controls (shared with ADHD) — processes auditory information, speech, and (posteriorly) voice-based social cognition.',
    cbdStatus: 'general',
    cbdDirection: 'up',
    cbdFinding: 'CBD and THC have opposite effects in the right posterior superior temporal gyrus during auditory processing (Winton-Brown 2011) — not studied in autistic people. The neighbouring superior temporal sulcus remains untested.',
    regionId: null,
  },
  {
    area: 'Dorsolateral prefrontal cortex',
    direction: 'up',
    autismFinding: 'Increased gray-matter volume, differentiating autism from ADHD specifically (not a shared finding).',
    cbdStatus: 'general',
    cbdDirection: 'mixed',
    cbdFinding: 'No study isolates the DLPFC itself, but the adjacent prefrontal evidence splits by subregion: decreased (attenuated) activity in the functionally overlapping middle frontal gyrus (Borgwardt 2008), decreased dorsomedial-PFC glutamate with GABA diverging by group (Pretzsch 2019), and increased BOLD in ventral/orbital PFC in a mouse screen (Sadaka 2021). No single direction summarizes "the PFC" — and none of it was tested in autistic people.',
    regionId: 'pfc',
  },
  {
    area: 'Ventrolateral prefrontal cortex',
    direction: 'up',
    autismFinding: 'Bilateral overactivation during cognitive-control tasks, differentiating autism from ADHD specifically.',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'Borderline — downgraded from "gap." No study uses the term "VLPFC" itself, but VLPFC is standard shorthand for the inferior frontal gyrus (BA44/45/47), the same kind of naming equivalence this atlas already applies to the gyrus rectus/OFC. Under that reading, Borgwardt 2008 and the related Bhattacharyya-lineage response-inhibition fMRI studies — which repeatedly report CBD modulating (right) inferior frontal gyrus activity — count as VLPFC findings in substance, just not in name. Not studied in autistic people.',
    regionId: null,
  },
  {
    area: 'Globus pallidus',
    direction: 'mixed',
    autismFinding: 'No overall volume difference, but pallidal shape/surface area correlates with restricted-repetitive-behavior severity and grows more concave with age.',
    cbdStatus: 'general',
    cbdDirection: 'down',
    cbdFinding: 'Yes — injected directly into the external globus pallidus of rats, CBD reduced motor asymmetry and improved fine motor skills in a Parkinson’s model, acting via GPR55 (Patricio 2022). Not studied in autistic subjects.',
    regionId: null,
  },
  {
    area: 'Thalamus',
    direction: 'mixed',
    autismFinding: 'No overall volume difference, but shape analysis found expanded right-posterior surface area and a more concave left mediodorsal nucleus.',
    cbdStatus: 'null',
    cbdDirection: 'null',
    cbdFinding: 'Tested directly — a whole-brain mouse fMRI screen found no significant thalamic change from CBD (Sadaka 2021). A genuine null result, not an untested gap.',
    regionId: 'thalamus',
  },
  {
    area: 'Supplementary motor area',
    direction: 'mixed',
    autismFinding: 'Atypical sensorimotor activation, plus increased premotor gray-matter volume with altered white-matter tracts — autism’s well-documented motor/praxis differences live largely here.',
    cbdStatus: 'gap',
    cbdDirection: null,
    cbdFinding: 'No brain-imaging study exists. Closest clinical evidence: a single CBD dose didn’t reduce tremor in essential tremor, a disorder of this same motor circuitry (de Alencar 2021) — but that used rating scales, not brain imaging.',
    regionId: null,
  },
  {
    area: 'Fusiform gyrus',
    direction: 'down',
    autismFinding: 'Hypoactivation is the most-replicated face-processing finding in autism, though largely gaze/attention-mediated rather than a fixed inability to process faces.',
    cbdStatus: 'autism',
    cbdDirection: 'up',
    cbdFinding: 'Yes. The same study as the cerebellum found an autism-selective activity increase here too (Pretzsch 2019).',
    regionId: 'cerebellum',
  },
  {
    area: 'Hypothalamus',
    direction: 'mixed',
    autismFinding: 'Contested structural findings — one study found decreased gray-matter density and enlarged third ventricle; a later study found no volume difference but an altered oxytocin association.',
    cbdStatus: 'general',
    cbdDirection: 'up',
    cbdFinding: 'A mouse study found CBD increases HPA-axis (stress-hormone) reactivity in a sex-specific way (Jenkins 2026) — a real, direct hypothalamic finding, but not done in autistic subjects.',
    regionId: 'bnst',
  },
]
