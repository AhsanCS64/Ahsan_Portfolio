import { Link } from "react-router-dom";
import { educationHistory } from "../data/portfolio.js";
import { ArrowIcon, PageIntro, Reveal } from "../components/shared.jsx";

export default function EducationPage() {
  return (
    <div className="inner-page education-page">
      <div className="page-wrap">
        <PageIntro
          number="04"
          eyebrow="Education / academic background"
          title={<>English-medium.<br /><em>Science-rooted.</em></>}
          copy="Schooled entirely in English - first English Medium, then English Version - through S.S.C and H.S.C in the Science stream. Strong written and spoken English, analytical thinking, and a problem-solving orientation carried forward into engineering and AI."
        />

        <section aria-label="Educational institutions">
          <div className="activities-section-label">
            <span>ACADEMIC JOURNEY</span>
            <span>{String(educationHistory.length).padStart(2, "0")} INSTITUTIONS</span>
          </div>

          <ol className="edu-timeline">
            {educationHistory.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.07}>
                <li className={`edu-entry edu-entry--${item.kind}`}>

                  {/* Institution photo */}
                  <div className="edu-entry__photo-wrap">
                    {item.photoSecondary ? (
                      <div className="edu-entry__dual-logos">
                        <div className="edu-entry__dual-logo-bg">
                          <img
                            className="edu-entry__photo edu-entry__photo--dual"
                            src={item.photo}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <span className="edu-entry__dual-divider" aria-hidden="true" />
                        <img
                          className="edu-entry__photo edu-entry__photo--dual"
                          src={item.photoSecondary}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    ) : item.photo ? (
                      <img
                        className="edu-entry__photo"
                        src={item.photo}
                        alt={`${item.institution} campus`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="edu-entry__photo edu-entry__photo--placeholder" />
                    )}
                    <div className="edu-entry__photo-shade" />
                    <span className="edu-entry__index-tag">
                      {String(index + 1).padStart(2, "0")} / {item.level}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="edu-entry__body">
                    <div className="edu-entry__header">
                      <div className="edu-entry__logo-wrap">
                        <img src={item.logo} alt="" loading="lazy" />
                      </div>
                      <div>
                        <p className="edu-entry__level">{item.level}</p>
                        <h2 className="edu-entry__institution">{item.institution}</h2>
                        {item.affiliation && (
                          <p className="edu-entry__affiliation">{item.affiliation}</p>
                        )}
                      </div>
                    </div>

                    <div className="edu-entry__meta">
                      {item.period && <span>{item.period}</span>}
                      {item.location && <span>{item.location}</span>}
                      {item.result && (
                        <span className="edu-entry__result">{item.result}</span>
                      )}
                    </div>

                    <ul className="edu-entry__notes">
                      {item.notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </div>

                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <div className="page-end-link">
          <span>See what I've built</span>
          <Link to="/work">Explore my projects <ArrowIcon /></Link>
        </div>
      </div>
    </div>
  );
}
