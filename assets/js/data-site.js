/* ============================================================
   SITE CONTENT
   Everything here is plain data. Edit the text, reload the page.
   ============================================================ */

window.SITE = {
  labName: 'Beane Lab',
  piName: 'Jennifer Beane, PhD',
  piTitle: 'Associate Professor of Medicine',
  affil1: 'Section of Computational Biomedicine, Boston University Chobanian &amp; Avedisian School of Medicine',
  affil2: 'Bioinformatics Program, Faculty of Computing &amp; Data Sciences, Boston University',
  email: 'jbeane@bu.edu',
  orcid: 'https://orcid.org/0000-0002-6699-2132',
  pubmed: 'https://www.ncbi.nlm.nih.gov/myncbi/jennifer.beane.1/bibliography/public/',
  scholar: '', // add a Google Scholar URL if you want the link to appear
  github: '',  // add a lab GitHub org URL if you want the link to appear

  tagline: 'Intercepting Lung Cancer',
  heroLede:
    'We study the <em>airway field of injury</em>: the molecular and cellular changes that carcinogen exposure causes across the cells lining the respiratory tract. By studying this field, we aim to understand the earliest events that precede lung cancer. We also translate these findings into biomarkers for early detection and for predicting disease progression.',

  // (Removed: a hero stats strip. The numbers all came from the bronchial
  // premalignancy cohort, which isn't representative of the lab as a whole.)
};

/* ---------------- RESEARCH THREADS ---------------- */

