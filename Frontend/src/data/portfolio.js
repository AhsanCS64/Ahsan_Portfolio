import mlCvUrl from "../../CV/H_M_AHSAN_HABIB_KUSHAL_ML.pdf?url";
import academicCvUrl from "../../CV/Academic_Ahsan_Habib.pdf?url";
import onePageCvUrl from "../../CV/onepager.pdf?url";
import portraitUrl from "../../Photo/kushal.jpg";
import pytorchCertificateUrl from "../../Certifications/PyTorch Deep Learning Prof Cert.png";
import ibmDataScienceCertificateUrl from "../../Certifications/IBM Data Science Professional Certificate.png";
import machineLearningCertificateUrl from "../../Certifications/Machine Learning Specialization.png";
import deepLearningCertificateUrl from "../../Certifications/DeepLearning_Specialization.png";
import headlineguardClickbaitOpeningImage from "../../Photo/Projects/HeadlineguardBD/Clickbait (Headline + Article Opening).png";
import headlineguardClickbaitHeadlineImage from "../../Photo/Projects/HeadlineguardBD/Clickbait-Headlineonly.png";
import headlineguardNonClickbaitImage from "../../Photo/Projects/HeadlineguardBD/Non-Clickbait.png";
import headlineguardLogo from "../../Photo/Projects/HeadlineguardBD/HeadlineGuard BD Logo Emblem.png";
import gamesenseLandingImage from "../../Photo/Projects/GameSense/Landing Screen.png";
import gamesenseSingleGameImage from "../../Photo/Projects/GameSense/Single Game Selected.png";
import gamesenseMultipleGamesImage from "../../Photo/Projects/GameSense/Multiple Games Selected.png";
import mindscopeLogo from "../../Photo/Projects/MindScope/mindscope-orbit.png";
import mindscopeLandingImage from "../../Photo/Projects/MindScope/LandingPage.png";
import mindscopeDatasetImage from "../../Photo/Projects/MindScope/DatasetExplorer.png";
import mindscopeInferenceImage from "../../Photo/Projects/MindScope/Inference.png";
import mindscopeExplainabilityImage from "../../Photo/Projects/MindScope/Explainabiliti.png";
import mindscopeExplainabilityDetailImage from "../../Photo/Projects/MindScope/Explainabiliti2.png";
import mindscopePerformanceImage from "../../Photo/Projects/MindScope/ModelPerformance.png";
import mindscopeMethodImage from "../../Photo/Projects/MindScope/Method.png";
import khamarbariHomeImage from "../../Photo/Projects/Khamarbari_home.png";
import khamarbariDashboardImage from "../../Photo/Projects/khamarbari_dashboard.png";
import khamarbariAnimalManagementImage from "../../Photo/Projects/Khamarbari_AnimalManagement.png";
import khamarbariProductionsImage from "../../Photo/Projects/khamarbari_productions.png";
import cmrxHomepageImage from "../../Photo/Projects/cmrx_homepage.png";
import cmrxDashboardImage from "../../Photo/Projects/cmrx_dashboard.png";
import cmrxPrescriptionsImage from "../../Photo/Projects/cmrx_viewPrescriptions.png";
import ctrxLogo from "../../Photo/Projects/ctrx/logo_ctrx.png";
import khamarbariLogo from "../../Photo/Projects/khamarbari_logo.png";
import cmrxLogo from "../../Photo/Projects/CMRx Medical Records Logo.png";
import ctrxAdminOverview from "../../Photo/Projects/ctrx/admin_overview.jpg";
import ctrxGovernmentId from "../../Photo/Projects/ctrx/admin_govidCreation.jpg";
import ctrxLandlordPortfolio from "../../Photo/Projects/ctrx/landlord_portfolio.jpg";
import ctrxLandlordListings from "../../Photo/Projects/ctrx/landlord_listtings.jpg";
import ctrxPropertySearch from "../../Photo/Projects/ctrx/tenant_propertisearch.jpg";
import ctrxTenantRic from "../../Photo/Projects/ctrx/tenant_ric.jpg";
import ctrxSampleRic from "../../Photo/Projects/ctrx/sample_ric.png";
import ctrxTenantTools from "../../Photo/Projects/ctrx/tenant_tools.jpg";
import nccLogo from "../../Photo/ECA/NCC.png";
import nssLogo from "../../Photo/ECA/NSS.png";
import dhakaUniversityLogo from "../../Photo/institutions/dhaka_university.png";
import bubtLogo from "../../Photo/institutions/bubt.png";
import dhakaBoardLogo from "../../Photo/institutions/dhaka_board.png";
import willesLogo from "../../Photo/institutions/willes-little-flower-school-logo-png_seeklogo-643756-removebg-preview.png";
import bafskLogo from "../../Photo/institutions/BAFSK.webp";
import niterLogo from "../../Photo/institutions/niter.png";
import willesPhoto from "../../Photo/institutions/willes-little-flower-school-logo-png_seeklogo-643756-removebg-preview.png";
import bafskPhoto from "../../Photo/institutions/BAFSK.webp";
import niterPhoto from "../../Photo/institutions/niter.png";

