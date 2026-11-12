import extendedCvUrl from "../../CV/Kushal_Multipager.pdf?url";
import onePageCvUrl from "../../CV/onepager.pdf?url";
import portraitUrl from "../../Photo/kushal.jpg";
import pytorchCertificateUrl from "../../Certifications/PyTorch Deep Learning Prof Cert.png";
import ibmDataScienceCertificateUrl from "../../Certifications/IBM Data Science Professional Certificate.png";
import machineLearningCertificateUrl from "../../Certifications/Machine Learning Specialization.png";
import deepLearningCertificateUrl from "../../Certifications/DeepLearning_Specialization.png";
import khamarbariHomeImage from "../../Photo/Projects/Khamarbari_home.png";
import khamarbariDashboardImage from "../../Photo/Projects/khamarbari_dashboard.png";
import khamarbariAnimalManagementImage from "../../Photo/Projects/Khamarbari_AnimalManagement.png";
import khamarbariProductionsImage from "../../Photo/Projects/khamarbari_productions.png";

export const projects = [
  {
    number: "01",
    type: "Full-stack · Web application",
    name: "Khamar-Bari",
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
    number: "02",
    type: "Machine learning · Bangla NLP",
    name: "HeadlineGuard BD",
    summary:
      "An experimental study of machine-learning approaches to identifying clickbait in Bangla headlines.",
    details: [
      "Compared TF-IDF, recurrent, and transformer approaches",
      "Character n-gram TF-IDF + LinearSVC baseline",
      "79.83% baseline accuracy · 77.86% macro F1",
    ],
    gallery: [],
    galleryNote: "Research visuals and model comparisons are coming soon.",
    stack: ["Python", "scikit-learn", "XGBoost", "BanglaBERT"],
    href: "https://huggingface.co/datasets/Motahar/banglabait",
    linkLabel: "Dataset",
    kind: "research",
  },
  {
    number: "03",
    type: "Database systems · Academic project",
    name: "CMRX",
    summary:
      "A central medical-records and disease-tracking system built around structured healthcare information.",
    details: [
      "Patient, diagnosis, and prescription records",
      "Hospital and vaccination management",
      "Relational data model with generated medical IDs",
    ],
    gallery: [],
    galleryNote: "Project screenshots are being prepared and will appear here soon.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    href: "https://github.com/AhsanCS64/CMR-DT",
    linkLabel: "Source code",
    kind: "medical",
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
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/learning", label: "Learning" },
  { to: "/cv", label: "CV" },
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