window.RESEARCH = [
  {
    id: 'field',
    num: '01',
    title: 'The airway field of injury',
    kicker: 'Smoking and what changes upon cessation',
    lede: 'Carcinogen exposure does not damage one spot. It reprograms the entire respiratory epithelium and that reprogramming is measurable in cytologically normal cells far from any tumor.',
    body: [
      'We showed that smoking reorganizes the bronchial transcriptome, and then sorted those changes by what happens after people quit: most revert within weeks, a handful revert slowly, and a few genes never return at all. The genes that persist are overwhelmingly ones that are switched <em>off</em>, which is a different kind of damage than the ones that bounce back.',
      'The same field also carries a cancer-specific signal. In smokers undergoing bronchoscopy for a suspicious finding, normal-appearing airway cells can distinguish those who have lung cancer from those who do not — the basis of a gene expression-based biomarker that was patented, commercialized, and used to rule out cancer after a non-diagnostic bronchoscopy.',
      'More recently we have shown that parts of this field signal are altered in the nasal epithelium of people with lung cancer who never smoked.'
    ],
    anchors: ['Spira 2004 PNAS', 'Beane 2007 Genome Biology', 'Spira 2007 Nature Medicine', 'Duclos 2019 Science Advances', 'Lee 2026 Lung Cancer'],
    tag: 'field'
  },
  {
    id: 'pml',
    num: '02',
    title: 'Bronchial (lung squamous) premalignant lesions',
    kicker: 'Why some lesions progress and others disappear',
    lede: 'This is the lab\'s central line. Patients in high-risk surveillance programs are bronchoscoped roughly once a year, and we biopsy the same suspicious sites over time — so we know, for each lesion, whether it went on to progress or regress.',
    body: [
      'Molecular profiling of those biopsies produced four molecular subtypes of premalignant lesion. One of them — <strong>Proliferative</strong> — carries almost all of the dysplasia, runs hot on cell cycle and oxidative phosphorylation, and maps onto the classical subtype of invasive squamous cancer.',
      'Within the Proliferative lesions, the thing that separates the ones that regress from the ones that progress is immune: a gene program of interferon signaling and antigen processing we call <strong>Module 9</strong>. Regressing lesions keep it. Progressing lesions lose it, along with their CD8 T cells.',
      'We have since traced that loss to a mechanism. An epithelial microRNA, hsa-miR-149-5p, is upregulated in progressing lesions and suppresses NLRC5 — the master regulator of MHC class I. Knock NLRC5 down and premalignant cells stop presenting antigen and stop being killed. Spatially, the basal cells that retain NLRC5 are the ones sitting closest to CD8 T cells.'
    ],
    anchors: ['Beane 2017 Clinical Cancer Research', 'Beane 2019 Nature Communications', 'Maoz 2021 JITC', 'Ning 2023 JECCR', 'Ning 2026 Cancer Immunology Research'],
    tag: 'pml'
  },
  {
    id: 'luad',
    num: '03',
    title: 'Lung adenocarcinoma premalignant lesions and aggressive early disease',
    kicker: 'Which lung adenocarcinoma premalignant lesion and small tumors actually need treating',
    lede: 'Adenocarcinoma precursors and small tumors sit deep in the periphery of the lung and are detected by CT screening, but it is unclear which ones are aggressive.',
    body: [
      'Rather than force lung adenocarcinoma premalignant lesions into histologic bins, we described them as a continuous molecular space anchored by four <em>archetypes</em> (normal-like, inflammation, cell adhesion, and proliferation).',
      'We found that a lesion\'s position in this space is largely independent of its histology. Lesions closest to the proliferation archetype are associated with EGFR driver mutations, fewer NK T cells, mutational heterogeneity comparable to invasive tumors, and a predicted lack of benefit from immunotherapy; in two independent cohorts, stage I tumors near this archetype had a roughly four-fold higher hazard of recurrence or death.',
      'On the clinical side, a nodule found on CT raises two questions: is it cancer, and if so, how aggressive is it? We are developing minimally invasive biomarkers to answer both, combining CT imaging with molecular profiling of the nasal and bronchial epithelium to distinguish malignant from benign nodules. For small adenocarcinomas, aggressiveness determines how extensive the surgery needs to be.',
      'Vascular invasion, the mode of tumor spread most strongly associated with recurrence, is typically identified only after resection. We found that its transcriptional program can be measured in pre-surgical biopsies, before the extent of the operation has been decided.'
    ],
    anchors: ['Burks 2021 CTRC', 'Steiner 2024 Cancer Biomarkers', 'Anderson 2026 Molecular Cancer Research', 'Steiner 2026 Nature Communications'],
    tag: 'luad'
  },
  {
    id: 'ai',
    num: '04',
    title: 'Computational pathology and multimodal AI',
    kicker: 'Teaching models to read a slide the way a biologist would',
    lede: 'Pathology slides capture a rich record of disease phenotype, from tissue architecture to the cells that populate it. We integrate whole-slide images with omic data to improve predictions of disease state and outcome, and to learn the histopathologic features that underlie the molecular changes we measure.',
    body: [
      'With the Kolachalama lab we have built a lineage of architectures for gigapixel whole-slide images: a graph-transformer with interpretable class-specific heatmaps, a lighter Perceiver-based network, an attention-free Fourier approach, and fusion models that combine slides with gene expression.',
      'Applied to premalignancy, these models do something a pathologist cannot: they separate carcinoma in situ lesions by what happened to them next. And the latest multimodal framework grades dysplasia using slides and expression together — while still producing a prediction when only one of the two is available, which is what real clinical samples look like.',
      'Training with both modalities also improves single-modality inference, suggesting the models learn something about morphology from expression that they cannot learn from pixels alone.'
    ],
    anchors: ['Zheng 2022 IEEE TMI', 'Gindra 2024 American Journal of Pathology', 'Zheng 2024 IEEE TMI', 'Xu 2026 Genome Medicine'],
    tag: 'ai'
  },
  {
    id: 'trials',
    num: '05',
    title: 'Interception trials and surrogate endpoints',
    kicker: 'Making prevention trials small enough to run',
    lede: 'A prevention trial powered on cancer incidence needs tens of thousands of people and a decade. A way forward, is a molecular endpoint that moves in months, in a sample that can be collected relatively non-invasively.',
    body: [
      'We use our molecular signatures as the endpoints. Across trials of myo-inositol, aspirin, zileuton, sulforaphane, and the CIMAvax-EGF vaccine, we have measured whether candidate agents favorably shift previously derived signatures of smoking, dysplasia, COPD, and lung cancer.',
      'Dr. Beane co-authored the American Thoracic Society research statement that set the field\'s agenda for interception, including its call to redefine the histologic spectrum using machine learning on molecular, imaging, and clinical data.'
    ],
    anchors: ['Lam 2016 Cancer Prevention Research', 'Garland 2019 Cancer Prevention Research', 'Garland 2022 Cancers', 'Moghaddam 2024 AJRCCM'],
    tag: 'trials'
  }
];

