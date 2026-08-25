// ---------------------------------------------------------------------------
// Autism-relevant brain areas with NO CBD research (autism-specific or
// general) found in the literature review behind this atlas — as opposed to
// the regions above, which all have at least one CBD study.
//
// This list exists to be honest about absence of evidence, not evidence of
// absence: these are well-replicated autism findings that CBD research has
// simply never examined, as far as this project's search could determine.
// Eight former entries here — the thalamus, hypothalamus, lingual gyrus,
// gyrus rectus, superior temporal gyrus, globus pallidus, middle temporal
// gyrus, and middle frontal gyrus — were moved out after further review
// surfaced real CBD research touching them (see the Thalamus region, the
// BNST region's HPA-axis note, the Lorenzetti 2024 lingual-gyrus finding,
// Bloomfield 2020 on orbitofrontal blood flow, Winton-Brown 2011 on the
// superior temporal gyrus, Patricio 2022's direct intrapallidal CBD
// injection in rats, and Borgwardt 2008 on response-inhibition fMRI).
// The lingual gyrus case was the first lesson: it was missed because the
// source paper's title only names the hippocampus and amygdala, and its
// specific connectivity-partner findings, buried in the results rather
// than the title, hadn't been checked against this list. The middle
// temporal gyrus repeated the exact same lesson — Winton-Brown 2011 was
// already cited elsewhere in this atlas for the superior temporal gyrus,
// but its reported MTG cluster went unchecked against this list too. The
// middle frontal gyrus was different: the specific citation this project
// had for it ("Fusar-Poli 2012") remains unverifiable, but a separate,
// confirmed paper (Borgwardt 2008) turned out to cover the same region.
// The ventrolateral prefrontal cortex was also downgraded from this list,
// though more provisionally — no study uses the term "VLPFC" itself, but
// it's standard shorthand for the inferior frontal gyrus, which Borgwardt
// 2008 and related studies do report on directly.
// ---------------------------------------------------------------------------

export const GAPS = [
  {
    id: 'whiteMatter',
    name: 'White matter / corpus callosum',
    autismEvidence:
      'The single most consistently reported finding in autism diffusion-tensor-imaging (DTI) studies: reduced corpus callosum integrity and widespread white-matter tract disruption, linked to interhemispheric and long-range connectivity differences.',
    cbdGap:
      'Two CBD structural-MRI studies exist, both in epilepsy (not autism), and both essentially null: Sharma 2019 found no gray-matter/cortical-thickness change, and Houston 2021 — using diffusion-tensor imaging, the standard white-matter-integrity method — found only minor, largely non-significant white-matter changes after 12 weeks of CBD. No CBD-autism DTI study of white matter exists at all.',
  },
  {
    id: 'sts',
    name: 'Superior temporal sulcus (STS)',
    autismEvidence:
      'Arguably the single most autism-relevant social-cognition region: processes biological motion, voice, and audiovisual speech integration, with disrupted STS function proposed as a core mechanism behind autism’s social and language differences.',
    cbdGap:
      'No CBD study, autism-specific or general, has examined the STS directly — despite it being explicitly named as part of the hypothesized "social brain" network in the Parrella 2025 EEG study, which measured nearby parietal electrodes rather than the STS itself.',
  },
  {
    id: 'sma',
    name: 'Supplementary motor area',
    autismEvidence:
      'Atypical activation during sensorimotor processing, plus increased premotor gray-matter volume with altered premotor white-matter tracts in autism — a distinct motor/praxis literature separate from the social-cognition findings elsewhere on this list. Autism’s well-documented motor and coordination differences live largely here.',
    cbdGap:
      'No brain-imaging study of the supplementary motor area or premotor cortex exists for CBD, in autism or generally. The closest clinical evidence is a null result: a single 300 mg CBD dose didn’t reduce tremor severity in essential tremor, a movement disorder driven by this same motor circuitry (de Alencar 2021) — but that trial used clinical rating scales, not brain imaging.',
  },
  {
    id: 'locusCoeruleus',
    name: 'Locus coeruleus (noradrenergic system)',
    autismEvidence:
      'Autistic children show increased tonic (resting pupil diameter) but reduced phasic (event-related) locus-coeruleus/noradrenergic activity versus typically developing peers — implicated in autism’s hyperarousal, anxiety and sensory over-responsivity.',
    cbdGap:
      'THC, synthetic CB1 agonists, and even the related phytocannabinoid CBG all have locus-coeruleus electrophysiology data — but a specific search for CBD itself found no direct brain-level study. The closest indirect evidence: a single CBD dose modestly improved heart-rate-variability measures of autonomic/vagal tone (Williams 2021) — a peripheral readout downstream of the LC-noradrenergic system, not a test of the LC itself. The closest direct CBD evidence in this atlas remains the neighbouring dorsal raphe nucleus, a different (serotonergic, not noradrenergic) brainstem nucleus.',
  },
]
