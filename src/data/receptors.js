// ---------------------------------------------------------------------------
// Molecular targets of CBD.
// Compiled from mechanism reviews: Campos 2012, Blessing 2015, Melas 2021,
// Batalla 2021 (see sources.js). CBD is a "promiscuous" drug — it touches many
// targets at once, which is why its regional effects are broad.
// ---------------------------------------------------------------------------

export const RECEPTORS = [
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
    id: 'ppar',
    name: 'PPARγ nuclear receptor',
    action: 'Agonist',
    effect: 'Activates anti-inflammatory and neuroprotective gene programs.',
  },
]
