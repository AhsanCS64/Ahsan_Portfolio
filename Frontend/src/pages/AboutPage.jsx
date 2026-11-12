import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { portraitUrl, skillGroups } from "../data/portfolio.js";
import { ArrowIcon, PageIntro, Reveal, SectionHeading } from "../components/shared.jsx";
import SkillIcon from "../components/SkillIcon.jsx";

const researchAreas = [
  { number: "01", kind: "network", title: "Intelligent systems", detail: "Machine learning · deep learning · AI engineering" },
  { number: "02", kind: "language", title: "Language & meaning", detail: "Natural language processing · Bangla NLP · transformers" },
  { number: "03", kind: "vision", title: "Seeing & sensing", detail: "Computer vision · signal processing · multimodal learning" },
  { number: "04", kind: "layers", title: "Learning to learn", detail: "Representation learning · contrastive learning · robust evaluation" },
];

function ResearchAreaIcon({ kind }) {
  const iconPaths = {
    network: <><path d="m5 7 7 5 7-5M5 17l7-5 7 5" /><circle cx="5" cy="7" r="2" /><circle cx="19" cy="7" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="5" cy="17" r="2" /><circle cx="19" cy="17" r="2" /></>,
    language: <><path d="M4 5.5h16v11H11l-5 3v-3H4z" /><path d="M8 9h8M8 13h5" /></>,
    vision: <><path d="M3 12s3.2-6 9-6 9 6 9 6-3.2 6-9 6-9-6-9-6Z" /><circle cx="12" cy="12" r="2.5" /><circle cx="12" cy="12" r=".6" /></>,
    layers: <><path d="m12 4 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 16l8 4 8-4" /></>,
  };

  return (
    <svg className="interest-branch__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {iconPaths[kind]}
    </svg>
  );
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="inner-page about-page">
      <div className="page-wrap">
        <PageIntro
          number="03"
          eyebrow="A little about me"
          title={<>Good work starts<br />with <em>good questions.</em></>}
          copy="A computer science undergraduate finding my way through software engineering, machine learning, and research."
        />
        <section className="about-feature">
          <Reveal className="about-feature__portrait">
            <figure className="portrait-frame">
              <div className="portrait-frame__image-wrap">
                <img src={portraitUrl} alt="Portrait of H. M. Ahsan Habib Kushal" width="1224" height="1228" />
              </div>
              <figcaption><span>H. M. Ahsan Habib Kushal</span><span>CSE · Bangladesh</span></figcaption>
              <span className="portrait-frame__index" aria-hidden="true">FIELD NOTE 02—01</span>
            </figure>
          </Reveal>
          <Reveal className="about-feature__story" delay={0.1}>
            <span className="eyebrow">Learning by building</span>
            <h2>From the foundations up.</h2>
            <p className="about-lead">
              I’m an undergraduate Computer Science and Engineering student at
              the National Institute of Textile Engineering and Research
              (NITER), affiliated with the University of Dhaka.
            </p>
            <p>
              I enjoy understanding the ideas beneath the tools: exploring a
              technical challenge, trying different approaches, and turning
              what I learn into something useful. My work moves between
              full-stack development, machine-learning experiments, and the
              foundations of research.
            </p>
            <p>
              Meaningful growth, to me, comes from building, experimenting,
              questioning assumptions, and improving—not simply collecting
              credentials.
            </p>
          </Reveal>
        </section>
        <section className="about-interests">
          <Reveal className="about-interests__heading">
            <span className="eyebrow">The questions I’m drawn to</span>
            <h2>Curiosity has<br /><em>many branches.</em></h2>
          </Reveal>
          <div className="interest-tree">
            {researchAreas.map((area, index) => (
              <Reveal className="interest-branch" key={area.number} delay={index * 0.06}>
                <span className="interest-branch__number">{area.number}</span>
                <ResearchAreaIcon kind={area.kind} />
                <h3>{area.title}</h3>
                <p>{area.detail}</p>
                <span className="interest-branch__stem" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
          <a className="inline-link about-paper" href="https://arxiv.org/abs/2312.07353" target="_blank" rel="noreferrer">
            A paper I’m exploring <ArrowIcon diagonal />
          </a>
        </section>
        <section className="about-toolkit">
          <SectionHeading
            eyebrow="The toolkit · always evolving"
            title={<>A few ways I<br />like to <em>make sense.</em></>}
            copy="Tools and concepts I’ve studied and worked with. Depth varies by topic, and the list keeps growing."
          />
          <div className="toolkit-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className="toolkit-card"
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.07 }}
              >
                <span className="toolkit-card__number">{group.index}</span>
                <h3 className="toolkit-card__title">
                  <SkillIcon group={group.icon} />
                  {group.title}
                </h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag tag--dark" key={skill}>
                      <SkillIcon skill={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        <div className="page-end-link">
          <span>Curious about the tools I use?</span><Link to="/learning">Explore my toolkit <ArrowIcon /></Link>
        </div>
      </div>
    </div>
  );
}
