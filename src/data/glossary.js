// ---------------------------------------------------------------------------
// Plain-English definitions for the recurring technical terms used across
// this atlas's findings and mechanisms. Not exhaustive pharmacology/imaging
// textbooks — just enough to make a source's finding make sense on first
// read, without needing to look anything up elsewhere.
// ---------------------------------------------------------------------------

export const GLOSSARY = [
  {
    term: '2-AG',
    full: '2-arachidonoylglycerol',
    definition:
      'One of the body’s own natural cannabis-like molecules (an "endocannabinoid"), alongside anandamide. It activates the same CB1/CB2 receptors that THC does.',
  },
  {
    term: '5-HT1A receptor',
    definition:
      'A subtype of serotonin receptor. Activating it generally has a calming, anti-anxiety effect — it’s the receptor most often cited as CBD’s main mechanism of action.',
  },
  {
    term: 'Anandamide (AEA)',
    definition:
      'The other major natural endocannabinoid the body produces. CBD indirectly raises anandamide levels by blocking the enzyme (FAAH) that normally breaks it down.',
  },
  {
    term: 'Aperiodic activity',
    definition:
      'The "non-rhythmic" background hum in an EEG signal, as opposed to activity at specific rhythmic frequencies (like alpha or beta waves). Changes in its slope or overall level are an emerging way to measure general shifts in brain excitability.',
  },
  {
    term: 'BOLD signal',
    full: 'Blood-oxygen-level-dependent signal',
    definition:
      'What fMRI actually measures: tiny changes in blood oxygen levels that occur when a brain region works harder. More BOLD signal is usually read as "more activity," though it’s an indirect proxy, not a direct measure of neurons firing.',
  },
  {
    term: 'Default-mode network (DMN)',
    definition:
      'A set of interconnected brain regions — including the posterior cingulate cortex and medial prefrontal cortex — that are most active when a person is resting and mind-wandering, rather than focused on an external task.',
  },
  {
    term: 'EEG',
    full: 'Electroencephalography',
    definition:
      'Recording electrical activity from the brain using electrodes on the scalp. Much cheaper and more portable than MRI, but with far less precision about exactly where in the brain a signal is coming from.',
  },
  {
    term: 'FAAH',
    full: 'Fatty acid amide hydrolase',
    definition:
      'The enzyme that normally breaks down anandamide. CBD partially blocks FAAH, which is why anandamide levels rise after taking it.',
  },
  {
    term: 'fALFF',
    full: 'Fractional amplitude of low-frequency fluctuations',
    definition:
      'A resting-state fMRI measure of how much a brain region’s activity level naturally rises and falls, moment to moment, while a person is doing nothing in particular. Higher fALFF is generally read as a more "active" resting state in that region.',
  },
  {
    term: 'fMRI',
    full: 'Functional magnetic resonance imaging',
    definition:
      'A brain scan that tracks blood flow (via the BOLD signal) to infer which regions are more or less active — either during a task, or at rest ("resting-state" fMRI).',
  },
  {
    term: 'Functional connectivity',
    definition:
      'How closely two brain regions’ activity rises and falls together over time. Strong functional connectivity is interpreted as those regions "communicating" or working together as a network, even if they aren’t physically adjacent.',
  },
  {
    term: 'GABA',
    full: 'Gamma-aminobutyric acid',
    definition:
      'The brain’s main inhibitory (calming) neurotransmitter — it dials neuron activity down. Usually discussed alongside glutamate as the brain’s "excitation/inhibition balance."',
  },
  {
    term: 'Glx',
    definition:
      'A combined measurement of glutamate plus glutamine (a related molecule), because MR spectroscopy often can’t fully tell the two apart. Used as a stand-in for glutamate levels.',
  },
  {
    term: 'Glutamate',
    definition:
      'The brain’s main excitatory neurotransmitter — it revs neuron activity up. Paired with GABA, its balance is central to theories of autism and psychosis.',
  },
  {
    term: 'GPR55',
    definition:
      'A receptor densely found on neurons in the caudate and putamen. CBD blocks (antagonises) it — a mechanism separate from the classic CB1/CB2 cannabinoid receptors.',
  },
  {
    term: 'MRS',
    full: 'Magnetic resonance spectroscopy',
    definition:
      'An MRI variant that measures the concentration of specific brain chemicals — like glutamate or GABA — in a chosen region, rather than mapping blood flow or structure.',
  },
  {
    term: 'Resting-state (fMRI/EEG)',
    definition:
      'Scanning someone while they’re doing nothing in particular — no task, just lying still — to see how brain regions behave and connect on their own, as opposed to during a specific mental task.',
  },
  {
    term: 'SPECT',
    full: 'Single-photon emission computed tomography',
    definition:
      'A nuclear-imaging scan that uses a small amount of injected radioactive tracer to map blood flow across the brain — an older alternative to fMRI, used in several of the earliest CBD brain-imaging studies.',
  },
  {
    term: 'VBM',
    full: 'Voxel-based morphometry',
    definition:
      'A method for comparing brain structure (like gray matter volume) between groups, voxel by voxel, across the whole brain.',
  },
  {
    term: 'Voxel',
    definition:
      'The 3D equivalent of a pixel — the smallest cube of brain tissue a scan measures as one unit. An MRS "voxel" is the specific chunk of brain a spectroscopy measurement was taken from.',
  },
]
