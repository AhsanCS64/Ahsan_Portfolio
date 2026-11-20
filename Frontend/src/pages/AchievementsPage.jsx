import { Link } from "react-router-dom";
import { achievements } from "../data/portfolio.js";
import { ArrowIcon, PageIntro, Reveal } from "../components/shared.jsx";
import BeecrowdShowcase from "../components/BeecrowdShowcase.jsx";


export default function AchievementsPage() {
  return (
    <div className="inner-page achievements-page">
      <div className="page-wrap">
        <PageIntro
          number="06"
          eyebrow="Achievements / competitions / problem solving"
          title={<>Progress through<br /><em>practice.</em></>}
          copy="Academic milestones, competition results, and problem-solving progress built through consistent study, experimentation, and teamwork."
        />
        <section aria-label="Academic and competition achievements">
          <div className="activities-section-label">
            <span>01 / ACADEMICS &amp; COMPETITIONS</span>
            <span>{String(achievements.length).padStart(2, "0")} RECOGNITIONS</span>
          </div>
          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.number} delay={index * 0.06}>
                <article className="achievement-card">
                  {achievement.logo ? (
                    <div className={`achievement-card__logo${achievement.logoSize === "large" ? " achievement-card__logo--large" : ""}`}>
                      <img src={achievement.logo} alt="" />
                    </div>
                  ) : (
                    <span className="achievement-card__mark" aria-hidden="true">
                      {achievement.mark}
                    </span>
                  )}
                  <div className="achievement-card__topline">
                    <span>{achievement.number} / RECOGNITION</span>
                    <span aria-hidden="true">✳</span>
                  </div>
                  <p className="achievement-card__result">{achievement.recognition}</p>
                  <h2>{achievement.title}</h2>
                  <p className="achievement-card__context">
                    {achievement.context}
                    <span>{achievement.markLabel}</span>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <BeecrowdShowcase />
        <div className="page-end-link">
          <span>Outside competitions, too</span>
          <Link to="/eca">Explore my extracurricular experience <ArrowIcon /></Link>
        </div>
      </div>
    </div>
  );
}
