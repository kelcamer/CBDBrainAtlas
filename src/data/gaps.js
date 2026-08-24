// ---------------------------------------------------------------------------
// Autism-relevant brain areas with NO CBD research (autism-specific or
// general) found in the literature review behind this atlas — as opposed to
// the regions above, which all have at least one CBD study.
//
// This list exists to be honest about absence of evidence, not evidence of
// absence: these are well-replicated autism findings that CBD research has
// simply never examined, as far as this project's search could determine.
// ---------------------------------------------------------------------------

export const GAPS = [
  {
    id: 'thalamus',
    name: 'Thalamus',
    autismEvidence:
      'Thalamocortical hyperconnectivity and impaired sensory gating are well-replicated autism findings, linked to sensory over-responsivity. Surface-based shape analysis (rather than overall volume) has also found expanded surface area in the right posterior thalamus and a more concave left mediodorsal nucleus in autism.',
    cbdGap:
      'No study — autism-specific or general — has examined CBD’s effect on the thalamus. It appears only as non-interactive background anatomy on this atlas’s map.',
  },
  {
    id: 'whiteMatter',
    name: 'White matter / corpus callosum',
    autismEvidence:
      'The single most consistently reported finding in autism diffusion-tensor-imaging (DTI) studies: reduced corpus callosum integrity and widespread white-matter tract disruption, linked to interhemispheric and long-range connectivity differences.',
    cbdGap:
      'One CBD structural-MRI study exists (Sharma 2019, in epilepsy, not autism) and found no gray-matter change — but no CBD-autism DTI study of white matter exists at all.',
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
    id: 'stg',
    name: 'Superior temporal gyrus',
    autismEvidence:
      'Shows lower activation in autism relative to controls (shared with ADHD in a large task-based fMRI meta-analysis); processes auditory information and speech comprehension, and — in its posterior portion — voice-based social cognition.',
    cbdGap:
      'No CBD study examines the superior temporal gyrus directly. The closest evidence in this atlas is for the fusiform gyrus (which does have a CBD finding) and the adjacent superior temporal sulcus (also listed here as a gap).',
  },
  {
    id: 'mtg',
    name: 'Middle temporal gyrus',
    autismEvidence:
      'A genuinely lateralized finding in autism — greater activation on the left, lower on the right, versus controls — rather than a simple up-or-down effect. Supports semantic/language processing and social perception.',
    cbdGap:
      'No CBD study, autism-specific or general, examines the middle temporal gyrus.',
  },
  {
    id: 'lingualGyrus',
    name: 'Lingual gyrus',
    autismEvidence:
      'Greater activation shared between autism and ADHD versus typically developing controls on matched cognitive tasks — a visual-system region at the occipital-temporal border involved in complex imagery and visual memory encoding.',
    cbdGap:
      'No CBD study, autism-specific or general, examines the lingual gyrus.',
  },
  {
    id: 'gyrusRectus',
    name: 'Gyrus rectus',
    autismEvidence:
      'Greater activation shared between autism and ADHD versus controls in this ventral frontal-lobe region tied to social cognition, decision-making, and olfactory processing.',
    cbdGap:
      'No CBD study has examined the gyrus rectus specifically.',
  },
  {
    id: 'middleFrontalGyrus',
    name: 'Middle frontal gyrus',
    autismEvidence:
      'Lower activation shared between autism and ADHD versus controls; overlaps functionally with dorsolateral prefrontal cortex, supporting working memory and attention-shifting.',
    cbdGap:
      'CBD studies target the prefrontal cortex broadly — and specifically the dorsomedial PFC via MR spectroscopy — but none isolate the middle frontal gyrus itself.',
  },
  {
    id: 'globusPallidus',
    name: 'Globus pallidus',
    autismEvidence:
      'No overall volume difference from controls, but surface-based shape analysis found bilateral dorsal-medial globus pallidus surface area correlates with restricted/repetitive behavior severity, and pallidal shape grows more concave with age in autism.',
    cbdGap:
      'No CBD study examines the globus pallidus — this atlas’s basal-ganglia evidence for CBD is limited to the caudate, putamen, and nucleus accumbens.',
  },
  {
    id: 'sma',
    name: 'Supplementary motor area',
    autismEvidence:
      'Atypical activation during sensorimotor processing, plus increased premotor gray-matter volume with altered premotor white-matter tracts in autism — a distinct motor/praxis literature separate from the social-cognition findings elsewhere on this list. Autism’s well-documented motor and coordination differences live largely here.',
    cbdGap:
      'No CBD study examines the supplementary motor area or premotor cortex, in autism or generally.',
  },
  {
    id: 'hypothalamus',
    name: 'Hypothalamus',
    autismEvidence:
      'Contested structural findings in autism: one study found decreased hypothalamic gray-matter density with an enlarged third ventricle; a later study found no volume difference but an altered oxytocin association.',
    cbdGap:
      'No direct CBD-hypothalamus study exists in this atlas — though CBD’s broader HPA-axis effects, via the BNST and PAG (both elsewhere in this atlas), make the hypothalamus a very plausible downstream target that simply hasn’t been tested directly.',
  },
  {
    id: 'locusCoeruleus',
    name: 'Locus coeruleus (noradrenergic system)',
    autismEvidence:
      'Autistic children show increased tonic (resting pupil diameter) but reduced phasic (event-related) locus-coeruleus/noradrenergic activity versus typically developing peers — implicated in autism’s hyperarousal, anxiety and sensory over-responsivity.',
    cbdGap:
      'THC and synthetic CB1 agonists are known to increase locus-coeruleus firing, but no study has tested CBD specifically here — in autism or otherwise.',
  },
]
