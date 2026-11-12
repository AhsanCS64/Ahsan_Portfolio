import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skillDomains } from "../../data/skillDomains.js";

export default function SkillConstellation() {
  const [activeDomainId, setActiveDomainId] = useState(skillDomains[0].id);
  const [activeSkillName, setActiveSkillName] = useState(skillDomains[0].skills[0].name);
  const reduceMotion = useReducedMotion();
  const domain = skillDomains.find((item) => item.id === activeDomainId) ?? skillDomains[0];
  const skill = domain.skills.find((item) => item.name === activeSkillName) ?? domain.skills[0];
  const skillIndex = domain.skills.indexOf(skill);

  const selectDomain = (nextDomain) => {
    setActiveDomainId(nextDomain.id);
    setActiveSkillName(nextDomain.skills[0].name);
  };

  return (
    <section className="skill-constellation" aria-labelledby="skill-constellation-title">
      <header className="skill-constellation__heading">
        <div>
          <span className="eyebrow">Knowledge map · continuously evolving</span>
          <h2 id="skill-constellation-title">Connected by <em>curiosity.</em></h2>
        </div>
        <p>
          An interactive map of the technologies, concepts and research areas
          I have studied, explored and applied.
        </p>
      </header>

      <div className="skill-constellation__workspace">
        <aside className="skill-constellation__sidebar" aria-label="Skill disciplines">
          <div className="skill-constellation__sidebar-label">
            <span>DISCIPLINES</span>
            <span>{String(skillDomains.length).padStart(2, "0")}</span>
          </div>
          <div className="skill-constellation__domains">
            {skillDomains.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`skill-domain-button${domain.id === item.id ? " is-active" : ""}`}
                onClick={() => selectDomain(item)}
                aria-pressed={domain.id === item.id}
              >
                <span className="skill-domain-button__number">{item.number}</span>
                <span className="skill-domain-button__symbol" aria-hidden="true">{item.symbol}</span>
                <span className="skill-domain-button__name">{item.title}</span>
                <span className="skill-domain-button__arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div className="skill-constellation__legend">
            <span className="skill-legend-dot" aria-hidden="true" />
            SELECT A DISCIPLINE TO EXPLORE
          </div>
        </aside>

        <div className="skill-constellation__main">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={domain.id}
              className="skill-map"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.24 }}
            >
              <div className="skill-map__header">
                <div>
                  <span className="skill-map__index">DOMAIN / {domain.number}</span>
                  <h3>{domain.title}</h3>
                  <p>{domain.subtitle}</p>
                </div>
                <span className="skill-map__count">
                  {String(domain.skills.length).padStart(2, "0")} NODES
                </span>
              </div>

              <div className="skill-map__network">
                <div className="skill-map__root" aria-hidden="true">
                  <span className="skill-map__root-orbit" />
                  <span className="skill-map__root-core">{domain.symbol}</span>
                  <span className="skill-map__root-label">KNOWLEDGE NODE</span>
                </div>
                <div className="skill-map__connector" aria-hidden="true" />
                <div className="skill-map__nodes" aria-label={`${domain.title} skills`}>
                  {domain.skills.map((item, index) => (
                    <motion.button
                      type="button"
                      key={item.name}
                      className={`skill-node${skill.name === item.name ? " is-selected" : ""}`}
                      onClick={() => setActiveSkillName(item.name)}
                      aria-pressed={skill.name === item.name}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: reduceMotion ? 0 : index * 0.025, duration: reduceMotion ? 0 : 0.2 }}
                    >
                      <span className="skill-node__pulse" aria-hidden="true" />
                      <span>{item.name}</span>
                      <span className="skill-node__index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <section className="skill-detail" aria-labelledby="skill-detail-title" aria-live="polite">
                <div className="skill-detail__top">
                  <span>SELECTED KNOWLEDGE NODE</span>
                  <span>{domain.number} / {String(skillIndex + 1).padStart(2, "0")}</span>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={skill.name}
                    className="skill-detail__content"
                    initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  >
                    <div className="skill-detail__title-row">
                      <h4 id="skill-detail-title">{skill.name}</h4>
                      <span className="skill-detail__status">{skill.level}</span>
                    </div>
                    <p>{skill.detail}</p>
                  </motion.div>
                </AnimatePresence>
              </section>
              <p className="skill-map__description">{domain.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <footer className="skill-constellation__footer">
        <span>NOT A PROFICIENCY RANKING</span>
        <span>A SNAPSHOT OF AN EVOLVING LEARNING JOURNEY <span aria-hidden="true">↗</span></span>
      </footer>
    </section>
  );
}
