
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { additionalLearning, credentials, skillGroups } from "../data/portfolio.js";
import {
  ArrowIcon,
  PageIntro,
  Reveal,
  SectionHeading,
} from "../components/shared.jsx";

export default function LearningPage() {
  const [showAllLearning, setShowAllLearning] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="inner-page learning-page">
      <div className="page-wrap">

        {/* ─── 01. INTRODUCTION ─────────────────────────────── */}

        <PageIntro
          number="04"
          eyebrow="Learning / foundations & practice"
          title={<>Knowledge grows<br />when it’s <em>put to work.</em></>}
          copy="Formal study, structured courses, and independent experiments all add to the same evolving toolkit."
        />

        {/* ─── 02. FORMAL EDUCATION ──────────────────────────── */}

        <section className="education-section">

          <div className="learning-section-label">
            <span>01 / FORMAL EDUCATION</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <div className="education-feature">

            <Reveal className="education-card">
              <div className="education-card__top">
                <span className="education-card__label">
                  Academic record · Bangladesh
                </span>
                <span className="education-card__mark" aria-hidden="true">
                  CSE
                </span>
              </div>

              <div className="education-card__main">
                <span className="education-card__symbol" aria-hidden="true">
                  ✳
                </span>

                <h2>
                  Computer Science
                  <br />
                  & Engineering
                </h2>

                <p>
                  National Institute of Textile Engineering and Research
                </p>

                <span className="education-card__affiliation">
                  Affiliated with the University of Dhaka
                </span>
              </div>

              <div className="education-card__footer">
                <span>Undergraduate education</span>
                <span>NITER · DU</span>
              </div>
            </Reveal>

            <Reveal className="education-note" delay={0.1}>
              <span className="eyebrow">Academic direction</span>

              <h2>
                Building from
                <br />
                <em>first principles.</em>
              </h2>

              <p>
                My academic journey combines computer science fundamentals
                with an increasing interest in intelligent systems,
                machine learning, and research.
              </p>

              <p>
                Beyond coursework, I use independent study and practical
                experimentation to deepen my understanding and explore
                questions that extend beyond the classroom.
              </p>

              <div className="education-note__foot">
                <span>Computer Science</span>
                <span>Research</span>
                <span>Applied AI</span>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ─── 03. LEARNING DOMAINS ──────────────────────────── */}

        <section className="learning-domains">

          <SectionHeading
            eyebrow="02 / AREAS OF STUDY"
            title={<>A growing body<br />of <em>knowledge.</em></>}
            copy="The subjects and technical foundations I've explored through academic study, structured learning, and hands-on work."
          />

          <div className="learning-domains__grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className="learning-domain"
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
              >
                <div className="learning-domain__top">
                  <span>{group.index}</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <h3>{group.title}</h3>

                <div className="learning-domain__skills">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

        </section>

        {/* ─── 04. SELECTED CREDENTIALS ──────────────────────── */}

        <section className="credentials-section">

          <div className="credentials-section__top">
            <div>
              <span className="eyebrow">03 / STRUCTURED LEARNING</span>
              <h2>
                Study, then
                <br />
                <em>experiment.</em>
              </h2>
              <p>
                Selected professional programs and technical certifications
                that have contributed to my learning journey.
              </p>
            </div>

            <div className="credentials-section__count">
              <strong>
                {String(credentials.length).padStart(2, "0")}
              </strong>
              <span>SELECTED<br />CREDENTIALS</span>
            </div>
          </div>

          <div className="credential-grid">
            {credentials.map((credential, index) => (
              <motion.article
                className="credential-card"
                key={credential.title}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -6, rotate: index % 2 ? -0.35 : 0.35 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : (index % 2) * 0.08,
                }}
              >
                <div className="credential-card__top">
                  <span className="credential-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="credential-card__type">
                    CERTIFICATE
                  </span>
                </div>

                <a
                  className="credential-card__image-link"
                  href={credential.certificate}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${credential.title} certificate`}
                >
                  <img
                    src={credential.certificate}
                    alt={`${credential.title} certificate`}
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <div className="credential-card__body">
                  <span className="credential-card__provider">
                    {credential.provider}
                  </span>

                  <h3>{credential.title}</h3>

                  <p>{credential.note}</p>

                  <a
                    className="credential-card__verify"
                    href={credential.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify credential <ArrowIcon diagonal />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Additional training archive */}

          <div className="additional-learning">
            <button
              className="additional-learning__toggle"
              type="button"
              aria-expanded={showAllLearning}
              aria-controls="additional-learning-list"
              onClick={() => setShowAllLearning((show) => !show)}
            >
              <span className="additional-learning__title">
                <span>04</span>
                <span>
                  <strong>Additional learning & training </strong>

                </span>
              </span>

              <span
                className={
                  showAllLearning
                    ? "toggle-plus is-open"
                    : "toggle-plus"
                }
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {showAllLearning && (
                <motion.ul
                  className="additional-learning__list"
                  id="additional-learning-list"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, height: 0 }
                  }
                  animate={{ opacity: 1, height: "auto" }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, height: 0 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                  }}
                >
                  {additionalLearning.map((item) => (
                    <li key={item.title}>
                      <span className="additional-learning__marker" aria-hidden="true" />
                      <span className="additional-learning__copy">
                        <strong>{item.title}</strong>
                        {item.provider && <small>{item.provider}</small>}
                      </span>
                      {item.href && (
                        <a
                          className="additional-learning__link"
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${item.title} on Coursera`}
                        >
                          Course details <ArrowIcon diagonal />
                        </a>
                      )}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

        </section>

        {/* ─── 05. PAGE END ──────────────────────────────────── */}

        <div className="page-end-link">
          <span>Need my background at a glance?</span>
          <Link to="/cv">
            Choose a CV format <ArrowIcon />
          </Link>
        </div>

      </div>
    </div>
  );
}
