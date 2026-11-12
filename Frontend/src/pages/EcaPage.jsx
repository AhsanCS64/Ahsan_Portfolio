import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { extracurricularRoles } from "../data/portfolio.js";
import { ArrowIcon, PageIntro, Reveal } from "../components/shared.jsx";

export default function EcaPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="inner-page eca-page">
      <div className="page-wrap">
        <PageIntro
          number="07"
          eyebrow="Extra-curricular activities / experience"
          title={<>Working together<br />beyond <em>the classroom.</em></>}
          copy="Roles in student organizations have given me ways to contribute, coordinate events, and support the communities I learn with."
        />
        <section aria-label="Student organization experience">
          <div className="activities-section-label">
            <h2>    Extra Curricular Activities</h2>
            <span>{String(extracurricularRoles.length).padStart(2, "0")} ROLES</span>
          </div>
          <ol className="eca-timeline">
            {extracurricularRoles.map((item, index) => (
              <li className="eca-role" key={item.number}>
                <Reveal className="eca-role__club-mark" delay={index * 0.06}>
                  <img src={item.logo} alt="" />
                  <span>{item.number}</span>
                </Reveal>
                <div className="eca-role__identity">
                  <span className="eca-role__number">{item.number} / ROLE</span>
                  <h2>{item.role}</h2>
                  <a
                    className="eca-role__organization"
                    href={item.organizationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.organization}
                    <ArrowIcon diagonal />
                  </a>
                  <div className="eca-role__meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                </div>
                <ul className="eca-role__responsibilities">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
        <div className="page-end-link">
          <span>Recognitions along the way</span>
          <Link to="/achievements">See selected achievements <ArrowIcon /></Link>
        </div>
      </div>
    </div>
  );
}
