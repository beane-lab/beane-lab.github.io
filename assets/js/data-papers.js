/* ============================================================
   PUBLICATIONS
   ------------------------------------------------------------
   To add a paper, copy a block and fill it in. Fields:
     y     year (number)
     a     author string as you want it displayed
     t     title
     j     journal
     v     volume/issue/pages (optional)
     pmid  PubMed ID (optional)
     pmc   PMC ID (optional)
     doi   DOI (optional)
     tags  any of: field, pml, luad, ai, trials, methods, other
     note  one plain-language line: what this paper showed
     feat  true to surface it on the home page
     pre   true if preprint
     role  'first' | 'senior' | 'co' | '' — drives the author badge
   ============================================================ */

window.PAPERS = [

  /* ---------- 2026 ---------- */
  {
    y: 2026, role: 'senior', feat: true, tags: ['pml'],
    a: 'Ning B, Chiu DJ, Pfefferkorn RM, … Mazzilli SA, Beane JE',
    t: 'Upregulation of an epithelial miRNA is associated with immune evasion in progressive bronchial premalignant lesions',
    j: 'Cancer Immunology Research', v: '14(4):689–707',
    pmid: '41670462', pmc: 'PMC12969512', doi: '10.1158/2326-6066.CIR-25-0431',
    note: 'A mechanism for immune escape before invasion: epithelial hsa-miR-149-5p suppresses NLRC5, stripping MHC-I from premalignant cells and pulling CD8 T cells away.'
  },
  {
    y: 2026, role: 'senior', feat: true, tags: ['ai', 'pml'],
    a: 'Xu L, Kefella Y, Zhang Y, … Kolachalama VB, Beane JE',
    t: 'Attention-based deep learning for analysis of pathology images and gene expression data in lung squamous premalignant lesions',
    j: 'Genome Medicine', v: '18(1)',
    pmid: '41952176', pmc: 'PMC13188385', doi: '10.1186/s13073-026-01636-8',
    note: 'A multimodal model that grades bronchial dysplasia from slides, expression, or both — and still works when one modality is missing. External AUROC 0.954 with both.'
  },
  {
    y: 2026, role: 'senior', feat: true, tags: ['luad', 'pml'],
    a: 'Anderson KE, Tran LM, Krysan K, … Lenburg ME, Beane JE',
    t: 'Archetype analysis of lung adenocarcinoma premalignancy links heterogeneity in premalignant lesions to diverging features of invasive disease',
    j: 'Molecular Cancer Research', v: '24(9):737–753',
    pmid: '42089783', pmc: 'PMC13455826', doi: '10.1158/1541-7786.MCR-25-1093',
    note: 'Adenocarcinoma precursors sit in a continuous four-archetype space that histology does not capture. The proliferation archetype tracks aggressive disease and four-fold worse stage I survival.'
  },
  {
    y: 2026, role: 'co', feat: true, tags: ['luad'],
    a: 'Steiner D, Sultan L, Sullivan T, … Beane J, Lenburg ME',
    t: 'Vascular invasion-associated gene expression is detectable in pre-surgical biopsies of stage I lung adenocarcinoma',
    j: 'Nature Communications', v: '17(1):2581',
    pmid: '41876493', pmc: 'PMC13013712', doi: '10.1038/s41467-026-70600-2',
    note: 'A 48-gene signature reads vascular invasion off a needle biopsy at AUROC 0.90 — before surgery, when the extent of resection is still a decision.'
  },
  {
    y: 2026, role: 'co', tags: ['field'],
    a: 'Lee M, Yokomizo M, Salehi-Rad R, et al.',
    t: 'Characterization of the cancer-associated field of injury in the nasal epithelium in never-smokers',
    j: 'Lung Cancer', v: '218:109506',
    pmid: '42349086', pmc: 'PMC13355242', doi: '10.1016/j.lungcan.2026.109506',
    note: 'The cancer field of injury is not a smoking artifact — the same interferon and antigen-presentation suppression shows up in people who never smoked.'
  },
  {
    y: 2026, role: 'co', tags: ['ai'],
    a: 'Zheng Y, Sharma H, Betke M, … Beane JE, Kolachalama VB',
    t: 'FourierMIL: Fourier filtering-based multiple instance learning for whole slide image analysis',
    j: 'International Journal of Computer Vision', v: '134(1):26',
    pmid: '41472916', pmc: 'PMC12745324', doi: '10.1007/s11263-025-02679-x',
    note: 'An attention-free, frequency-domain approach to gigapixel slides that transfers across stains and organs.'
  },
  {
    y: 2026, role: 'co', tags: ['trials', 'field'],
    a: 'Barbi J, … Beane J, … Yendamuri S',
    t: 'Obesity promotes lung carcinogenesis through airway immune dysfunction',
    j: 'Journal of Thoracic Oncology', v: 'art. 104066',
    pmid: '42379297', pmc: 'PMC13382977', doi: '10.1016/j.jtho.2026.104066',
    note: 'CT-measured abdominal fat — not BMI — tracks lung cancer risk and an interferon-suppressed airway. It dissolves the "obesity paradox."'
  },
  {
    y: 2026, role: 'co', tags: ['other'],
    a: 'Kontodimas K, … Beane JE, … Ligresti G',
    t: 'LATS1/2 inactivation drives a distinct venous endothelial cell response that contributes to fibrotic remodeling of the lung',
    j: 'Science Advances', v: '12(35):eaef8468',
    pmid: '42664350', pmc: 'PMC13524055', doi: '10.1126/sciadv.aef8468',
    note: 'A profibrotic venous endothelial state driven by Hippo-kinase loss — and reversible with a TEAD inhibitor.'
  },
  {
    y: 2026, role: 'co', tags: ['other'],
    a: 'Matson EM, … Beane JE, … Maglione PJ',
    t: 'Coexistent alterations of BAFF and B-cell phenotypes in complicated CVID course',
    j: 'Journal of Allergy and Clinical Immunology', v: '158(3):908–921.e6',
    pmid: '42219089', pmc: 'PMC13367221', doi: '10.1016/j.jaci.2026.04.029',
    note: 'Single-cell transcriptomes paired with BCR repertoire to separate complicated from uncomplicated immunodeficiency.'
  },
  {
    y: 2026, role: 'co', pre: true, tags: ['luad'],
    a: 'Xi ZH, … Beane JE, … Mazzilli SA',
    t: 'Multimodal single-cell and spatial profiling reveals altered T cell-mediated immunity and B-cell follicular architecture in non-metastatic lymph nodes of patients with aggressive NSCLC',
    j: 'medRxiv', v: 'preprint',
    pmid: '41646724', pmc: 'PMC12870645',
    note: 'Even cancer-free regional lymph nodes are already remodeled in aggressive early NSCLC.'
  },

  /* ---------- 2025 ---------- */
  {
    y: 2025, role: 'co', tags: ['methods'],
    a: 'Cai L, Wu F, Zhou Q, … Beane J, … Minna JD',
    t: 'The Lung Cancer Autochthonous Model Gene Expression Database enables cross-study comparisons of the transcriptomic landscapes across mouse models',
    j: 'Cancer Research', v: '85(10):1769–1783',
    pmid: '40298430', pmc: 'PMC12081188', doi: '10.1158/0008-5472.CAN-24-1607',
    note: 'A hard number for a known problem: only 5.6% of mouse lung cancer models are squamous, and every Kras allele is G12D.'
  },
  {
    y: 2025, role: 'co', pre: true, tags: ['luad'],
    a: 'Hong R, Klöckner P, Mazzilli S, … Beane J, … Campbell JD',
    t: 'An atlas of gene programs in NSCLC delineates novel patterns of lineage vacillation, plasticity, and aggressiveness',
    j: 'bioRxiv', v: 'preprint',
    pmid: '40654648', pmc: 'PMC12248011', doi: '10.1101/2025.05.06.652317',
    note: 'Coins "lineage vacillation" — single tumors running gene programs from several alveolar cell types at once.'
  },
  {
    y: 2025, role: 'co', tags: ['other'],
    a: 'Sousa A, … Beane JE, … Zhang H',
    t: 'Placental transcriptome analysis in opioid-exposed versus non-opioid exposed pregnancies',
    j: 'Placenta', v: '162:27–34',
    pmid: '39983471', pmc: 'PMC11908891', doi: '10.1016/j.placenta.2025.02.012',
    note: 'Deconvolution and methylation–expression integration applied outside the lung.'
  },

  /* ---------- 2024 ---------- */
  {
    y: 2024, role: 'co', feat: true, tags: ['trials', 'pml'],
    a: 'Moghaddam SJ, Savai R, Salehi-Rad R, … Beane J, et al.',
    t: 'Premalignant progression in the lung: knowledge gaps and novel opportunities for interception of NSCLC — an official ATS Research Statement',
    j: 'American Journal of Respiratory and Critical Care Medicine', v: '210(5):548–571',
    pmid: '39115548', pmc: 'PMC11389570', doi: '10.1164/rccm.202406-1168ST',
    note: 'The field\'s consensus research agenda for lung cancer interception, co-authored with the ATS project committee.'
  },
  {
    y: 2024, role: 'senior', feat: true, tags: ['ai', 'pml'],
    a: 'Gindra RH, Zheng Y, Green EJ, … Kolachalama VB, Beane JE',
    t: 'Graph Perceiver Network for lung tumor and bronchial premalignant lesion stratification from histopathology',
    j: 'The American Journal of Pathology', v: '194(7):1285–1293',
    pmid: '38588853', pmc: 'PMC11220922', doi: '10.1016/j.ajpath.2024.03.009',
    note: 'GRAPE-Net separates carcinoma in situ lesions that progress from those that regress, from the slide alone, at a third of the model size.'
  },
  {
    y: 2024, role: 'co', tags: ['ai'],
    a: 'Zheng Y, Conrad RD, Green EJ, … Beane JE, Kolachalama VB',
    t: 'Graph attention-based fusion of pathology images and gene expression for prediction of cancer survival',
    j: 'IEEE Transactions on Medical Imaging', v: '43(9):3085–3097',
    pmid: '38587959', pmc: 'PMC11374469', doi: '10.1109/TMI.2024.3386108',
    note: 'Survival activation maps that paint bulk expression back onto the slide — a cheap stand-in for spatial omics.'
  },
  {
    y: 2024, role: 'co', tags: ['luad', 'ai'],
    a: 'Steiner D, Park JA, Singh S, … Beane J, Lenburg ME',
    t: 'A CT-based score indicative of lung cancer aggression (SILA) predicts lung adenocarcinomas with low malignant potential or vascular invasion',
    j: 'Cancer Biomarkers', v: '42(1):CBM230456',
    pmid: '39058440', pmc: 'PMC12226792', doi: '10.3233/CBM-230456',
    note: 'Radiomics alone gets partway to vascular invasion (AUC 0.71) — validated in a 47% non-white safety-net cohort.'
  },
  {
    y: 2024, role: 'co', tags: ['other'],
    a: 'Ysasi AB, Engler AE, Bawa PS, … Beane JE, … Murphy GJ',
    t: 'A specialized population of monocyte-derived tracheal macrophages promote airway epithelial regeneration through a CCR2-dependent mechanism',
    j: 'iScience', v: '27(7):110169',
    pmid: '38993668', pmc: 'PMC11238131', doi: '10.1016/j.isci.2024.110169',
    note: 'Airway epithelium cannot repair itself without a specific monocyte-derived macrophage population.'
  },

  /* ---------- 2023 ---------- */
  {
    y: 2023, role: 'co', feat: true, tags: ['pml'],
    a: 'Ning B, Tilston-Lunel AM, Simonetti J, … Beane JE, Varelas X',
    t: 'Convergence of YAP/TAZ, TEAD, and TP63 activity is associated with bronchial premalignant severity and progression',
    j: 'Journal of Experimental & Clinical Cancer Research', v: '42(1):116',
    pmid: '37150829', pmc: 'PMC10165825', doi: '10.1186/s13046-023-02674-5',
    note: 'A druggable transcriptional node that simultaneously drives proliferation and shuts down MHC class II — linking basal expansion to immune evasion.'
  },
  {
    y: 2023, role: 'co', tags: ['luad'],
    a: 'Yanagawa J, Tran LM, Salehi-Rad R, … Beane J, … Dubinett SM',
    t: 'Single-cell characterization of pulmonary nodules implicates suppression of immunosurveillance across early stages of lung adenocarcinoma',
    j: 'Cancer Research', v: '83(19):3305–3319',
    pmid: '37477508', pmc: 'PMC10544016', doi: '10.1158/0008-5472.CAN-23-0128',
    note: 'Regulatory T cells accumulate and NK surveillance fails while lesions are still subsolid and preinvasive.'
  },
  {
    y: 2023, role: 'co', tags: ['methods', 'pml'],
    a: 'Roberts M, … Beane J, … Lopez-Garcia C',
    t: 'Interrogating the precancerous evolution of pathway dysfunction in lung squamous cell carcinoma using XTABLE',
    j: 'eLife', v: '12:e77507',
    pmid: '36892933', pmc: 'PMC10038660', doi: '10.7554/eLife.77507',
    note: 'XTABLE unifies the four major bronchial premalignancy cohorts in one open app, and dates when each pathway breaks.'
  },
  {
    y: 2023, role: 'co', tags: ['other'],
    a: 'Pavel AB, Garrison C, Luo L, … Beane J, … Spira A',
    t: 'Integrative genetic and genomic networks identify microRNA associated with COPD and ILD',
    j: 'Scientific Reports', v: '13(1):13076',
    pmid: '37567908', pmc: 'PMC10421936', doi: '10.1038/s41598-023-39751-w',
    note: 'isomiR discovery and seed-resolved targeting across two chronic lung diseases.'
  },

  /* ---------- 2022 ---------- */
  {
    y: 2022, role: 'co', feat: true, tags: ['ai'],
    a: 'Zheng Y, Gindra RH, Green EJ, Burks EJ, Betke M, Beane JE, Kolachalama VB',
    t: 'A graph-transformer for whole slide image classification',
    j: 'IEEE Transactions on Medical Imaging', v: '41(11):3003–3015',
    pmid: '35594209', pmc: 'PMC9670036', doi: '10.1109/TMI.2022.3176598',
    note: 'GTP — the architecture the lab\'s whole computational pathology line is built on, with GraphCAM heatmaps that match pathologist annotations.'
  },
  {
    y: 2022, role: 'senior', tags: ['field'],
    a: 'Xu K, … Mazzilli SA, Beane JE',
    t: 'Smoking modulates different secretory subpopulations expressing SARS-CoV-2 entry genes in the nasal and bronchial airways',
    j: 'Scientific Reports', v: '12(1):18168',
    pmid: '36307504', pmc: 'PMC9615627', doi: '10.1038/s41598-022-17832-6',
    note: 'Smoking\'s effect on viral entry genes is site-specific — nose and bronchus do not agree, in any entry gene.'
  },
  {
    y: 2022, role: 'co', tags: ['trials'],
    a: 'Garland LL, … Beane J, … Chow HHS',
    t: 'Clinical study of aspirin and zileuton on biomarkers of tobacco-related carcinogenesis in current smokers',
    j: 'Cancers', v: '14(12):2893',
    pmid: '35740559', pmc: 'PMC9221101', doi: '10.3390/cancers14122893',
    note: 'The primary endpoint failed, but a bronchial dysplasia signature moved favorably when measured in the nose — the strongest evidence yet for a nasal surrogate.'
  },
  {
    y: 2022, role: 'co', tags: ['other'],
    a: 'Kern JG, … Beane JE, … Varelas X',
    t: 'Inactivation of LATS1/2 drives luminal-basal plasticity to initiate a basal-like mammary carcinoma',
    j: 'Nature Communications', v: '13(1):7198',
    pmid: '36443313', pmc: 'PMC9705439', doi: '10.1038/s41467-022-34864-8',
    note: 'The cross-organ analogue: Hippo-kinase loss alone is enough to initiate carcinoma through lineage plasticity.'
  },

  /* ---------- 2021 ---------- */
  {
    y: 2021, role: 'senior', feat: true, tags: ['pml'],
    a: 'Maoz A, … Lenburg ME, Beane JE',
    t: 'Elevated T cell repertoire diversity is associated with progression of lung squamous cell premalignant lesions',
    j: 'Journal for ImmunoTherapy of Cancer', v: '9(9):e002647',
    pmid: '34580161', pmc: 'PMC8477334', doi: '10.1136/jitc-2021-002647',
    note: 'T cell receptors recovered straight from bulk RNA-seq of tiny biopsies — and lesions that regress carry a more focused, more clonal response.'
  },
  {
    y: 2021, role: 'co', tags: ['pml'],
    a: 'Tilston-Lunel A, … Beane JE, … Varelas X',
    t: 'Aberrant epithelial polarity drives the development of precancerous airway lesions',
    j: 'PNAS', v: '118(18):e2019282118',
    pmid: '33903236', pmc: 'PMC8106308', doi: '10.1073/pnas.2019282118',
    note: 'Loss of cell polarity releases YAP/TAZ and expands basal cells into lesions — and a YAP/TAZ metagene tracks grade in human biopsies.'
  },
  {
    y: 2021, role: 'co', tags: ['other'],
    a: 'Hicks-Berthet J, … Beane JE, … Varelas X',
    t: 'Yap/Taz inhibit goblet cell fate to maintain lung epithelial homeostasis',
    j: 'Cell Reports', v: '36(2):109347',
    pmid: '34260916', pmc: 'PMC8346236', doi: '10.1016/j.celrep.2021.109347',
    note: 'YAP/TAZ hold goblet cell fate in check by directly repressing SPDEF — and blocking Hippo kinases reverses goblet metaplasia.'
  },
  {
    y: 2021, role: 'co', tags: ['luad'],
    a: 'Burks EJ, … Beane J, Lenburg ME',
    t: 'Pathologic and gene expression comparison of CT-screen detected and routinely detected stage I/0 lung adenocarcinoma in NCCN risk-matched cohorts',
    j: 'Cancer Treatment and Research Communications', v: '29:100486',
    pmid: '34794107', pmc: 'PMC8713084', doi: '10.1016/j.ctarc.2021.100486',
    note: 'Screen-detected early adenocarcinoma is biologically the same disease as incidentally detected — the clearest argument against the overdiagnosis critique.'
  },
  {
    y: 2021, role: 'co', tags: ['other'],
    a: 'Lim Y, Beane-Ebel JE, … Zhang H',
    t: 'Exploration of alcohol use disorder-associated brain miRNA–mRNA regulatory networks',
    j: 'Translational Psychiatry', v: '11(1):504',
    pmid: '34601489', pmc: 'PMC8487426', doi: '10.1038/s41398-021-01635-w',
    note: 'The same miRNA–mRNA network method, applied to postmortem brain with stem-cell-derived neuron validation.'
  },
  {
    y: 2021, role: 'consortium', tags: ['other'],
    a: 'Muus C, et al., Human Cell Atlas Lung Biological Network',
    t: 'Single-cell meta-analysis of SARS-CoV-2 entry genes across tissues and demographics',
    j: 'Nature Medicine', v: '27(3):546–559',
    pmid: '33654293', pmc: 'PMC9469728', doi: '10.1038/s41591-020-01227-z',
    note: 'A consortium meta-analysis across 1.3 million cells and 228 people.'
  },

  /* ---------- 2020 and earlier ---------- */
  {
    y: 2020, role: 'consortium', tags: ['pml'],
    a: 'Rozenblatt-Rosen O, et al., Human Tumor Atlas Network',
    t: 'Charting tumor transitions across space and time at single-cell resolution',
    j: 'Cell', v: '181(2):236–249',
    pmid: '32302568', pmc: 'PMC7376497', doi: '10.1016/j.cell.2020.03.053',
    note: 'The founding description of the Human Tumor Atlas Network, which houses the lab\'s Lung Pre-Cancer Atlas.'
  },
  {
    y: 2019, role: 'first', feat: true, tags: ['pml'],
    a: 'Beane J, Mazzilli SA, Campbell JD, … Lenburg ME, Spira A',
    t: 'Molecular subtyping reveals immune alterations associated with progression of bronchial premalignant lesions',
    j: 'Nature Communications', v: '10(1):1856',
    pmid: '31015447', pmc: 'PMC6478943', doi: '10.1038/s41467-019-09834-2',
    note: 'The four-subtype map of bronchial premalignancy, and Module 9 — the interferon and antigen-presentation program that regressing lesions keep and progressing lesions lose.'
  },
  {
    y: 2019, role: 'senior', feat: true, tags: ['field'],
    a: 'Duclos GE, Teixeira VH, Autissier P, … Campbell JD, Beane J',
    t: 'Characterizing smoking-induced transcriptional heterogeneity in the human bronchial epithelium at single-cell resolution',
    j: 'Science Advances', v: '5(12):eaaw3413',
    pmid: '31844660', pmc: 'PMC6905872', doi: '10.1126/sciadv.aaw3413',
    note: 'Fifteen years of bulk smoking signatures resolved into cell types and states — including a previously unrecognized peri-goblet cell.'
  },
  {
    y: 2019, role: 'co', tags: ['pml'],
    a: 'Teixeira VH, … Beane J, … Janes SM',
    t: 'Deciphering the genomic, epigenomic, and transcriptomic landscapes of pre-invasive lung cancer lesions',
    j: 'Nature Medicine', v: '25(3):517–525',
    pmid: '30664780', pmc: 'PMC7614970', doi: '10.1038/s41591-018-0323-0',
    note: 'Histologically identical carcinoma in situ is already split in two — and chromosomal instability is what separates the halves.'
  },
  {
    y: 2019, role: 'co', tags: ['pml'],
    a: 'Mascaux C, … Beane J, … Galon J, Janes SM',
    t: 'Immune evasion before tumour invasion in early lung squamous carcinogenesis',
    j: 'Nature', v: '571(7766):570–575',
    pmid: '31243362', doi: '10.1038/s41586-019-1330-0',
    note: 'Immune escape is in place at the high-grade preinvasive stage — the single clearest rationale for immunoprevention.'
  },
  {
    y: 2019, role: 'co', tags: ['field'],
    a: 'Hijazi K, … Beane J, … Spira A',
    t: 'Tobacco-related alterations in airway gene expression are rapidly reversed within weeks following smoking cessation',
    j: 'Scientific Reports', v: '9(1):6978',
    pmid: '31061400', pmc: 'PMC6502805', doi: '10.1038/s41598-019-43295-3',
    note: 'The kinetics of quitting: 88% of reversible airway changes have already reverted by eight weeks.'
  },
  {
    y: 2019, role: 'co', tags: ['trials', 'field'],
    a: 'Garland LL, … Beane J, … Chow HHS',
    t: 'Effect of intermittent versus continuous low-dose aspirin on nasal epithelium gene expression in current smokers',
    j: 'Cancer Prevention Research', v: '12(11):809–820',
    pmid: '31451521', pmc: 'PMC7485120', doi: '10.1158/1940-6207.CAPR-19-0036',
    note: 'Nasal brushing used as a pharmacodynamic readout inside a randomized prevention trial.'
  },
  {
    y: 2017, role: 'first', feat: true, tags: ['pml', 'field'],
    a: 'Beane J, … Lenburg ME, Spira A',
    t: 'Detecting the presence and progression of premalignant lung lesions via airway gene expression',
    j: 'Clinical Cancer Research', v: '23(17):5091–5100',
    pmid: '28533227', pmc: 'PMC7404813', doi: '10.1158/1078-0432.CCR-16-2540',
    note: 'Normal-looking airway tissue tells you whether premalignant lesions exist elsewhere in the lung (AUC 0.92) and whether they are regressing.'
  },
  {
    y: 2017, role: 'first', feat: true, tags: ['pml', 'trials'],
    a: 'Beane J, Campbell JD, Lel J, Vick J, Spira A',
    t: 'Genomic approaches to accelerate cancer interception',
    j: 'The Lancet Oncology', v: '18(8):e494–e502',
    pmid: '28759388', pmc: 'PMC6020676', doi: '10.1016/S1470-2045(17)30373-X',
    note: 'Defines cancer interception: interrupting carcinogenesis at any point before invasive disease.'
  },
  {
    y: 2016, role: 'co', tags: ['trials'],
    a: 'Lam S, … Beane J, … Szabo E',
    t: 'A randomized phase IIb trial of myo-inositol in smokers with bronchial dysplasia',
    j: 'Cancer Prevention Research', v: '9(12):906–914',
    pmid: '27658890', pmc: 'PMC5136333', doi: '10.1158/1940-6207.CAPR-15-0254',
    note: 'Proof of principle for molecular surrogate endpoints: responders showed the expected PI3K signature shift even though the histologic endpoint failed.'
  },
  {
    y: 2016, role: 'co', tags: ['pml', 'methods'],
    a: 'Campbell JD, … Beane J, … Spira A',
    t: 'The case for a Pre-Cancer Genome Atlas (PCGA)',
    j: 'Cancer Prevention Research', v: '9(2):119–124',
    pmid: '26839336', doi: '10.1158/1940-6207.CAPR-16-0024',
    note: 'Coins the Pre-Cancer Genome Atlas and sets the four design rules the lab still follows — lesion with field, longitudinal including regression, bulk and single-cell, multicenter.'
  },
  {
    y: 2016, role: 'co', tags: ['field'],
    a: 'Rahman SMJ, … Beane J, … Massion PP',
    t: 'The airway epithelium undergoes metabolic reprogramming in individuals at high risk for lung cancer',
    j: 'JCI Insight', v: '1(19):e88814',
    pmid: '27882349', pmc: 'PMC5111517', doi: '10.1172/jci.insight.88814',
    note: 'The field of injury is altered at the protein and metabolic level, not only in transcripts.'
  },
  {
    y: 2016, role: 'co', tags: ['other'],
    a: 'Kusko RL, … Beane J, … Spira A',
    t: 'Integrated genomics reveals convergent transcriptomic networks underlying COPD and IPF',
    j: 'American Journal of Respiratory and Critical Care Medicine', v: '194(8):948–960',
    pmid: '27104832', pmc: 'PMC5067817', doi: '10.1164/rccm.201510-2026OC',
    note: 'Two opposite-looking diseases converge on shared transcriptional networks, with MIR96 nominated and functionally validated.'
  },
  {
    y: 2015, role: 'co', tags: ['methods'],
    a: 'Campbell JD, … Beane J, … Spira A',
    t: 'Assessment of microRNA differential expression and detection in multiplexed small RNA sequencing data',
    j: 'RNA', v: '21(2):164–171',
    pmid: '25519487', pmc: 'PMC4338344', doi: '10.1261/rna.046060.114',
    note: 'A design rule still used in the lab: for a fixed budget, more samples at lower depth beats fewer samples sequenced deeply.'
  },
  {
    y: 2015, role: 'co', tags: ['other'],
    a: 'Grubaugh ND, … Beane JE, … Ebel GD',
    t: 'Experimental evolution of an RNA virus in wild birds',
    j: 'PLoS Pathogens', v: '11(5):e1004874',
    pmid: '25993022', pmc: 'PMC4439088', doi: '10.1371/journal.ppat.1004874',
    note: 'Intrahost population genetics from deep sequencing — the statistical ancestor of the lab\'s clonal heterogeneity work.'
  },
  {
    y: 2012, role: 'first', tags: ['field'],
    a: 'Beane J, … Lenburg ME, Spira A',
    t: 'SIRT1 pathway dysregulation in the smoke-exposed airway epithelium and lung tumor tissue',
    j: 'Cancer Research', v: '72(22):5702–5711',
    pmid: '22986747', pmc: 'PMC4053174', doi: '10.1158/0008-5472.CAN-12-1043',
    note: 'SIRT1 activity rises in the smoker\'s airway but is lost in the tumors that follow.'
  },
  {
    y: 2011, role: 'first', tags: ['field', 'methods'],
    a: 'Beane J, … Lenburg ME, Spira A',
    t: 'Characterizing the impact of smoking and lung cancer on the airway transcriptome using RNA-Seq',
    j: 'Cancer Prevention Research', v: '4(6):803–817',
    pmid: '21636547', pmc: 'PMC3694393', doi: '10.1158/1940-6207.CAPR-11-0212',
    note: 'Defines the 20,573-gene airway transcriptome and shows that non-coding RNA is part of the field of injury.'
  },
  {
    y: 2009, role: 'first', tags: ['field', 'methods'],
    a: 'Beane J, Spira A, Lenburg ME',
    t: 'Clinical impact of high-throughput gene expression studies in lung cancer',
    j: 'Journal of Thoracic Oncology', v: '4(1):109–118',
    pmid: '19096318', pmc: 'PMC2731413', doi: '10.1097/JTO.0b013e31819151f8',
    note: 'Sets the diagnosis / prognosis / prediction framing, and the standard that a biomarker must validate across sites before it reaches a clinic.'
  },
  {
    y: 2009, role: 'co', tags: ['other'],
    a: 'Brackney DE, Beane JE, Ebel GD',
    t: 'RNAi targeting of West Nile virus in mosquito midguts promotes virus diversification',
    j: 'PLoS Pathogens', v: '5(7):e1000502',
    pmid: '19578437', pmc: 'PMC2698148', doi: '10.1371/journal.ppat.1000502',
    note: 'An early application of viral deep sequencing and small-RNA analysis to intrahost evolution.'
  },
  {
    y: 2008, role: 'first', feat: true, tags: ['field'],
    a: 'Beane J, Sebastiani P, Whitfield TH, … Lenburg ME, Spira A',
    t: 'A prediction model for lung cancer diagnosis that integrates genomic and clinical features',
    j: 'Cancer Prevention Research', v: '1(1):56–64',
    pmid: '19138936', pmc: 'PMC4167688', doi: '10.1158/1940-6207.CAPR-08-0011',
    note: 'The clinicogenomic model — airway gene expression adds real information on top of age, smoking history, and nodule size.'
  },
  {
    y: 2008, role: 'co', tags: ['other'],
    a: 'Millien G, Beane J, … Ramirez MI',
    t: 'Characterization of the mid-foregut transcriptome identifies genes regulated during lung bud induction',
    j: 'Gene Expression Patterns', v: '8(2):124–139',
    pmid: '18023262', pmc: 'PMC2440337', doi: '10.1016/j.modgep.2007.09.003',
    note: 'Lung development profiled from microdissected, very-low-input embryonic tissue.'
  },
  {
    y: 2007, role: 'first', feat: true, tags: ['field'],
    a: 'Beane J, Sebastiani P, Liu G, Brody JS, Lenburg ME, Spira A',
    t: 'Reversible and permanent effects of tobacco smoke exposure on airway epithelial gene expression',
    j: 'Genome Biology', v: '8(9):R201',
    pmid: '17894889', pmc: 'PMC2375039', doi: '10.1186/gb-2007-8-9-r201',
    note: 'Sorts smoking\'s effects into rapidly reversible, slowly reversible, and permanent — 28 genes never came back, even after six years off cigarettes.'
  },
  {
    y: 2007, role: 'co', feat: true, tags: ['field'],
    a: 'Spira A, Beane JE, Shah V, … Lenburg ME, Brody JS',
    t: 'Airway epithelial gene expression in the diagnostic evaluation of smokers with suspect lung cancer',
    j: 'Nature Medicine', v: '13(3):361–366',
    pmid: '17334370', doi: '10.1038/nm1556',
    note: 'The 80-gene airway biomarker — the direct ancestor of the commercialized Percepta bronchial genomic classifier.'
  },
  {
    y: 2006, role: 'co', tags: ['other'],
    a: 'DeMeo DL, … Beane J, … Silverman EK',
    t: 'The SERPINE2 gene is associated with chronic obstructive pulmonary disease',
    j: 'The American Journal of Human Genetics', v: '78(2):253–264',
    pmid: '16358219', pmc: 'PMC1380249', doi: '10.1086/499828',
    note: 'Expression-informed positional candidate mapping in COPD families.'
  },
  {
    y: 2005, role: 'co', tags: ['methods', 'field'],
    a: 'Shah V, Sridhar S, Beane J, Brody JS, Spira A',
    t: 'SIEGE: Smoking Induced Epithelial Gene Expression Database',
    j: 'Nucleic Acids Research', v: '33:D573–D579',
    pmid: '15608264', pmc: 'PMC539989', doi: '10.1093/nar/gki035',
    note: 'The first public database of smoking-induced airway expression — and the QC pipeline every later brushing study inherited.'
  },
  {
    y: 2004, role: 'co', feat: true, tags: ['field'],
    a: 'Spira A, Beane J, Shah V, … Brody JS',
    t: 'Effects of cigarette smoke on the human airway epithelial cell transcriptome',
    j: 'PNAS', v: '101(27):10143–10148',
    pmid: '15210990', pmc: 'PMC454179', doi: '10.1073/pnas.0401422101',
    note: 'Where it started. Smoking reprograms the bronchial transcriptome, and some of that reprogramming outlasts quitting.'
  },
  {
    y: 2004, role: 'co', tags: ['other'],
    a: 'Spira A, Beane J, … Brody JS',
    t: 'Gene expression profiling of human lung tissue from smokers with severe emphysema',
    j: 'American Journal of Respiratory Cell and Molecular Biology', v: '31(6):601–610',
    pmid: '15374838', doi: '10.1165/rcmb.2004-0273OC',
    note: 'Molecular subclasses of emphysema, and an early attempt to predict surgical outcome from expression.'
  },
  {
    y: 2004, role: 'co', tags: ['methods'],
    a: 'Spira A, Beane J, … Brody JS',
    t: 'Noninvasive method for obtaining RNA from buccal mucosa epithelial cells for gene expression profiling',
    j: 'BioTechniques', v: '36(3):484–487',
    pmid: '15038164', doi: '10.2144/04363RN03',
    note: 'The methods precursor to everything that followed: usable RNA from a cheek swab.'
  },
  {
    y: 2001, role: 'co', tags: ['other'],
    a: 'Ozkan M, … Beane J, … Lynd LR',
    t: 'Characterization of 13 newly isolated strains of anaerobic, cellulolytic, thermophilic bacteria',
    j: 'Journal of Industrial Microbiology and Biotechnology', v: '27(5):275–280',
    pmid: '11781801', doi: '10.1038/sj.jim.7000082',
    note: 'Undergraduate bench microbiology at Dartmouth — where the career started.'
  }
];