/* ---------------- COLLABORATORS ---------------- */
/* Each gets a colour used consistently across the collaboration map,
   the filter chips, and the project cards.                          */

/* Order here sets both the map position (top to bottom) and the chip order.
   `url` is the collaborator's own lab page — shown as a link on each project. */

window.COLLABORATORS = [
  { id: 'beane', short: 'Beane', name: 'Jennifer Beane', center: true, url: '' },

  { id: 'campbell',     short: 'Campbell',     name: 'Joshua Campbell',
    url: 'https://www.camplab.net' },

  { id: 'billatos',     short: 'Billatos',     name: 'Ehab Billatos',
    url: 'https://www.bumc.bu.edu/compbiomed/people/faculty/ehab-billatos-m-d/' },

  { id: 'spira',        short: 'Spira',        name: 'Avrum Spira',
    lab: 'Spira\u2013Lenburg Lab',
    url: 'https://www.bumc.bu.edu/compbiomed/labs/spira-lenburg/' },

  { id: 'kolachalama',  short: 'Kolachalama',  name: 'Vijaya Kolachalama',
    url: 'https://vkola-lab.github.io' },

  { id: 'mazzilli',     short: 'Mazzilli',     name: 'Sarah Mazzilli',
    url: 'https://sites-staging.bu.edu/mazzillilab/' },

  { id: 'burks',        short: 'Burks',        name: 'Eric Burks',
    url: 'https://www.bumc.bu.edu/camed/profile/eric-burks/' },

  { id: 'lenburg',      short: 'Lenburg',      name: 'Marc Lenburg',
    lab: 'Spira\u2013Lenburg Lab',
    url: 'https://www.bumc.bu.edu/compbiomed/labs/spira-lenburg/' },

  { id: 'varelas',      short: 'Varelas',      name: 'Xaralabos (Bob) Varelas',
    url: 'https://www.bumc.bu.edu/biochemcellbio/varelaslab/' }
];

/* ---------------- SHARED PROJECTS ---------------- */
/* `with`     — collaborator ids, excluding Beane (always implied)
   `mapLabel` — short label used inside the map; `title` is too long there */

