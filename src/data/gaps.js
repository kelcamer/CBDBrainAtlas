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
      'Thalamocortical hyperconnectivity and impaired sensory gating are well-replicated autism findings, linked to sensory over-responsivity and thought to reflect an excitatory/inhibitory imbalance in thalamocortical circuits.',
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
    id: 'locusCoeruleus',
    name: 'Locus coeruleus (noradrenergic system)',
    autismEvidence:
      'The brain’s main noradrenaline source, implicated in autism’s hyperarousal, anxiety and sensory over-responsivity via noradrenergic dysregulation.',
    cbdGap:
      'THC and synthetic CB1 agonists are known to increase locus-coeruleus firing, but no study has tested CBD specifically here — in autism or otherwise.',
  },
]
