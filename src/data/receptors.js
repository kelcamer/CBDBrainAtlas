// ---------------------------------------------------------------------------
// Molecular targets of CBD.
// Compiled from mechanism reviews: Campos 2012, Blessing 2015, Melas 2021,
// Batalla 2021 (see sources.js). CBD is a "promiscuous" drug — it touches many
// targets at once, which is why its regional effects are broad.
// ---------------------------------------------------------------------------

export const RECEPTORS = [
  {
    id: 'ttype',
    name: 'Cav3 T-type calcium channels',
    action: 'Inhibitor (Cav3.1 / Cav3.2)',
    effect:
      'Blocks low-voltage Cav3.1/Cav3.2 T-type channels (IC50 ≈ 1 µM; weaker on Cav3.3), damping neuronal excitability, thalamic burst-firing and pain signalling — relevant to CBD’s analgesic and anti-seizure actions. Cav3.2 (CACNA1H) is genetically tied to autism, but the ASD-linked variants are usually loss-of-function, so this is a shared calcium-channel thread, not a straightforward correction.',
  },
  {
    id: '5ht1a',
    name: '5-HT1A serotonin receptor',
    action: 'Agonist / positive modulator',
    effect:
      'Central to CBD’s acute calming action — anxiolytic, antidepressant, analgesic and neuroprotective effects across the raphe, PAG, BNST and prefrontal cortex.',
  },
  {
    id: 'faah',
    name: 'FAAH → anandamide',
    action: 'Inhibits FAAH & anandamide reuptake',
    effect:
      'Raises the endocannabinoid anandamide, linked to sustained anxiolysis and to adult hippocampal neurogenesis.',
  },
  {
    id: 'cb1',
    name: 'CB1 cannabinoid receptor',
    action: 'Negative allosteric modulator (indirect)',
    effect:
      'Dampens THC’s CB1-driven effects and shapes memory, mood and appetite circuits — CBD binds CB1 only weakly and acts largely indirectly.',
  },
  {
    id: 'cb2',
    name: 'CB2 cannabinoid receptor',
    action: 'Modulator',
    effect: 'Immune and microglial modulation; relevant to neuroinflammation.',
  },
  {
    id: 'trpv1',
    name: 'TRPV1 vanilloid channel',
    action: 'Agonist → desensitisation',
    effect: 'Modulates pain, anxiety and neuronal excitability.',
  },
  {
    id: 'trpv2',
    name: 'TRPV2 channel',
    action: 'Agonist',
    effect: 'Implicated in anti-inflammatory and analgesic actions.',
  },
  {
    id: 'gpr55',
    name: 'GPR55 receptor',
    action: 'Antagonist',
    effect: 'May contribute to antiseizure and anti-inflammatory effects.',
  },
  {
    id: 'adenosine',
    name: 'Adenosine reuptake (ENT1)',
    action: 'Inhibitor',
    effect: 'Boosts adenosine signalling — anti-inflammatory and possibly anticonvulsant.',
  },
  {
    id: 'cav3',
    name: 'Cav3 T-type calcium channels',
    action: 'Inhibitor (shifts steady-state inactivation)',
    effect:
      'Blocks Cav3.1 and Cav3.2 near 1 \u00b5M \u2014 and over half of peak Cav3.1 current at 100 nM from a \u201370 mV holding potential \u2014 while barely touching Cav3.3 (Ross 2008). These channels build the thalamus\u2019s burst/tonic firing switch and set low-threshold excitability in sensory neurons, making this CBD\u2019s most thalamus-specific target. THC acts on the same channels but stabilises their open state, which is why the two cannabinoids are treated as opposite here.',
  },
  {
    id: 'd2high',
    name: 'Dopamine D2High receptor',
    action: 'Partial agonist',
    effect:
      'Binds the high-affinity state of the D2 receptor at concentrations matching CBD\u2019s clinical antipsychotic dose, in the same biphasic way as aripiprazole (Seeman 2016) \u2014 a dopaminergic route separate from CB1/CB2. Relevant wherever D2 density is atypical, including the autistic thalamus and striatum. Single in-vitro binding study; not yet confirmed in living brain.',
  },
  {
    id: 'ppar',
    name: 'PPARγ nuclear receptor',
    action: 'Agonist',
    effect: 'Activates anti-inflammatory and neuroprotective gene programs.',
  },
]