window.PROJECTS = [
  {
    id: 'lpca',
    mapLabel: 'Lung Pre-Cancer Atlas',
    title: 'The Lung Pre-Cancer Atlas',
    sub: 'Human Tumor Atlas Network',
    with: ['campbell', 'mazzilli', 'billatos', 'burks', 'spira'],
    status: 'Active',
    lede: 'A high-resolution genetic, molecular, and cellular atlas of premalignant lung lesions and the tissue around them. Patients in high-risk surveillance programs are bronchoscoped roughly once a year and the same suspicious sites are biopsied over time, so for each lesion we know whether it went on to progress or regress.',
    funding: [
      'U2C CA233238 \u2014 NCI Human Tumor Atlas Network, Lung Pre-Cancer Atlas',
      'Janssen Pre-Cancer Genome Atlas 2.0 ($8.7M)',
      'Johnson &amp; Johnson PCGA Cohort Registry ($7.97M)'
    ],
    data: ['GSE109743', 'GSE313146', 'dbGaP phs003185.v1.p1', 'humantumoratlas.org'],
    papers: ['31015447', '31844660', '34580161', '41670462', '42089783'],
    why: 'Building the atlas requires lesions sampled, stained, and spatially profiled at the bench; single-cell and gene-program methods able to resolve bulk measurements into cell types and states; pathology review of every specimen; and clinical access to the surveillance programs the lesions come from. No single lab covers that span.'
  },
  {
    id: 'ai',
    mapLabel: 'Multimodal AI models',
    title: 'Multimodal AI Models',
    sub: 'Computational pathology and data fusion',
    with: ['kolachalama'],
    status: 'Active',
    lede: 'Pathology slides capture a rich record of disease phenotype, from tissue architecture to the cells that populate it. We integrate whole-slide images with omic data to improve predictions of disease state and outcome, and to learn the histopathologic features that underlie the molecular changes we measure.',
    funding: [
      'R21 CA253498 \u2014 PRISTINE',
      'Hariri Institute Focused Research Project, "Pre-Cancer AutoHist"'
    ],
    data: ['GSE320381', 'github.com/vkola-lab'],
    papers: ['35594209', '38588853', '38587959', '41952176', '41472916'],
    why: 'Applied to premalignancy, these models can separate carcinoma in situ lesions by what happened to them next, and can grade dysplasia from slides and gene expression together while still producing a prediction when only one of the two is available. That takes architecture development on one side and lesion cohorts with known outcomes on the other.'
  },
  {
    id: 'earlydetect',
    mapLabel: 'Early detection biomarkers',
    title: 'Early detection lung cancer biomarkers',
    sub: 'NCI Early Detection Research Network',
    with: ['lenburg', 'billatos', 'spira'],
    status: 'Active',
    lede: 'A nodule found on CT raises two questions: is it cancer, and if so, how aggressive is it? We are developing minimally invasive biomarkers to answer the first, combining CT imaging features with molecular profiling of the nasal and bronchial epithelium and blood-based cell-free DNA methylation, so that patients with intermediate-risk nodules can be assigned to clinically actionable groups.',
    funding: [
      'U2C CA271898 \u2014 EDRN Biomarker Characterization Center ($5.47M)',
      'Janssen \u2014 Detection of Early Lung Cancer Among Military Personnel (DECAMP)'
    ],
    data: ['DECAMP \u2014 GSE300258', 'AEGIS', 'UCLA Incidental Nodule Program'],
    papers: ['42349086', '42379297', '17334370', '19138936', '31451521'],
    why: 'Each modality is developed against one cohort with one set of endpoints, rather than in three separate studies. That takes clinical trial infrastructure and bronchoscopic access, genomic biomarker validation, and the analytics to combine them.'
  },
  {
    id: 'mechanism',
    mapLabel: 'Mechanisms of development',
    title: 'Mechanisms of lung cancer development and progression',
    sub: 'From model systems to the human lesion',
    with: ['varelas', 'mazzilli'],
    status: 'Active',
    lede: 'How epithelial cells are pushed off their normal fate \u2014 Hippo/YAP\u2013TAZ signaling, loss of polarity, basal cell expansion \u2014 and whether those mechanisms are operating in human premalignant lesions. The same work has begun to explain how progressing lesions lose antigen presentation and go unseen by the immune system.',
    funding: [
      'Department of Defense Idea Development Award \u2014 immune evasion in progressive premalignant lesions',
      'U2C CA233238 \u2014 Lung Pre-Cancer Atlas'
    ],
    data: ['GSE109743', 'GSE114489', 'GSE131391'],
    papers: ['33903236', '34260916', '37150829', '41670462', '36443313'],
    why: 'A signature derived from a mouse, an organoid, or a perturbed cell line only becomes a claim about human disease once it has been tested against a longitudinal cohort with known outcomes, and localized in real tissue. Each of those steps lives in a different lab.'
  },
  {
    id: 'aggressive',
    mapLabel: 'Aggressive early LUAD',
    title: 'Indolent versus aggressive early-stage adenocarcinoma',
    sub: 'Deciding how much surgery a small tumor needs',
    with: ['lenburg', 'burks'],
    status: 'Active',
    lede: 'For small adenocarcinomas, aggressiveness determines how extensive the surgery needs to be. Vascular invasion, the mode of tumor spread most strongly associated with recurrence, is typically identified only after resection. We found that its transcriptional program can be measured in pre-surgical biopsies, before the extent of the operation has been decided.',
    funding: ['R01 CA275015 \u2014 integrating imaging and biopsy markers of indolent versus aggressive early lung adenocarcinoma'],
    data: ['GSE319666', 'dbGaP phs002371', 'github.com/kelley27/PML_Archetypes'],
    papers: ['34794107', '39058440', '41876493', '42089783'],
    why: 'The premalignant work and the aggressive-tumor work are the same question asked at two ends of one timeline: lesions closest to the proliferation archetype are the ones whose descendants carry vascular invasion. Getting there depends on pathology review that separates low malignant potential from vascular invasion, and on markers that can predict it before the operation.'
  }
];

