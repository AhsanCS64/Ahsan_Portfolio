import extendedCvUrl from "../../CV/Kushal_Multipager.pdf?url";
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
    title: "Deep learning & NLP",
    index: "03",
    icon: "neural",
    skills: ["PyTorch", "TensorFlow / Keras", "CNNs", "Transformers", "Bangla NLP"],
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
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/learning", label: "Learning" },
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

export { extendedCvUrl, onePageCvUrl, portraitUrl };