import detectiveRiceLogo from "../../Photo/Projects/Detective Rice/Golden rice detective icon.png";
import detectiveRiceInferenceImage from "../../Photo/Projects/Detective Rice/Inference.png";

import scarletDishLogo from "../../Photo/Projects/Scarlet Dish/Scarlet Steam Bowl Emblem.png";
import scarletDishHomeImage from "../../Photo/Projects/Scarlet Dish/00-Scarlet-Dish.jpg";
import scarletDishPantryImage from "../../Photo/Projects/Scarlet Dish/01-Pantry.jpg";
import scarletDishPantryResultsImage from "../../Photo/Projects/Scarlet Dish/02-Pantry-Results.jpg";
import scarletDishSimilarDishesImage from "../../Photo/Projects/Scarlet Dish/03-Similar-Dishes.jpg";
import scarletDishSimilarResultsImage from "../../Photo/Projects/Scarlet Dish/04-Similar-Dishes-Results.jpg";
import scarletDishTargetCuisinesImage from "../../Photo/Projects/Scarlet Dish/05-Target-Cuisines.jpg";
import scarletDishAdaptImage from "../../Photo/Projects/Scarlet Dish/06-Adapt-a-Dish.jpg";
import scarletDishKoreanShakshukaImage from "../../Photo/Projects/Scarlet Dish/07-Korean-Inspired-Shakshuka.jpg";
import scarletDishAdaptedMethodImage from "../../Photo/Projects/Scarlet Dish/08-Adapted-Ingredients-and-Method.jpg";