/* ---------------- NEWS ----------------
   Newest first. Date format: YYYY-MM-DD                 */

window.NEWS = [
  {
    d: '2026-10-15', tag: 'Event',
    t: 'Lab members presenting at Evans Days 2026',
    b: 'Students from the lab will present their work at the annual Department of Medicine Evans Days, October 15&ndash;16, 2026 &mdash; two days of oral presentations, basic science and clinical poster sessions, and visiting professor lectures from across the department. This year\'s visiting professors are Benjamin L. Ebert of Dana-Farber and Rochelle Walensky. <!-- Add presenter names and poster/talk titles here once the program is out. -->',
    link: 'https://www.bumc.bu.edu/medicine/research/evans-dept-of-medicine-research-days/'
  },
  {
    d: '2026-05-01', tag: 'Award',
    t: 'Joining the ALS-AIM Consortium for the Longitude Prize on ALS',
    b: 'The lab is excited to be taking part in the ALS-AIM Consortium, under the direction of Dr. Vijaya Kolachalama, selected in May 2026 for the Longitude Prize on ALS. The &pound;7.5 million prize &ldquo;incentivises the use of AI-based approaches to transform drug discovery for amyotrophic lateral sclerosis.&rdquo; Twenty teams were selected for the first stage, which runs through January 2027.',
    link: 'https://als.longitudeprize.org'
  },
  {
    d: '2026-04-10', tag: 'Event',
    t: 'Hosting the 2026 MedAI Hackathon',
    b: 'With Vijaya Kolachalama, the lab hosted the <a href="https://medaihack.org" target="_blank" rel="noopener">MedAI Hackathon</a> on April 10&ndash;11, 2026: 233 students across 30 teams, competing for $10,000 in prizes. Teams came from Computing &amp; Data Sciences, the Chobanian &amp; Avedisian School of Medicine, Questrom, and programs in public health, engineering, dentistry, and arts and sciences, and took on three genuine clinical problems &mdash; early lung cancer detection from pathology images, Alzheimer\'s disease marker quantification from brain scans, and kidney injury prediction from blood-based molecular data. The weekend ran close to 10,000 compute jobs across more than 40 GPUs. The aim, as the organizers put it, was to &ldquo;build an intensive, fun, educational, and impactful experience where multidisciplinary teams could tackle genuine clinical problems.&rdquo;',
    link: 'https://www.bu.edu/cds-faculty/2026/04/28/2026-medai-hackathon/'
  },
  {
    d: '2026-04-08', tag: 'Paper',
    t: 'Multimodal deep learning grades premalignant lesions — even with a missing modality',
    b: 'Lingyi Xu\'s paper in <em>Genome Medicine</em> describes a transformer framework that combines whole-slide images with bulk gene expression to classify bronchial dysplasia, reaching an external AUROC of 0.954 with both modalities and still producing a prediction when only one is available. Work with the Kolachalama lab.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41952176/'
  },
  {
    d: '2026-04-02', tag: 'Paper',
    t: 'An epithelial microRNA explains how premalignant lesions escape the immune system',
    b: 'Boting Ning\'s paper in <em>Cancer Immunology Research</em> traces immune evasion in progressing bronchial lesions to hsa-miR-149-5p suppressing NLRC5, and shows that basal cells retaining NLRC5 sit closest to CD8 T cells in tissue.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41670462/'
  },
  {
    d: '2026-03-24', tag: 'Paper',
    t: 'Vascular invasion can be read from a biopsy taken before surgery',
    b: 'Dylan Steiner\'s paper in <em>Nature Communications</em>, with Marc Lenburg, reports a 48-gene signature that detects vascular invasion in pre-surgical biopsies of stage I lung adenocarcinoma at AUROC 0.90 — at the moment the extent of resection is still a decision.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41876493/'
  },
  {
    d: '2026-09-02', tag: 'Paper',
    t: 'Adenocarcinoma precursors mapped as a continuous archetype space',
    b: 'Kelley Anderson\'s paper in <em>Molecular Cancer Research</em> shows that lung adenocarcinoma premalignant lesions occupy a four-archetype space largely independent of histology, and that proximity to the proliferation archetype predicts four-fold worse stage I disease-free survival across five cohorts.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/42089783/'
  },
  {
    d: '2026-08-01', tag: 'Paper',
    t: 'The cancer field of injury is not specific to smoking',
    b: 'Minyi Lee\'s paper in <em>Lung Cancer</em> finds the same nasal interferon and antigen-presentation suppression in people with lung cancer who have never smoked — with substantial overlap with Module 9 from the bronchial premalignancy work.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/42349086/'
  },
  {
    d: '2025-09-01', tag: 'Award',
    t: 'Hariri Institute Focused Research Program on aggressive early-stage lung adenocarcinoma',
    b: 'With Vijaya Kolachalama, the lab was awarded a Rafik B. Hariri Institute Focused Research Program, "AI-driven Accurate Detection Strategies for Aggressive Early-stage Lung Adenocarcinoma." The program builds a curated collection of pre-surgical biopsies and resection tissue with whole-slide images and transcriptomic profiling, trains multimodal models to predict microscopic vascular invasion from a pre-surgical biopsy, and identifies the cellular neighborhoods and gene expression patterns behind those predictions.',
    link: 'https://www.bu.edu/hic/programs/focused-research-programs/frp-program-pages/ai-driven-accurate-detection-strategies-for-aggressive-early-stage-lung-adenocarcinoma/'
  },
  {
    d: '2024-09-01', tag: 'Field',
    t: 'ATS research statement on lung cancer interception published',
    b: 'Dr. Beane served on the project committee for the official American Thoracic Society research statement setting the field\'s agenda for intercepting non-small cell lung cancer, including its call to redefine the histologic spectrum using machine learning.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/39115548/'
  },
  {
    d: '2024-07-01', tag: 'Award',
    t: 'Hariri Institute Focused Research Project Award',
    b: 'The lab received a Rafik B. Hariri Institute for Computing and Computational Science and Engineering Focused Research Project Award for "Pre-Cancer AutoHist."'
  }
];

