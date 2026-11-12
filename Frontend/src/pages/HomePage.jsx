import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { portraitUrl, projects } from "../data/portfolio.js";
import { ArrowIcon, ResearchVisualization, Reveal, SectionHeading } from "../components/shared.jsx";
import AtmosphericBackdrop from "../components/home/AtmosphericBackdrop.jsx";
import CursorNeuralTrail from "../components/home/CursorNeuralTrail.jsx";
import MoodSelector from "../components/home/MoodSelector.jsx";
import ProjectGallery from "../components/ProjectGallery.jsx";
import SkillConstellation from "../components/home/SkillConstellation.jsx";

function getBangladeshAtmosphere() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = parts.find((part) => part.type === "minute")?.value;
  let mood = "dusk";

  if (hour >= 10 && hour < 15) mood = "canopy";
  else if (hour >= 15 && hour < 18) mood = "harvest";
  else if (hour >= 5 && hour < 10) mood = "morning";

  return { mood, time: `${parts.find((part) => part.type === "hour")?.value}:${minute}` };
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [autoAtmosphere, setAutoAtmosphere] = useState(getBangladeshAtmosphere);
  const [manualMood, setManualMood] = useState(null);
  const isAutoMood = manualMood === null;
  const mood = manualMood ?? autoAtmosphere.mood;
  const { scrollYProgress } = useScroll();
  const artY = useTransform(scrollYProgress, [0, 0.65], reduceMotion ? [0, 0] : [0, 80]);

  useEffect(() => {
    if (!isAutoMood) return undefined;
    const updateAtmosphere = () => setAutoAtmosphere(getBangladeshAtmosphere());
    const intervalId = window.setInterval(updateAtmosphere, 30_000);
    window.addEventListener("focus", updateAtmosphere);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", updateAtmosphere);
    };
  }, [isAutoMood]);

  const selectMood = (nextMood) => setManualMood(nextMood);
  const enableAutoMood = () => {
    setAutoAtmosphere(getBangladeshAtmosphere());
    setManualMood(null);
  };

  return (
    <div className="home-page">
      <CursorNeuralTrail mood={mood} />
      <section className="home-hero" data-mood={mood}>
        <AtmosphericBackdrop mood={mood} />
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="home-hero__frame">
          <MoodSelector
            mood={mood}
            onSelectMood={selectMood}
            isAuto={isAutoMood}
            onEnableAuto={enableAutoMood}
            bangladeshTime={autoAtmosphere.time}
          />
          <motion.div
            className="home-hero__copy"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } },
            }}
          >
            <motion.p className="eyebrow home-hero__eyebrow" variants={revealText}>
              <span className="status-dot" /> MACHINE LEARNING · DEEP LEARNING · ARTIFICIAL INTELLIGENCE · SOFTWARE · RESEARCH
            </motion.p>
            <motion.div className="home-hero__identity" variants={revealText}>
              <img src={portraitUrl} alt="" />
              <div className="home-hero__identity-copy">
                <strong>H. M. Ahsan Habib Kushal</strong>
                <span>Computer Science & Engineering Undergraduate</span>
                <span>NITER · University of Dhaka · Bangladesh</span>
              </div>
              <span className="home-hero__identity-index">DHAKA<br />23°48′ N</span>
            </motion.div>
            <h1 className="home-hero__title">
              <motion.span variants={revealText}>Ideas into</motion.span>
              <motion.span className="home-hero__serif" variants={revealText}>intelligence.</motion.span>
              <motion.span className="home-hero__last" variants={revealText}>Thoughts into technology.</motion.span>
            </h1>
            <motion.p className="home-hero__description" variants={revealText}>
              I build software, explore intelligent systems, and investigate
              ideas at the intersection of technology and research.
            </motion.p>
            <motion.div className="home-hero__actions" variants={revealText}>
              <Link className="button button--sage" to="/work">Explore selected work <ArrowIcon /></Link>
              <Link className="quiet-link" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
            </motion.div>
          </motion.div>
          <motion.div className="home-hero__art" style={{ y: artY }}>
            <ResearchVisualization reduceMotion={reduceMotion} />
          </motion.div>
          <div className="home-hero__coordinates" aria-hidden="true">
            <span>23°48′ N</span><span>FIELD STUDY / 01</span><span>LEARN · MAKE · QUESTION</span>
          </div>
          <a className="home-hero__scroll" href="#home-note">
            Scroll to begin <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="home-note page-wrap" id="home-note">
        <Reveal className="home-note__index"><span>01</span><span>THE PRACTICE</span></Reveal>
        <Reveal className="home-note__quote" delay={0.08}>
          <p>Build with intention.<br /><em>Stay curious about what’s underneath.</em></p>
        </Reveal>
        <Reveal className="home-note__copy" delay={0.16}>
          <p>
            I’m a computer science undergraduate at NITER, University of Dhaka,
            learning through practical software, machine-learning experiments,
            and research-minded questions.
          </p>
          <Link className="inline-link" to="/about">More about my approach <ArrowIcon diagonal /></Link>
        </Reveal>
      </section>

      <SkillConstellation />

      <section className="home-work">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="A few things in motion"
            title={<>From working software<br />to open questions.</>}
            copy="Selected projects across application development, Bangla NLP, and data systems."
          />
          <div className="home-project-grid">
            {projects.map((project, index) => (
              <Reveal className={`home-project home-project--${project.kind}`} key={project.number} delay={index * 0.08}>
                <span className="home-project__index">{project.number} / {project.type}</span>
                <ProjectGallery project={project} />
                <div className="home-project__content">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <Link to="/work" className="home-project__link" aria-label={`Read about ${project.name} on the Work page`}>
                    Explore project <ArrowIcon diagonal />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Link className="button button--outline" to="/work">See all selected work <ArrowIcon /></Link>
        </div>
      </section>

      <section className="home-next">
        <div className="page-wrap home-next__inner">
          <p className="eyebrow">A living notebook, not a finished story</p>
          <h2>There’s always<br /><em>more to learn.</em></h2>
          <Link className="button button--sage" to="/learning">Explore learning & credentials <ArrowIcon /></Link>
        </div>
      </section>
    </div>
  );
}

const revealText = {
  hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};