export const projects = [
  {
    number: "01",
    type: "Full-stack · Web application",
    name: "CTRx",
    logo: ctrxLogo,
    summary:
      "Central Tenant Records is a rental management platform for Bangladesh. It connects tenants, landlords, and government authorities through verified household identities and documented tenancy records.",
    details: [
      "Household-based Rental Identity Certificates (RICs) with government document verification",
      "Landlord property portfolios and rental listings",
      "Tenancy management, verified rental payment records, and tenant reliability scoring",
      "Landlord reviews, dispute resolution, and role-based dashboards",
    ],
    gallery: [
      {
        image: ctrxAdminOverview,
        alt: "CTRx government dashboard",
        title: "Government dashboard",
        explanation: "The overview brings government administration and registration activity into one workspace.",
      },
      {
        image: ctrxGovernmentId,
        alt: "CTRx government ID creation",
        title: "Government ID creation",
        explanation: "The administration interface includes a workflow for creating government IDs.",
      },
      {
        image: ctrxLandlordPortfolio,
        alt: "CTRx landlord portfolio",
        title: "Landlord portfolio",
        explanation: "Landlords can review their properties from a dedicated portfolio view.",
      },
      {
        image: ctrxLandlordListings,
        alt: "CTRx landlord listings",
        title: "Landlord listings",
        explanation: "The listings view gives landlords a place to manage rental listings.",
      },
      {
        image: ctrxPropertySearch,
        alt: "CTRx property search",
        title: "Property search",
        explanation: "Tenants can browse available rental properties.",
      },
      {
        image: ctrxTenantRic,
        alt: "CTRx tenant RIC dashboard",
        title: "Tenant RIC dashboard",
        explanation: "Tenants can review their Rental Identity Certificate information.",
      },
      {
        image: ctrxSampleRic,
        alt: "CTRx sample Rental Identity Certificate",
        title: "Sample Rental Identity Certificate",
        explanation: "A sample of the certificate issued through the registration workflow.",
      },
      {
        image: ctrxTenantTools,
        alt: "CTRx tenant tools",
        title: "Tenant tools",
        explanation: "The tenant workspace brings rental tools together in one view.",
      },
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Render", "Neon"],
    href: "https://ctrx-chi.vercel.app/",
    repo: "https://github.com/AhsanCS64/CTRx",
    linkLabel: "Live demo",
    kind: "ctrx",
  },

  {
    number: "02",
    type: "Full-stack · Web application",
    name: "Khamar Bari",
    logo: khamarbariLogo,
    summary:
      "A farm-management platform bringing everyday operations into one clear, interactive workspace.",
    details: [
      "Dashboard with KPIs and data visualizations",
      "Animal and habitat management",
      "Responsive interface with custom SVG details",
    ],
    gallery: [
      {
        image: khamarbariHomeImage,
        alt: "KhamarBari landing page showing its farm-management introduction and illustrated farm landscape",
        title: "A welcoming front door",
        explanation: "The public landing page introduces the platform with a farm-inspired visual identity and a clear path into the product.",
      },
      {
        image: khamarbariDashboardImage,
        alt: "KhamarBari farm dashboard with animal, production, revenue and alert summaries",
        title: "The farm at a glance",
        explanation: "A single workspace brings together key farm indicators, production trends, alerts and everyday actions.",
      },
      {
        image: khamarbariAnimalManagementImage,
        alt: "KhamarBari animal and habitat management page showing enclosure occupancy and health information",
        title: "Animals & habitats",
        explanation: "Enclosures, headcounts, utilization and health signals are organized to make animal management easier to scan.",
      },
      {
        image: khamarbariProductionsImage,
        alt: "KhamarBari production records with a 14-day trend chart and dated farm activity table",
        title: "Production, made visible",
        explanation: "A production trend and dated activity log help farm teams review milk, egg and meat records over time.",
      },
    ],
    stack: ["React", "Vite", "MongoDB Atlas", "Vercel"],
    href: "https://khamar-bari-v2-rho.vercel.app/",
    repo: "https://github.com/AhsanCS64/KhamarBari_v2",
    kind: "farm",
  },

  {
    number: "03",
    type: "Database systems · Academic project",
    name: "CMR .x",
    logo: cmrxLogo,
    summary:
      "A central medical-records and disease-tracking system built around structured healthcare information.",
    details: [
      "Patient, diagnosis, and prescription records",
      "Hospital and vaccination management",
      "Relational data model with generated medical IDs",
    ],
    gallery: [
      {
        image: cmrxHomepageImage,
        alt: "CMRx homepage introducing the centralized medical-records and disease-tracking system",
        title: "Centralized medical Records and Disease Tracking",
        explanation: "The public homepage introduces CMRx and its goal of connecting healthcare records across hospitals and clinics.",
      },
      {
        image: cmrxDashboardImage,
        alt: "CMRx patient dashboard with personal information, medical history, allergies, and vaccine records",
        title: "A patient's medical history",
        explanation: "The dashboard brings patient information, conditions, allergies, and vaccination records together in one view.",
      },
      {
        image: cmrxPrescriptionsImage,
        alt: "CMRx prescriptions page with a prescription record and view and download actions",
        title: "Prescription records",
        explanation: "Patients can review their prescription records and access the attached documents.",
      },
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/AhsanCS64/CMR-DT",
    linkLabel: "Source code",
    href: "https://cmrx.rf.gd/cmrx/Homepage.php",
    linkLabel: "Live demo",
    kind: "medical",
  },

  {
    number: "04",
    type: "Machine learning · Bangla NLP",
    name: "HeadlineGuard BD",
    logo: headlineguardLogo,
    summary:
      "A deployed Bangla clickbait-detection demo that analyzes a headline alone or with an optional article opening, combining SVM and fine-tuned BanglaBERT scores.",
    details: [
      "Headline-only model: 82.84% accuracy · 75.56% clickbait F1",
      "Headline + opening model: 82.95% accuracy · 76.78% clickbait F1",
      "SVM (TF-IDF + LinearSVC) combined with fine-tuned BanglaBERT",
    ],
    gallery: [
      {
        image: headlineguardClickbaitHeadlineImage,
        alt: "HeadlineGuard BD detecting a clickbait headline using the headline-only model",
        title: "Headline-only detection",
        explanation: "The headline-only model flags clickbait from the headline alone, achieving 82.84% accuracy and 75.56% clickbait F1 on the official test split.",
      },
      {
        image: headlineguardClickbaitOpeningImage,
        alt: "HeadlineGuard BD analyzing a clickbait headline together with its article opening",
        title: "Headline + article opening",
        explanation: "When an article opening is available, the combined model improves to 82.95% accuracy and 76.78% clickbait F1 by incorporating additional context.",
      },
      {
        image: headlineguardNonClickbaitImage,
        alt: "HeadlineGuard BD correctly classifying a non-clickbait Bangla headline",
        title: "Non-clickbait classification",
        explanation: "The system correctly identifies legitimate headlines, demonstrating reliable discrimination between clickbait and genuine news content.",
      },
    ],
    stack: ["Python", "scikit-learn", "BanglaBERT", "Transformers", "Streamlit"],
    href: "https://headlineguardbd.streamlit.app/",
    linkLabel: "Live demo",
    repo: "https://github.com/AhsanCS64/HeadlineGuard_BD",
    kind: "research",
  },

  {
    number: "05",
    type: "Deep learning · Computer vision",
    name: "Detective Rice!",
    logo: detectiveRiceLogo,
    summary:
      "A computer vision app that identifies Bangladeshi rice varieties from a close-up photo of a single uncooked grain.",
    details: [
      "Streamlit interface for uploading photos or trying sample images",
      "Top three predicted varieties with confidence scores",
      "Preview of the 224 × 224 image passed to the classifier",
    ],
    gallery: [
      {
        image: detectiveRiceInferenceImage,
        alt: "Detective Rice interface showing a sample grain and ranked variety predictions",
        title: "Rice variety predictions",
        explanation: "The result shows the selected grain alongside the model's three highest-scoring varieties.",
      },
    ],
    stack: ["Python", "PyTorch", "Computer Vision", "Image Processing", "EfficientNet_B0", "Streamlit"],
    href: "https://detective-rice.streamlit.app/",
    linkLabel: "Live demo",
    repo: "https://github.com/AhsanCS64/Detective-Rice",
    kind: "research",
  },
  {
    number: "06",
    type: "Machine learning · Explainable AI",
    name: "MindScope",
    logo: mindscopeLogo,
    summary:
      "An interactive research and education app for exploring student mental health survey data. An ensemble of five XGBoost models predicts the depression label recorded in the OpenML Student Depression dataset.",
    details: [
      "Interactive dataset explorer for examining survey patterns",
      "Model predictions for hypothetical student profiles",
      "SHAP visualizations showing which inputs raise or lower a model prediction",
      "Held-out model evaluation and documented methodology",
    ],
    gallery: [
      {
        image: mindscopeLandingImage,
        alt: "MindScope landing page introducing the student mental health data explorer",
        title: "Exploring student mental health survey data",
        explanation: "The landing page introduces the dataset, the prediction demo, and the model evaluation tools.",
      },
      {
        image: mindscopeDatasetImage,
        alt: "MindScope dataset explorer displaying student survey data",
        title: "Dataset explorer",
        explanation: "Interactive charts let users examine patterns in the student survey responses.",
      },
      {
        image: mindscopeInferenceImage,
        alt: "MindScope prediction interface for entering a hypothetical student profile",
        title: "Hypothetical profile predictions",
        explanation: "Users can enter a sample profile and see how the ensemble predicts the dataset's recorded label.",
      },
      {
        image: mindscopeExplainabilityImage,
        alt: "MindScope explainability page showing SHAP results",
        title: "Model explainability",
        explanation: "SHAP visualizations show how the model uses survey inputs.",
      },
      {
        image: mindscopeExplainabilityDetailImage,
        alt: "Additional SHAP visualization on the MindScope explainability page",
        title: "Feature contributions in detail",
        explanation: "The detailed view shows which inputs push a prediction higher or lower and by how much.",
      },
      {
        image: mindscopePerformanceImage,
        alt: "MindScope model performance page displaying evaluation results",
        title: "Held-out model performance",
        explanation: "The evaluation page reports how the ensemble performed on held-out survey data.",
      },
      {
        image: mindscopeMethodImage,
        alt: "MindScope methodology page describing the research workflow",
        title: "Research methodology",
        explanation: "The methodology page documents the workflow from data preparation through model evaluation.",
      },
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "XGBoost", "SHAP"],
    href: "https://mind-scope-tau.vercel.app/",
    linkLabel: "Live demo",
    repo: "https://github.com/AhsanCS64/MindScope",
    kind: "research",
  },
  {
    number: "07",
    type: "Machine learning · Recommender system",
    name: "GameSense",
    summary:
      "A personalized Steam game recommendation app that learns your taste from the games you list and provides explainable suggestions.",
    details: [
      "History-based matrix factorization trained in PyTorch on the real Steam dataset",
      "Explainable recommendations with 'Because you liked <game>' justifications",
      "Forgiving title search with exact, whole-word, and fuzzy matching over 993 games",
      "Instant NumPy inference with cold-start taste vector generation without retraining",
    ],
    gallery: [
      {
        image: gamesenseLandingImage,
        alt: "GameSense personalized Steam game recommender landing screen",
        title: "Personalized game discovery",
        explanation:
          "The interactive Streamlit interface lets users search, multiselect games, use quick-start picks, or hit 'Surprise me' across a catalog of 993 Steam titles.",
      },
      {
        image: gamesenseSingleGameImage,
        alt: "GameSense single game recommendation results with explanations",
        title: "Taste vector generation & explanation",
        explanation:
          "Selecting a game constructs an instant taste vector, returning ranked recommendations paired with player counts and explainable 'Because you liked' attribution.",
      },
      {
        image: gamesenseMultipleGamesImage,
        alt: "GameSense multiple games taste modeling and ranked recommendations",
        title: "Multi-game taste aggregation",
        explanation:
          "Combining preferences across multiple titles refines the latent taste representation, generating cohesive multi-game recommendations with CSV export and theme switching.",
      },
    ],
    stack: ["Python", "PyTorch", "NumPy", "pandas", "Streamlit", "pytest"],
    href: "https://gamesense-v2.streamlit.app/",
    linkLabel: "Live demo",
    repo: "https://github.com/AhsanCS64/GameSenseV2",
    kind: "recommender",
  },

  {
    number: "08",
    type: "Machine learning · Recipe recommender",
    name: "Scarlet Dish",
    logo: scarletDishLogo,
    summary:
      "A recipe discovery app that recommends dishes from nearly 10,000 South Asian recipes using the ingredients you have on hand and Bangladesh's seasons. It also surfaces similar recipes and builds cross-cuisine adaptation plans that preserve a dish's defining elements.",
    details: [
      "Ingredient-to-dish recommendation across roughly 10,000 South Asian recipes",
      "Season-aware filtering tuned to Bangladesh's growing calendar",
      "Similar-recipe discovery with ranked matches",
      "Cross-cuisine adaptation plans that keep each dish's defining flavors intact",
    ],
    gallery: [
      {
        image: scarletDishHomeImage,
        alt: "Scarlet Dish recipe discovery home screen",
        title: "Recipe discovery",
        explanation: "The entry point to browsing and searching the South Asian recipe collection.",
      },
      {
        image: scarletDishPantryImage,
        alt: "Scarlet Dish pantry ingredient selection",
        title: "Pantry input",
        explanation: "Users select the ingredients they have available to ground the recommendations in what's on hand.",
      },
      {
        image: scarletDishPantryResultsImage,
        alt: "Scarlet Dish pantry-to-plate results",
        title: "Pantry-to-plate results",
        explanation: "Dishes are ranked by how well they match the supplied ingredients and the current season.",
      },
      {
        image: scarletDishSimilarDishesImage,
        alt: "Scarlet Dish similar-recipe browser",
        title: "Similar dishes",
        explanation: "Recipes with overlapping ingredients and technique are surfaced alongside each dish.",
      },
      {
        image: scarletDishSimilarResultsImage,
        alt: "Scarlet Dish similar recipe matches",
        title: "Similar recipe matches",
        explanation: "Ranked alternatives let users explore variations on a dish they already like.",
      },
      {
        image: scarletDishTargetCuisinesImage,
        alt: "Scarlet Dish target cuisine selection",
        title: "Target cuisines",
        explanation: "A cuisine target guides cross-cuisine adaptation toward a chosen flavor profile.",
      },
      {
        image: scarletDishAdaptImage,
        alt: "Scarlet Dish adapt-a-dish setup",
        title: "Adapt a dish",
        explanation: "The adaptation workflow pairs a source recipe with a target cuisine.",
      },
      {
        image: scarletDishKoreanShakshukaImage,
        alt: "Scarlet Dish Korean-inspired shakshuka adaptation",
        title: "Korean-inspired shakshuka",
        explanation: "A sample cross-cuisine adaptation showing how a dish travels across flavor traditions.",
      },
      {
        image: scarletDishAdaptedMethodImage,
        alt: "Scarlet Dish adapted ingredients and method",
        title: "Adapted ingredients & method",
        explanation: "The final plan lists substituted ingredients and the adjusted cooking method.",
      },
    ],
    stack: ["Python", "Streamlit", "pandas", "scikit-learn"],
    href: "https://scarlet-dish.streamlit.app/",
    linkLabel: "Live demo",
    repo: "https://github.com/AhsanCS64/Scarlet-Dish",
    kind: "recipe",
  },
];

export const achievements = [
  {
    number: "01",
    recognition: "CGPA: 3.76",
    title: "2nd Highest CGPA",
    context: "Department fo Computer Science and Engineering · Faculty of Engineering and Technology · Dhaka University",
    logo: dhakaUniversityLogo,
    logoSize: "large",
    markLabel: "NATIONAL INSTITUTE OF TEXTILE ENGINEERING AND RESEARCH",
  },
  {
    number: "02",
    recognition: "4th Place",
    title: "National AI and Machine Learning Competition",
    context: "Senior level · BUBT",
    logo: bubtLogo,
    markLabel: "Data Science Club",
  },
  {
    number: "03",
    recognition: "5th Position",
    title: "NITER Innovate Hackathon",
    context: "Intra-University · NITER",
    logo: nccLogo,
    markLabel: "NITER Computer Club",
  },

  {
    number: "04",
    recognition: "GPA 5.00",
    title: "Higher Secondary Certificate (HSC)",
    context: "Dhaka Board · Ministry Of Education, Bangladesh",
    logo: dhakaBoardLogo,
    markLabel: "Dhaka Education Board",
  },
];

export const extracurricularRoles = [
  {
    number: "01",
    role: "Organizing Secretary",
    organization: "NITER Science Society",
    organizationUrl: "https://www.linkedin.com/company/niter-science-society-nss/posts/",
    logo: nssLogo,
    period: "July 2026 – Present",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Organized inter-university quiz contests, seminars, and workshops.",
      "Prepared questions and checked solutions.",
    ],
  },
  {
    number: "02",
    role: "Deputy Treasurer",
    organization: "NITER Computer Club",
    organizationUrl: "https://www.linkedin.com/company/niter-computer-club-ncc/home/",
    logo: nccLogo,
    period: "Jan 2025 – Mar 2026",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Managed financial records, budgets, and sponsorship.",
      "Collaborated with executive members on fund allocation.",
    ],
  },
  {
    number: "03",
    role: "Senior Executive",
    organization: "NITER Computer Club",
    organizationUrl: "https://www.linkedin.com/company/niter-computer-club-ncc/home/",
    logo: nccLogo,
    period: "Jan 2024 – Dec 2025",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Organized inter-university programming contests and seminars.",
      "Coordinated communication among club members.",
    ],
  },
];