/* ---------------- TEAM ----------------
   PLACEHOLDER ROSTER — names drawn from recent first-authorships.
   Replace roles, add photos (assets/img/<file>), and remove anyone
   who has moved on.                                                 */

window.TEAM = {
  pi: {
    name: 'Jennifer Beane, PhD',
    role: 'Principal Investigator',
    title: 'Associate Professor of Medicine, Section of Computational Biomedicine',
    title2: 'Associate Professor, Bioinformatics Program, Faculty of Computing &amp; Data Sciences',
    // Currently pointing at the BU department copy. Save a local copy to
    // assets/img/jennifer-beane.jpg and change this to that path.
    img: 'https://www.bumc.bu.edu/compbiomed/files/2023/05/Jen-454x636.jpg',
    bio: 'Jennifer Beane is a computational biologist who studies how lung cancer begins. She trained in engineering at Dartmouth, earned her PhD in bioinformatics at Boston University, and completed a postdoctoral fellowship in the BU Pulmonary Center. Her lab combines genomic data, pathology images, and machine learning to understand how smoking and other exposures change the cells lining the airway. The goal is to use those changes to catch lung cancer early and to identify which premalignant lesions are likely to progress. She enjoys working at the intersection of data science and medicine, and collaborates with clinicians, pathologists, and computational scientists through national efforts such as the NCI Early Detection Research Network and the Human Tumor Atlas Network.'
  },

  /* `joint` is a collaborator id from window.COLLABORATORS — it renders in
     that person's colour and links to their lab. */
  members: [
    { name: 'Rocio Rodriguez Quiroz', role: 'Graduate Student',
      email: 'rrquiroz@bu.edu', joint: 'lenburg' },
    { name: 'Nofal Ouardaoui',        role: 'Graduate Student',
      email: 'naouarda@bu.edu', joint: 'lenburg' },
    { name: 'Oscar Mendoza Andrade',  role: 'Data Analyst',
      email: 'omandrad@bu.edu', joint: 'lenburg' },
    { name: 'Lingyi Xu',              role: 'Graduate Student',
      email: 'lingyixu@bu.edu', joint: 'kolachalama' },
    { name: 'Lingge Yu',              role: 'Data Analyst' }
  ],

  /* Parsed from the Major Mentoring Activities table of the August 2026 CV.
     Includes both lab trainees and thesis-committee mentees — prune as you like.
     `now` is the current position as listed on the CV. */
  alumni: [
    { name: 'John Brothers, PhD',      years: '2011\u20132015', role: 'Graduate Student, Bioinformatics',                 now: 'Director of Bioinformatics, Immuneering Corporation' },
    { name: 'Rebecca Kusko, PhD',      years: '2011\u20132015', role: 'Graduate Student, Bioinformatics',                 now: 'Chief Strategy Officer, Immuneering' },
    { name: 'Kahkeshan Hijazi, PhD',   years: '2012\u20132020', role: 'Graduate Student, then Research Scientist',        now: 'Translational Data Scientist, Novartis Institutes for BioMedical Research' },
    { name: 'Ania Tassinari, PhD',     years: '2012\u20132017', role: 'Graduate Student, then Postdoctoral Fellow',       now: 'Bioinformatics Scientist, Agios Pharmaceuticals' },
    { name: 'Yaron Gesthalter, MD',    years: '2013\u20132017', role: 'Pulmonary and Critical Care Fellow',               now: 'Assistant Professor of Medicine, University of California, San Francisco' },
    { name: 'Grant Duclos, PhD',       years: '2014\u20132018', role: 'Graduate Student, then Postdoctoral Fellow',       now: 'Senior Scientist, Translational Genomics, AstraZeneca' },
    { name: 'Julian Lel, MD',          years: '2016\u20132018', role: 'Pulmonary and Critical Care Fellow',               now: 'Pulmonary Physician, Emerson Physician Hospital Organization' },
    { name: 'Jiarui Zhang, PhD',       years: '2016\u20132020', role: 'Graduate Student, then Postdoctoral Fellow',       now: 'Bioinformatics Scientist, Agios Pharmaceuticals' },
    { name: 'Asaf Maoz, MD',           years: '2017\u20132020', role: 'Internal Medicine Resident',                       now: 'Hematology/Oncology Fellow, Dana-Farber and Massachusetts General Hospital' },
    { name: 'Xingyi Shi, BS',          years: '2017\u20132021', role: 'Graduate Student, Bioinformatics',                 now: 'Oncology Data Scientist, Novartis Institutes for BioMedical Research' },
    { name: 'Carter Merenstein, BA',   years: '2018\u20132020', role: 'Computational Analyst',                            now: 'PhD candidate, University of Pennsylvania' },
    { name: 'Austin Potter, MS',       years: '2019',            role: 'Master of Medical Science Student',                now: 'Clinical Research Assistant, Boston Medical Center' },
    { name: 'Julia Camassola Breda, MS', years: '2019',          role: 'Master of Medical Science Student',                now: 'Research Assistant, Boston Medical Center' },
    { name: 'Fernanda Behzadi, MS',    years: '2019',            role: 'Master of Medical Science Student',                now: 'Member Advocate, Collective Health' },
    { name: 'Christopher Husted, MS',  years: '2019\u20132021', role: 'Computational Analyst',                            now: 'PhD candidate, University of Massachusetts' },
    { name: 'Boting Ning, BA, MPH',    years: '2019\u20132022', role: 'Graduate Student, Bioinformatics',                 now: 'R&amp;D Leadership Development Program Engineer, Janssen Pharmaceuticals' },
    { name: 'Conor Shea, BS',          years: '2019\u20132023', role: 'Graduate Student, Bioinformatics',                 now: 'MD/PhD candidate, Boston University School of Medicine' },
    { name: 'William Mischler, MS',    years: '2020\u20132021', role: 'Computational Analyst',                            now: 'Analyst, CTI' },
    { name: 'Jing Yu, BS',             years: '2020\u20132021', role: 'Post-Undergraduate Student Intern',                now: 'PhD candidate, University of California, Berkeley' },
    { name: 'Saranya Raj, PhD',        years: '2020\u20132022', role: 'Postdoctoral Fellow',                              now: 'Assistant Professor, Amrita Vishwa Vidyapeetham' },
    { name: 'Rushin Gindra, MS',       years: '2020\u20132022', role: 'Computational Analyst',                            now: 'PhD candidate, Technical University of Munich and Helmholtz Munich' },
    { name: 'Divya Venkatraman, BS',   years: '2020\u20132022', role: "Master's Student and Bioinformatic Analyst",       now: 'PhD candidate, University of California, Santa Cruz' },
    { name: 'Dylan Steiner, BS',       years: '2020\u20132024', role: 'Graduate Student, Molecular and Translational Medicine', now: 'Postdoctoral Fellow, AstraZeneca' },
    { name: 'Kelley Anderson, BS',     years: '2020\u20132025', role: 'MD/PhD Student',                                   now: 'MD/PhD candidate in Bioinformatics, Boston University' },
    { name: 'Regan Conrad, MS',        years: '2021\u20132025', role: 'Graduate Student, Bioinformatics',                 now: 'Graduate Student, Bioinformatics' },
    { name: 'Emily Green, BA',         years: '2022\u20132024', role: "Master's Student in Pathology, Research Technician", now: '' },
    { name: 'Darren Chiu, PhD',        years: '2022\u20132026', role: 'Postdoctoral Fellow',                               now: '' },
    { name: 'Yohana Kefella, MS',      years: '2022\u20132026', role: 'Computational Analyst',                             now: '' },
  ]
};

/* ---------------- FUNDERS ---------------- */

window.FUNDERS = [
  'National Cancer Institute',
  'National Institutes of Health',
  'Department of Defense',
  'Stand Up To Cancer',
  'LUNGevity Foundation',
  'American Lung Association',
  'Johnson &amp; Johnson',
  'Janssen Pharmaceuticals',
  'Rafik B. Hariri Institute',
  'Boston University CTSI'
];
