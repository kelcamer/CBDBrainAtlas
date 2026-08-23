// ---------------------------------------------------------------------------
// CBD Brain Atlas — curated source library
// ---------------------------------------------------------------------------
// 32 peer-reviewed sources gathered from PubMed / JAMA / NEJM / The Lancet /
// Nature / Frontiers. Every `url` is a real, canonical link (PubMed PMID,
// journal DOI resolver, or publisher page).
//
// Fields
//   id        stable slug
//   authors   short author string
//   year      publication year
//   title     paper title
//   journal   journal name
//   type      display label (study design)
//   category  'imaging' | 'clinical' | 'preclinical' | 'review'
//   url       canonical link
//   regions   brain-region ids this paper speaks to (see regions.js)
//   autism    true if the paper is specifically about autism / ASD
//   finding   1–2 sentence PARAPHRASED summary (no verbatim quotes)
// ---------------------------------------------------------------------------

export const SOURCES = [
  // ---- Human neuroimaging: limbic / emotion circuitry -------------------
  {
    id: 'fusarpoli2009',
    authors: 'Fusar-Poli P, Crippa JA, Bhattacharyya S, et al.',
    year: 2009,
    title: 'Distinct effects of Δ9-THC and cannabidiol on neural activation during emotional processing',
    journal: 'Archives of General Psychiatry',
    type: 'Human fMRI (RCT)',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19124693/',
    regions: ['amygdala', 'acc'],
    autism: false,
    finding:
      'A single 600 mg dose of CBD reduced activation in the amygdala and cingulate cortex while participants viewed fearful faces, alongside lower skin-conductance arousal — the mirror image of THC.',
  },
  {
    id: 'fusarpoli2010',
    authors: 'Fusar-Poli P, Allen P, Bhattacharyya S, et al.',
    year: 2010,
    title: 'Modulation of effective connectivity during emotional processing by Δ9-THC and cannabidiol',
    journal: 'International Journal of Neuropsychopharmacology',
    type: 'Human fMRI (DCM)',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19775500/',
    regions: ['amygdala', 'acc'],
    autism: false,
    finding:
      'Using dynamic causal modelling, CBD weakened the forward connection from the anterior cingulate to the amygdala during fear processing — a proposed neural basis for its anxiolytic effect.',
  },
  {
    id: 'perry2024',
    authors: 'Perry RN, Ethier-Gagnon MA, Helmick CA, et al.',
    year: 2024,
    title: 'The impact of cannabidiol placebo on amygdala-based neural responses to an acute stressor',
    journal: 'Journal of Psychopharmacology',
    type: 'Human fMRI',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39400103/',
    regions: ['amygdala', 'acc', 'insula'],
    autism: false,
    finding:
      'Merely believing an oil contained CBD shifted amygdala resting-state connectivity with the dorsal anterior cingulate and anterior insula after stress — a reminder that expectancy contributes substantially to reported CBD effects.',
  },

  // ---- Human neuroimaging: salience / psychosis network -----------------
  {
    id: 'bhatt2012',
    authors: 'Bhattacharyya S, Crippa JA, Allen P, et al.',
    year: 2012,
    title: 'Induction of psychosis by Δ9-THC reflects modulation of prefrontal and striatal function during attentional salience processing',
    journal: 'Archives of General Psychiatry',
    type: 'Human fMRI',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/22213786/',
    regions: ['pfc', 'striatum', 'hippocampus'],
    autism: false,
    finding:
      'During a salience task, CBD produced changes opposite to THC — increasing activation in the left caudate and hippocampus while reducing right prefrontal activation.',
  },
  {
    id: 'bhatt2015',
    authors: 'Bhattacharyya S, Falkenberg I, Martin-Santos R, et al.',
    year: 2015,
    title: 'Cannabinoid modulation of functional connectivity within regions processing attentional salience',
    journal: 'Neuropsychopharmacology',
    type: 'Human fMRI',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25249057/',
    regions: ['pfc', 'striatum', 'hippocampus'],
    autism: false,
    finding:
      'CBD strengthened connectivity between the dorsal striatum and prefrontal cortex while reducing medial-temporal-to-prefrontal connectivity — again the opposite of THC.',
  },
  {
    id: 'bhatt2018',
    authors: 'Bhattacharyya S, Wilson R, Appiah-Kusi E, et al.',
    year: 2018,
    title: 'Effect of cannabidiol on medial temporal, midbrain, and striatal dysfunction in people at clinical high risk of psychosis: a randomized clinical trial',
    journal: 'JAMA Psychiatry',
    type: 'RCT (fMRI)',
    category: 'imaging',
    url: 'https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2697762',
    regions: ['hippocampus', 'midbrain', 'striatum'],
    autism: false,
    finding:
      'In people at clinical high risk for psychosis, a single 600 mg dose partially normalised abnormal parahippocampal, striatal and midbrain activation toward the levels seen in healthy controls.',
  },
  {
    id: 'davies2020',
    authors: 'Davies C, Wilson R, Appiah-Kusi E, et al.',
    year: 2020,
    title: 'A single dose of cannabidiol modulates medial temporal and striatal function during fear processing in people at clinical high risk for psychosis',
    journal: 'Translational Psychiatry',
    type: 'RCT (fMRI)',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32921794/',
    regions: ['hippocampus', 'striatum', 'amygdala'],
    autism: false,
    finding:
      'CBD altered parahippocampal and striatal (caudate, putamen) responses during fearful-face processing in at-risk individuals — regions tied to their heightened anxiety.',
  },
  {
    id: 'oneill2021',
    authors: "O'Neill A, Wilson R, Blest-Hopley G, et al.",
    year: 2021,
    title: 'Normalization of mediotemporal and prefrontal activity, and mediotemporal-striatal connectivity, may underlie antipsychotic effects of cannabidiol in psychosis',
    journal: 'Psychological Medicine',
    type: 'RCT (fMRI)',
    category: 'imaging',
    url: 'https://www.cambridge.org/core/journals/psychological-medicine/article/abs/normalization-of-mediotemporal-and-prefrontal-activity-and-mediotemporalstriatal-connectivity-may-underlie-antipsychotic-effects-of-cannabidiol-in-psychosis/6571F47CE15D05DC50782A7BB7C00A7F',
    regions: ['hippocampus', 'pfc', 'striatum'],
    autism: false,
    finding:
      'During verbal memory, CBD shifted medial-temporal and prefrontal activation, and their connectivity with the striatum, toward the patterns seen in healthy controls.',
  },
  {
    id: 'grimm2018',
    authors: 'Grimm O, Löffler M, Kamping S, et al.',
    year: 2018,
    title: 'Probing the endocannabinoid system in healthy volunteers: cannabidiol alters fronto-striatal resting-state connectivity',
    journal: 'European Neuropsychopharmacology',
    type: 'Human fMRI',
    category: 'imaging',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29887287/',
    regions: ['pfc', 'striatum'],
    autism: false,
    finding:
      'In healthy adults, CBD increased resting-state connectivity between the frontal cortex and striatum, showing it tunes fronto-striatal circuits even at rest.',
  },
  {
    id: 'wall2022',
    authors: 'Wall MB, Freeman TP, Hindocha C, et al.',
    year: 2022,
    title: 'Individual and combined effects of cannabidiol and Δ9-THC on striato-cortical connectivity in the human brain',
    journal: 'Journal of Psychopharmacology',
    type: 'Human fMRI',
    category: 'imaging',
    url: 'https://doi.org/10.1177/02698811221092506',
    regions: ['striatum', 'pfc'],
    autism: false,
    finding:
      'THC clearly reduced striato-cortical connectivity while CBD on its own produced comparatively few changes — evidence that CBD’s resting-network effects are subtler than often claimed.',
  },

  // ---- Human MRS / connectivity in AUTISM (King's College group) --------
  {
    id: 'pretzschCBD2019',
    authors: 'Pretzsch CM, Freyberg J, Voinescu B, et al.',
    year: 2019,
    title: 'Effects of cannabidiol on brain excitation and inhibition systems: a randomised placebo-controlled single-dose trial during MRS in adults with and without autism spectrum disorder',
    journal: 'Neuropsychopharmacology',
    type: 'RCT (MRS)',
    category: 'imaging',
    url: 'https://doi.org/10.1038/s41386-019-0333-8',
    regions: ['pfc', 'striatum'],
    autism: true,
    finding:
      'A single dose of CBD shifted the glutamate/GABA balance in the basal ganglia and dorsomedial prefrontal cortex — but prefrontal GABA responded differently in autistic adults, dropping where it did not in controls.',
  },
  {
    id: 'pretzschCBDV2019',
    authors: 'Pretzsch CM, Voinescu B, Lythgoe D, et al.',
    year: 2019,
    title: 'Effects of cannabidivarin (CBDV) on brain excitation and inhibition systems in adults with and without autism spectrum disorder: a single-dose trial during MRS',
    journal: 'Translational Psychiatry',
    type: 'RCT (MRS)',
    category: 'imaging',
    url: 'https://doi.org/10.1038/s41398-019-0654-8',
    regions: ['striatum', 'pfc'],
    autism: true,
    finding:
      'The related cannabinoid CBDV raised glutamate (Glx) in the basal ganglia of both groups, but only in autistic adults did the size of that shift depend on each person’s baseline glutamate level.',
  },
  {
    id: 'pretzschCBDV2021',
    authors: 'Pretzsch CM, Floris DL, Schäfer T, et al.',
    year: 2021,
    title: 'Modulation of striatal functional connectivity differences in adults with and without autism spectrum disorder in a single-dose randomized trial of cannabidivarin',
    journal: 'Molecular Autism',
    type: 'RCT (fMRI)',
    category: 'imaging',
    url: 'https://doi.org/10.1186/s13229-021-00454-6',
    regions: ['striatum', 'nac'],
    autism: true,
    finding:
      'CBDV shifted the atypical functional connectivity of the striatum (caudate, putamen and nucleus accumbens) in autistic adults toward the pattern seen in non-autistic controls.',
  },

  // ---- Preclinical mechanism -------------------------------------------
  {
    id: 'campos2012',
    authors: 'Campos AC, Moreira FA, Gomes FV, Del Bel EA, Guimarães FS',
    year: 2012,
    title: 'Multiple mechanisms involved in the large-spectrum therapeutic potential of cannabidiol in psychiatric disorders',
    journal: 'Philosophical Transactions of the Royal Society B',
    type: 'Mechanism review',
    category: 'review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23108553/',
    regions: ['pag', 'bnst', 'pfc', 'drn', 'hippocampus'],
    autism: false,
    finding:
      'Acute anxiolytic/antidepressant effects rely on 5-HT1A signalling in defensive regions (dorsal periaqueductal grey, bed nucleus of the stria terminalis, medial prefrontal cortex), while repeated effects and hippocampal neurogenesis depend on boosted anandamide.',
  },
  {
    id: 'sartim2016',
    authors: 'Sartim AG, Guimarães FS, Joca SRL',
    year: 2016,
    title: 'Antidepressant-like effect of cannabidiol injection into the ventral medial prefrontal cortex — possible involvement of 5-HT1A and CB1 receptors',
    journal: 'Behavioural Brain Research',
    type: 'Preclinical (rat)',
    category: 'preclinical',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26801828/',
    regions: ['pfc'],
    autism: false,
    finding:
      'Injecting CBD directly into the rodent ventromedial prefrontal cortex produced antidepressant-like effects that depended on local 5-HT1A and CB1 receptors.',
  },
  {
    id: 'stern2017',
    authors: 'Stern CAJ, da Silva TR, Raymundi AM, et al.',
    year: 2017,
    title: 'Cannabidiol disrupts the consolidation of specific and generalized fear memories via dorsal hippocampus CB1 and CB2 receptors',
    journal: 'Neuropharmacology',
    type: 'Preclinical (rat)',
    category: 'preclinical',
    url: 'https://doi.org/10.1016/j.neuropharm.2017.07.024',
    regions: ['hippocampus'],
    autism: false,
    finding:
      'Acting on CB1 and CB2 receptors in the dorsal hippocampus, CBD blocked the consolidation of fear memories and limited how much they generalised.',
  },
  {
    id: 'zamberletti2019',
    authors: 'Zamberletti E, Gabaglio M, Woolley-Roberts M, et al.',
    year: 2019,
    title: 'Cannabidivarin treatment ameliorates autism-like behaviors and restores hippocampal endocannabinoid system and glia alterations induced by prenatal valproic acid exposure in rats',
    journal: 'Frontiers in Cellular Neuroscience',
    type: 'Preclinical (rat)',
    category: 'preclinical',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6696797/',
    regions: ['hippocampus'],
    autism: true,
    finding:
      'In the valproate rat model of autism, CBDV reduced autism-like behaviours and reversed hippocampal endocannabinoid changes and microglial (glial) activation.',
  },

  // ---- Reviews (mechanism / clinical overview) --------------------------
  {
    id: 'batalla2021',
    authors: 'Batalla A, Bos J, Postma A, Bossong MG',
    year: 2021,
    title: 'The impact of cannabidiol on human brain function: a systematic review',
    journal: 'Frontiers in Pharmacology',
    type: 'Systematic review',
    category: 'review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33551817/',
    regions: ['pfc', 'acc', 'amygdala', 'striatum', 'hippocampus', 'insula', 'midbrain'],
    autism: false,
    finding:
      'Pooling human neuroimaging studies, CBD most consistently modulates the striatum, prefrontal cortex, hippocampus and limbic regions (amygdala, cingulate, insula) during emotional and salience tasks.',
  },
  {
    id: 'blessing2015',
    authors: 'Blessing EM, Steenkamp MM, Manzanares J, Marmar CR',
    year: 2015,
    title: 'Cannabidiol as a potential treatment for anxiety disorders',
    journal: 'Neurotherapeutics',
    type: 'Review',
    category: 'review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26341731/',
    regions: ['amygdala', 'pfc', 'hippocampus', 'drn'],
    autism: false,
    finding:
      'This widely cited review concludes CBD is anxiolytic across paradigms, acting largely through 5-HT1A receptors and effects on limbic/paralimbic circuitry (amygdala, prefrontal cortex, hippocampus).',
  },
  {
    id: 'melas2021',
    authors: 'Melas PA, Scherma M, Fratta W, Cifani C, Fadda P',
    year: 2021,
    title: 'Cannabidiol as a potential treatment for anxiety and mood disorders: molecular targets and epigenetic insights from preclinical research',
    journal: 'International Journal of Molecular Sciences',
    type: 'Mechanism review',
    category: 'review',
    url: 'https://doi.org/10.3390/ijms22041863',
    regions: ['drn', 'hippocampus', 'pfc'],
    autism: false,
    finding:
      'Summarises CBD’s polypharmacology — facilitating anandamide signalling (FAAH inhibition) and acting on 5-HT1A, TRPV1/2 and CB1 receptors — plus emerging epigenetic effects (DNA methylation, histone marks, miRNA).',
  },
  {
    id: 'garciagutierrez2020',
    authors: 'García-Gutiérrez MS, Navarrete F, Gasparyan A, et al.',
    year: 2020,
    title: 'Cannabidiol: a potential new alternative for the treatment of anxiety, depression, and psychotic disorders',
    journal: 'Biomolecules',
    type: 'Review',
    category: 'review',
    url: 'https://doi.org/10.3390/biom10111575',
    regions: ['amygdala', 'pfc', 'hippocampus', 'drn'],
    autism: false,
    finding:
      'Reviews CBD’s anxiolytic, antidepressant and antipsychotic effects in animals and humans, attributing them to CB1/CB2 and 5-HT1A receptors and to neurogenesis-related pathways.',
  },

  // ---- Clinical trials: epilepsy (the FDA-approved use) -----------------
  {
    id: 'devinsky2017',
    authors: 'Devinsky O, Cross JH, Laux L, et al.',
    year: 2017,
    title: 'Trial of cannabidiol for drug-resistant seizures in the Dravet syndrome',
    journal: 'New England Journal of Medicine',
    type: 'RCT (phase 3)',
    category: 'clinical',
    url: 'https://doi.org/10.1056/NEJMoa1611618',
    regions: [],
    autism: false,
    finding:
      'This landmark placebo-controlled trial roughly halved monthly convulsive seizures in Dravet syndrome, helping lead to the first FDA approval of a cannabis-derived medicine (Epidiolex).',
  },
  {
    id: 'devinsky2018',
    authors: 'Devinsky O, Patel AD, Cross JH, et al. (GWPCARE3)',
    year: 2018,
    title: 'Effect of cannabidiol on drop seizures in the Lennox-Gastaut syndrome',
    journal: 'New England Journal of Medicine',
    type: 'RCT (phase 3)',
    category: 'clinical',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29768152/',
    regions: [],
    autism: false,
    finding:
      'Add-on CBD cut drop-seizure frequency by about 42% (20 mg/kg/day) versus roughly 17% for placebo in Lennox-Gastaut syndrome.',
  },
  {
    id: 'thiele2018',
    authors: 'Thiele EA, Marsh ED, French JA, et al. (GWPCARE4)',
    year: 2018,
    title: 'Cannabidiol in patients with seizures associated with Lennox-Gastaut syndrome: a randomised, double-blind, placebo-controlled phase 3 trial',
    journal: 'The Lancet',
    type: 'RCT (phase 3)',
    category: 'clinical',
    url: 'https://doi.org/10.1016/S0140-6736(18)30136-3',
    regions: [],
    autism: false,
    finding:
      'A second phase-3 Lennox-Gastaut trial found add-on CBD reduced drop seizures by about 44% versus roughly 22% for placebo.',
  },
  {
    id: 'chen2019',
    authors: 'Chen JW, Borgelt LM, Blackmer AB',
    year: 2019,
    title: 'Cannabidiol: a new hope for patients with Dravet or Lennox-Gastaut syndromes',
    journal: 'Annals of Pharmacotherapy',
    type: 'Clinical review',
    category: 'review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30616356/',
    regions: [],
    autism: false,
    finding:
      'Reviewing the GWPCARE trial series, CBD reduced key seizure types by roughly 17–23% over placebo and was well tolerated, via a proposed multimodal (non-CB1) antiseizure mechanism.',
  },
  {
    id: 'szaflarski2022',
    authors: 'Szaflarski JP, Devinsky O, Lopez M, et al.',
    year: 2022,
    title: 'Long-term efficacy and safety of cannabidiol in patients with treatment-resistant epilepsies: four-year results from the expanded access program',
    journal: 'Epilepsia',
    type: 'Open-label (long-term)',
    category: 'clinical',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36537757/',
    regions: [],
    autism: false,
    finding:
      'Four-year expanded-access data showed seizure reductions were durable across mixed treatment-resistant epilepsies, with a stable and manageable safety profile.',
  },

  // ---- Clinical / cohort: AUTISM ---------------------------------------
  {
    id: 'aran2019',
    authors: 'Aran A, Cassuto H, Lubotzky A, Wattad N, Hazan E',
    year: 2019,
    title: 'Brief report: cannabidiol-rich cannabis in children with autism spectrum disorder and severe behavioral problems — a retrospective feasibility study',
    journal: 'Journal of Autism and Developmental Disorders',
    type: 'Retrospective cohort',
    category: 'clinical',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30382443/',
    regions: [],
    autism: true,
    finding:
      'In 60 children with ASD and severe behavioural problems, CBD-rich cannabis was tolerable and behavioural outbursts improved in roughly 61% — early feasibility evidence that motivated controlled trials.',
  },
  {
    id: 'aran2021',
    authors: 'Aran A, Harel M, Cassuto H, et al.',
    year: 2021,
    title: 'Cannabinoid treatment for autism: a proof-of-concept randomized trial',
    journal: 'Molecular Autism',
    type: 'RCT (crossover)',
    category: 'clinical',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33536055/',
    regions: [],
    autism: true,
    finding:
      'A double-blind crossover trial of whole-plant CBD-rich extract in children with ASD found modest, mixed benefits on disruptive behaviour and social responsiveness, with a notably large placebo response.',
  },
  {
    id: 'barchel2019',
    authors: 'Barchel D, Stolar O, De-Haan T, et al.',
    year: 2019,
    title: 'Oral cannabidiol use in children with autism spectrum disorder to treat related symptoms and co-morbidities',
    journal: 'Frontiers in Pharmacology',
    type: 'Cohort study',
    category: 'clinical',
    url: 'https://doi.org/10.3389/fphar.2018.01521',
    regions: [],
    autism: true,
    finding:
      'In an ASD cohort, oral CBD was associated with improvements in hyperactivity, sleep and anxiety, with self-injury and rage attacks among the most improved symptoms.',
  },
  {
    id: 'poleg2019',
    authors: 'Poleg S, Golubchik P, Offen D, Weizman A',
    year: 2019,
    title: 'Cannabidiol as a suggested candidate for treatment of autism spectrum disorder',
    journal: 'Progress in Neuro-Psychopharmacology & Biological Psychiatry',
    type: 'Review',
    category: 'review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30171992/',
    regions: [],
    autism: true,
    finding:
      'Argues CBD is a rational ASD candidate, linking its 5-HT1A, endocannabinoid and anti-inflammatory actions to autism’s serotonergic, endocannabinoid-tone and excitation/inhibition abnormalities.',
  },
  {
    id: 'holdman2022',
    authors: 'Holdman R, Vigil D, Robinson K, Shah P, Contreras AE',
    year: 2022,
    title: 'Safety and efficacy of medical cannabis in autism spectrum disorder compared with commonly used medications',
    journal: 'Cannabis and Cannabinoid Research',
    type: 'Registry cohort',
    category: 'clinical',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34432543/',
    regions: [],
    autism: true,
    finding:
      'A registry comparison suggested CBD-containing medical cannabis had a comparatively favourable side-effect profile relative to several standard psychiatric medications used in ASD.',
  },
  {
    id: 'silva2024',
    authors: 'da Silva Junior EA, Medeiros WMB, dos Santos JPM, et al.',
    year: 2024,
    title: 'Evaluation of the efficacy and safety of cannabidiol-rich cannabis extract in children with autism spectrum disorder: randomized, double-blind, placebo-controlled clinical trial',
    journal: 'Trends in Psychiatry and Psychotherapy',
    type: 'RCT',
    category: 'clinical',
    url: 'https://doi.org/10.47626/2237-6089-2021-0396',
    regions: [],
    autism: true,
    finding:
      'In 60 children over 12 weeks, a CBD-rich extract improved several behavioural measures versus placebo without serious adverse events.',
  },
]

// Convenience lookup
export const SOURCE_BY_ID = Object.fromEntries(SOURCES.map((s) => [s.id, s]))