export const educationHistory = [
  {
    number: "01",
    kind: "school",
    level: "Primary Education",
    institution: "Willes Little Flower School and College",
    affiliation: "English Medium Section",
    logo: willesLogo,
    photo: willesPhoto,
    period: "Nursery – Standard 6",
    location: "Dhaka, Bangladesh",
    notes: [
      "Followed the English-medium curriculum from Nursery through Standard 6.",
      "Early foundation in English language, science, and mathematics.",
      "Built strong literacy and analytical skills in a structured English-medium environment.",
    ],
  },
  {
    number: "02",
    kind: "school",
    level: "Secondary Education (S.S.C)",
    institution: "Willes Little Flower School and College",
    affiliation: "English Version · Dhaka Board",
    logo: willesLogo,
    photo: willesPhoto,
    result: "GPA 4.72",
    period: "Class 7 - S.S.C (2019)",
    location: "Dhaka, Bangladesh",
    notes: [
      "Transitioned from English Medium to the English Version stream of the same institution.",
      "Completed the Secondary School Certificate (S.S.C) under the Dhaka Education Board.",
      "Achieved GPA 4.72 — a strong foundation across science subjects.",
    ],
  },
  {
    number: "03",
    kind: "college",
    level: "Higher Secondary Education (H.S.C)",
    institution: "BAF Shaheen College Kurmitola",
    affiliation: "Dhaka Board · English Version · Science",
    logo: bafskLogo,
    photo: bafskPhoto,
    result: "GPA 5.00",
    period: "2019 – 2021",
    location: "Kurmitola, Dhaka, Bangladesh",
    notes: [
      "Attended one of Bangladesh's premier cadet-affiliated colleges.",
      "Completed the Higher Secondary Certificate (H.S.C) in the Science stream.",
      "Achieved a perfect GPA of 5.00 out of 5.00.",
    ],
  },
  {
    number: "04",
    kind: "university",
    level: "B.Sc in Computer Science & Engineering",
    institution: "National Institute of Textile Engineering and Research (NITER)",
    affiliation: "Constituent College · University of Dhaka · Technology Unit",
    logo: niterLogo,
    photo: dhakaUniversityLogo,
    photoSecondary: niterPhoto,
    result: "CGPA 3.76",
    period: "2022 – Present",
    location: "Nayarhat, Savar, Dhaka, Bangladesh",
    notes: [
      "Admitted through the Technology Unit entrance examination of the University of Dhaka.",
      "NITER is a constituent college of the University of Dhaka — degrees are awarded by the University.",
      "Maintaining a CGPA of 3.76 / 4.00 through six completed semesters — 2nd highest in the department.",
      "Focus areas: machine learning, deep learning, NLP, full-stack development, and software engineering.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Software engineering",
    index: "01",
    icon: "code",
    skills: ["JavaScript", "React", "Node.js", "Express", "PHP", "REST APIs", "Git"],
  },
  {
    title: "Machine learning",
    index: "02",
    icon: "model",
    skills: ["Python", "scikit-learn", "XGBoost", "Feature engineering", "Model evaluation"],
  },
  {
    title: "Deep Learning, Image Processing & NLP",
    index: "03",
    icon: "neural",
    skills: ["Image Processing", "Computer Vision", "Contrastive Learning", "PyTorch", "TensorFlow / Keras", "CNNs", "Transformers", "Bangla NLP"],
  },
  {
    title: "Data & databases",
    index: "04",
    icon: "data",
    skills: ["SQL", "MongoDB", "MySQL", "Pandas", "NumPy", "Power BI"],
  },
];

export const credentials = [
  {
    title: "IBM Data Science Professional Certificate",
    provider: "IBM · Coursera",
    note: "Data science · Python · SQL · machine learning",
    certificate: ibmDataScienceCertificateUrl,
    verificationUrl: "https://www.coursera.org/account/accomplishments/professional-cert/WONVSK7AXK14",
  },
  {
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI · Stanford Online",
    note: "Supervised learning · neural networks · reinforcement learning",
    certificate: machineLearningCertificateUrl,
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/BMUJJZF86X8W",
  },
  {
    title: "Deep Learning Specialization",
    provider: "DeepLearning.AI · Coursera",
    note: "Deep neural networks · computer vision · sequence models",
    certificate: deepLearningCertificateUrl,
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/0XXI95BCSCB6",
  },
  {
    title: "PyTorch for Deep Learning",
    provider: "Coursera",
    note: "PyTorch · advanced architectures · model deployment",
    certificate: pytorchCertificateUrl,
    verificationUrl: "https://www.coursera.org/account/accomplishments/professional-cert/AKKNOEB1ZK53",
  },
];

export const additionalLearning = [
  {
    title: "Getting Started with Git and GitHub",
    provider: "IBM · Coursera",
    href: "https://www.coursera.org/learn/getting-started-with-git-and-github",
  },
  { title: "IBM Introduction to Data Science" },
  { title: "IBM Applied Data Science" },
  { title: "IBM Databases and SQL" },
  { title: "IBM Data Visualization with Python" },
  { title: "IBM Deep Learning with Keras" },
  { title: "Google AI Essentials" },
  { title: "Power Query · Power BI" },
];

export const navItems = [
  { to: "/", label: "Overview", end: true },
  { to: "/home", label: "Home", end: true },
  { to: "/work", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/learning", label: "Learning" },
  { to: "/research", label: "Research" },
  { to: "/cv", label: "CV" },
  { to: "/achievements", label: "Achievements" },
  { to: "/eca", label: "ECA" },
  { to: "/contact", label: "Contact" },
];

export const pageVariants = {
  initial: { opacity: 0, y: 22, filter: "blur(5px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(3px)",
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
};

export { mlCvUrl, academicCvUrl, onePageCvUrl, portraitUrl };
