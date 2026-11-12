import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery.jsx";
import { projects } from "../data/portfolio.js";

const fieldTopics = [
  { id: "science", index: "01", label: "Science", title: "Ask. Observe. Test.", copy: "Good research begins with a better question." },
  { id: "ai", index: "02", label: "AI", title: "Intelligence, made useful.", copy: "Build systems that help people think and make." },
  { id: "ml", index: "03", label: "ML", title: "Find the signal.", copy: "Turn patterns in data into measurable insight." },
  { id: "dl", index: "04", label: "DL", title: "Learn in layers.", copy: "Explore how neural networks make representations." },
];

export function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.25 10h11.5M10 4.25 15.75 10 10 15.75" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg aria-hidden="true" className="document-icon" viewBox="0 0 32 40" fill="none">
      <path d="M5 1.5h14l8 8V38.5H5z" />
      <path d="M19 1.5v9h8M10 19h12M10 24h12M10 29h8" />
    </svg>
  );
}

export function ResearchVisualization({ reduceMotion, compact = false }) {
  const [activeTopicId, setActiveTopicId] = useState("science");
  const activeTopic = fieldTopics.find((topic) => topic.id === activeTopicId);

  return (
    <motion.div
      className={`research-visualization${compact ? " research-visualization--compact" : ""}`}
      role="group"
      aria-label="Explore science and intelligent systems"
      data-topic={activeTopic.id}
    >
      <div className="research-visualization__heading">
        <span>FIELD NOTES <span aria-hidden="true">/</span> CHOOSE A THREAD</span>
        <span className="research-visualization__live"><i /> INTERACTIVE MODEL</span>
      </div>
      <svg className="research-visualization__diagram" viewBox="0 0 600 420" fill="none" aria-hidden="true">
        <defs>
          <pattern id="research-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" stroke="#D3E5C5" strokeOpacity=".055" strokeWidth=".7" />
          </pattern>
        </defs>
        <path d="M16 12H584V408H16z" fill="url(#research-grid)" />
        <path d="M16 12H584V408H16z" stroke="#D8E7C8" strokeOpacity=".16" />
        <path d="M16 54H584" stroke="#D8E7C8" strokeOpacity=".12" />
        <path d="M34 33h6m7 0h6m7 0h6" stroke="#D8E7C8" strokeOpacity=".45" strokeLinecap="round" />
        <text x="88" y="36" fill="#D8E7C8" fillOpacity=".62" fontSize="8" letterSpacing="2">FIELD LAB / {activeTopic.index}</text>
        <text x="566" y="36" textAnchor="end" fill="#D8E7C8" fillOpacity=".45" fontSize="7" letterSpacing="1.5">AH / NITER · DHAKA</text>
        <path d="M36 76h12m-12 0v12m528-12h-12m12 0v12M36 388h12m-12 0v-12m528 12h-12m12 0v-12" stroke="#D8E7C8" strokeOpacity=".28" />
        <g
          className="research-visualization__mode research-visualization__mode--science"
          style={{ opacity: activeTopicId === "science" ? 1 : 0 }}
        >
          <path d="M82 324H520M82 114V324" stroke="#D8E7C8" strokeOpacity=".3" />
          <path d="M82 272H520M82 220H520M82 168H520" stroke="#D8E7C8" strokeOpacity=".1" strokeDasharray="3 8" />
          <path d="M96 265c34 0 35-82 69-82s35 113 70 113 34-151 69-151 35 118 70 118 34-61 70-61 36 31 62 31" className="research-visualization__signal" />
          <path d="M96 294c42 0 39-20 78-20s44 21 80 21 36-32 73-32 43 12 78 12 37-21 77-21" stroke="#D8E7C8" strokeOpacity=".26" />
          <rect x="161" y="179" width="8" height="8" className="research-visualization__sample" />
          <rect x="301" y="141" width="8" height="8" className="research-visualization__sample" />
          <rect x="440" y="259" width="8" height="8" className="research-visualization__sample" />
          <text x="82" y="350" fill="#D8E7C8" fillOpacity=".48" fontSize="7" letterSpacing="1.4">OBSERVE</text>
          <text x="520" y="350" textAnchor="end" fill="#D8E7C8" fillOpacity=".48" fontSize="7" letterSpacing="1.4">MEASURE</text>
        </g>
        <g
          className="research-visualization__mode research-visualization__mode--ai"
          style={{ opacity: activeTopicId === "ai" ? 1 : 0 }}
        >
          <path d="m126 160 105 48m-105 0 105 0m-105 48 105-48m0 0 106-42m-106 42 106 0m-106 0 106 42m0-42 105-42m-105 42 105 0m-105 0 105 42m0-42 64-20m-64 20 64 0m-64 0 64 20" className="research-visualization__network" />
          <path d="m126 160 105 48m0 0 106-42m0 0 105 42m0 0 64-20" className="research-visualization__signal" />
          <g className="research-visualization__nodes">
            <rect x="119" y="153" width="14" height="14" /><rect x="119" y="201" width="14" height="14" /><rect x="119" y="249" width="14" height="14" />
            <rect x="224" y="201" width="14" height="14" /><rect x="224" y="249" width="14" height="14" /><rect x="224" y="297" width="14" height="14" />
            <rect x="330" y="159" width="14" height="14" /><rect x="330" y="201" width="14" height="14" /><rect x="330" y="243" width="14" height="14" />
            <rect x="435" y="201" width="14" height="14" /><rect x="435" y="243" width="14" height="14" /><rect x="499" y="188" width="14" height="14" />
          </g>
          <text x="126" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">INPUT</text>
          <text x="231" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">ATTEND</text>
          <text x="337" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">REASON</text>
          <text x="442" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">RESPOND</text>
          <text x="506" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">OUT</text>
        </g>
        <g
          className="research-visualization__mode research-visualization__mode--ml"
          style={{ opacity: activeTopicId === "ml" ? 1 : 0 }}
        >
          <path d="M82 324H520M82 114V324" stroke="#D8E7C8" strokeOpacity=".3" />
          <path d="M82 272H520M82 220H520M82 168H520" stroke="#D8E7C8" strokeOpacity=".1" strokeDasharray="3 8" />
          <path d="m107 300 386-154" stroke="#D7B876" strokeOpacity=".82" strokeWidth="1.5" strokeDasharray="5 6" />
          <g className="research-visualization__samples">
            <rect x="127" y="278" width="7" height="7" /><rect x="163" y="264" width="7" height="7" /><rect x="201" y="271" width="7" height="7" />
            <rect x="231" y="239" width="7" height="7" /><rect x="264" y="245" width="7" height="7" /><rect x="301" y="218" width="7" height="7" />
            <rect x="338" y="224" width="7" height="7" /><rect x="371" y="187" width="7" height="7" /><rect x="410" y="198" width="7" height="7" />
            <rect x="449" y="160" width="7" height="7" /><rect x="481" y="170" width="7" height="7" />
          </g>
          <text x="82" y="350" fill="#D8E7C8" fillOpacity=".48" fontSize="7" letterSpacing="1.4">FEATURE SPACE</text>
          <text x="520" y="350" textAnchor="end" fill="#D8E7C8" fillOpacity=".48" fontSize="7" letterSpacing="1.4">PREDICTION</text>
        </g>
        <g
          className="research-visualization__mode research-visualization__mode--dl"
          style={{ opacity: activeTopicId === "dl" ? 1 : 0 }}
        >
          <path d="m111 168 104 22m-104 0 104 48m-104 0 104-48m-104 48 104 48m0-96 104-42m-104 42 104 48m-104 0 104 48m-104 0 104-96m0 0 104 0m-104 0 104-42m-104 42 104 42m0 0 66-21m-66 0 66 0m-66 0 66 21" className="research-visualization__network" />
          <path d="m111 190 104 48m0 0 104-48m0 0 104 0m0 0 66 21" className="research-visualization__signal" />
          <g className="research-visualization__nodes">
            <rect x="104" y="161" width="14" height="14" /><rect x="104" y="183" width="14" height="14" /><rect x="104" y="231" width="14" height="14" />
            <rect x="208" y="183" width="14" height="14" /><rect x="208" y="231" width="14" height="14" /><rect x="208" y="279" width="14" height="14" />
            <rect x="312" y="141" width="14" height="14" /><rect x="312" y="183" width="14" height="14" /><rect x="312" y="225" width="14" height="14" /><rect x="312" y="267" width="14" height="14" />
            <rect x="416" y="183" width="14" height="14" /><rect x="416" y="225" width="14" height="14" /><rect x="482" y="204" width="14" height="14" />
          </g>
          <text x="111" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">PIXELS</text>
          <text x="215" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">EMBED</text>
          <text x="319" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">LEARN</text>
          <text x="423" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">REFINE</text>
          <text x="489" y="340" textAnchor="middle" fill="#D8E7C8" fillOpacity=".55" fontSize="7" letterSpacing="1">OUT</text>
        </g>
        <text x="36" y="390" fill="#D8E7C8" fillOpacity=".42" fontSize="7" letterSpacing="1.2">LEARN · TEST · ITERATE</text>
        <text x="564" y="390" textAnchor="end" fill="#D8E7C8" fillOpacity=".42" fontSize="7" letterSpacing="1.2">DHAKA, BANGLADESH</text>
      </svg>
      <div className="research-visualization__topics" role="group" aria-label="Choose a field of interest">
        {fieldTopics.map((topic) => (
          <button
            className={`research-visualization__topic${topic.id === activeTopicId ? " is-active" : ""}`}
            key={topic.id}
            type="button"
            aria-pressed={topic.id === activeTopicId}
            onClick={() => setActiveTopicId(topic.id)}
          >
            {topic.id === activeTopicId && (
              <motion.span
                className="research-visualization__topic-surface"
                layoutId={`field-topic-${compact ? "compact" : "hero"}`}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <span className="research-visualization__topic-index">{topic.index}</span>
            <span>{topic.label}</span>
          </button>
        ))}
      </div>
      <motion.div
        className="research-visualization__insight"
        key={activeTopic.id}
        initial={reduceMotion ? false : { opacity: 0, y: 7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
        aria-live="polite"
      >
        <span className="research-visualization__insight-index">{activeTopic.index} / FIELD NOTE</span>
        <strong>{activeTopic.title}</strong>
        <span>{activeTopic.copy}</span>
      </motion.div>
    </motion.div>
  );
}

export function PageIntro({ number, eyebrow, title, copy }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.header
      className="page-intro"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="page-intro__number">{number}</span>
      <p className="eyebrow page-intro__eyebrow">
        {eyebrow}
        <IntelligenceMark />
      </p>
      <h1>{title}</h1>
      {copy && <p className="page-intro__copy">{copy}</p>}
      <span className="page-intro__rule" aria-hidden="true" />
    </motion.header>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.68, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow section-heading__eyebrow">
        {eyebrow}
        <IntelligenceMark />
      </p>
      <div className="section-heading__row">
        <h2>{title}</h2>
        {copy && <p className="section-heading__copy">{copy}</p>}
      </div>
    </div>
  );
}

function IntelligenceMark() {
  return (
    <svg className="intelligence-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7.5 12 4l7 3.5v8L12 20l-7-4.5v-8Z" />
      <path d="m5 7.5 7 4 7-4M12 11.5V20" />
      <circle cx="5" cy="7.5" r="1" />
      <circle cx="12" cy="4" r="1" />
      <circle cx="19" cy="7.5" r="1" />
      <circle cx="12" cy="11.5" r="1" />
      <circle cx="5" cy="15.5" r="1" />
      <circle cx="19" cy="15.5" r="1" />
      <circle cx="12" cy="20" r="1" />
    </svg>
  );
}

export function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={`project-card project-card--${project.kind}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, delay: reduceMotion ? 0 : (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__topline">
        <span>{project.number} / {project.type}</span>
        <span className="project-card__decor" aria-hidden="true">↗</span>
      </div>
      <div className="project-card__showcase">
        <ProjectGallery project={project} />
        <div className="project-card__body">
          <div className="project-card__intro">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <div className="project-card__links">
              {project.href && (
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.linkLabel || "Visit live project"} <ArrowIcon diagonal />
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Source code <ArrowIcon diagonal />
                </a>
              )}
            </div>
          </div>
          <div className="project-card__details">
            <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            <div className="tag-list">
              {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
