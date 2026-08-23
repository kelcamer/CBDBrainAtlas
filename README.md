# CBD Brain Atlas

An interactive React app that maps the **brain regions cannabidiol (CBD) affects**, with a dedicated
**autism-research view**. It's built from **32 peer-reviewed sources** (PubMed, JAMA, NEJM, The Lancet,
Nature, Frontiers) — every citation links to its primary source.

## What's inside

- **Interactive brain map** — a schematic sagittal brain with clickable regions (prefrontal cortex, anterior
  cingulate, insula, amygdala, hippocampus, striatum, nucleus accumbens, midbrain, periaqueductal grey,
  dorsal raphe, BNST). Selecting a region shows what CBD does there, the mechanism, and the studies behind it.
- **Autism-research view** — a toggle that dims regions without autism-specific evidence, highlights the four
  regions that *do* have it (prefrontal cortex, hippocampus, striatum, nucleus accumbens), and filters the
  source library + live scan to ASD studies. The autism evidence centres on the Aran RCTs and the King's
  College London CBD/CBDV neuroimaging work (Pretzsch/McAlonan), plus a valproate-model preclinical study.
- **Source library** — all 32 papers, searchable and filterable by study type and brain region.
- **Molecular targets** — CBD's receptor-level polypharmacology (5-HT1A, FAAH/anandamide, CB1/CB2, TRPV1/2,
  GPR55, adenosine, PPARγ).
- **Live PubMed scan** — query NCBI E-utilities from the browser for the newest papers, beyond the curated set.

## Run it

Requires **Node.js 18+** (check with `node -v`).

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173). It should open automatically.

To make a production build:

```bash
npm run build      # outputs to dist/
npm run preview    # serves the built app locally
```

## Project structure

```
src/
  App.jsx                 app shell, header, tabs, state
  styles.css              theme + layout
  data/
    sources.js            the 32 curated papers (id, link, region tags, findings)
    regions.js            11 brain regions (content + SVG geometry)
    receptors.js          CBD's molecular targets
  lib/
    pubmed.js             client-side PubMed E-utilities helper
  components/
    BrainMap.jsx          interactive SVG sagittal brain
    RegionPanel.jsx       selected-region detail
    SourceList.jsx        filterable source library
    ReceptorPanel.jsx     molecular-targets grid
    LiveScan.jsx          live PubMed search
```

## Notes on the data

- Region positions are a **simplified schematic** for orientation, not surgical accuracy. The insula is drawn
  on the medial surface for visibility even though it's buried in the lateral sulcus.
- Epilepsy trials (Dravet / Lennox-Gastaut) are the FDA-approved use of purified CBD (Epidiolex) but don't
  localise to a single region, so they appear in the source library rather than as map nodes.
- Findings are paraphrased; **follow each link** for the original.
- The live PubMed scan hits `eutils.ncbi.nlm.nih.gov` directly. If a network or ad-blocker blocks it, that
  panel fails gracefully — the curated library still works fully offline.

**Educational summary of published research — not medical advice.** CBD interacts with several medications
(including some anti-seizure drugs) and is not risk-free. Consult a clinician for personal decisions.
