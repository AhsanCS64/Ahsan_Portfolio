import { readingGroups } from "../data/research.js";
import "../styles/research.css";

const statuses = {
  read: "Read",
  implemented: "Read & initially implemented",
  discussed: "Discussed",
  target: "Yet to read",
};

const papers = readingGroups.flatMap((group) => group.papers);
const totals = [
  ["Papers", papers.length],
  ["Read", papers.filter((p) => ["read", "implemented"].includes(p.status)).length],
  ["Initially implemented", papers.filter((p) => p.status === "implemented").length],
  ["Reading targets", papers.filter((p) => p.status === "target").length],
];

function ReadingSection({ group }) {
  return (
    <section className="research-section" aria-labelledby={group.id}>
      <header>
        <h2 id={group.id}>{group.title}</h2>
        <p>{group.intro}</p>
      </header>
      <ul className="research-papers">
        {group.papers.map((paper) => (
          <li key={paper.name}>
            <div className="research-paper-meta">
              <span>{paper.name} · {paper.year}</span>
              <span className={`research-status research-status--${paper.status}`}>{statuses[paper.status]}</span>
            </div>
            <h3><a href={paper.url} target="_blank" rel="noreferrer">{paper.title}</a></h3>
            <p>{paper.focus}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ResearchPage() {
  return (
    <div className="inner-page research-page">
      <div className="page-wrap">
        <div className="research-opening">
          <header className="research-intro">
            <span className="research-label">Research &amp; paper reading journey</span>
            <h1>Learning across<br /><em>vision &amp; language.</em></h1>
            <p>I’m exploring how contrastive and self-supervised learning shape what an embedding captures. My current question is how a model connects a phrase in a radiology report to the part of a chest X-ray it describes.</p>
            <p>My wider research interests include image processing, Bangla NLP, and understanding which features drive a model’s predictions.</p>
          </header>
          <aside className="research-feature" aria-labelledby="gloria-milestone">
            <span className="research-label">First medical implementation</span>
            <h2 id="gloria-milestone">GLoRIA</h2>
            <p>I ran my initial implementation on Kaggle to explore alignment at two scales, from a whole image and its report down to individual regions and words.</p>
            <time dateTime="2026-11-23">Initial run · November 23, 2026</time>
            <div className="research-resources">
              <a href="https://www.kaggle.com/code/hmashanhabibkushal/contrastive-learning-gloria/edit/run/372531517" target="_blank" rel="noreferrer">My Kaggle run</a>
              <a href="https://github.com/marshuang80/gloria" target="_blank" rel="noreferrer">Original code</a>
            </div>
          </aside>
        </div>
        <section className="research-supervisor" aria-labelledby="research-supervisor">
          <div>
            <h2 id="research-supervisor">Research supervisor</h2>
            <p><strong>Shakila Shafiq</strong></p>
            <p>Lecturer, Department of Computer Science &amp; Engineering, NITER</p>
          </div>
          <div className="research-resources">
            <a href="https://niter.edu.bd/department/faculty/shakila-shafiq/" target="_blank" rel="noreferrer">Faculty profile</a>
            <a href="https://www.linkedin.com/in/shakila-shafiq-4b591625a/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
        <dl className="research-totals" aria-label="Reading progress">
          {totals.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        {readingGroups.map((group) => <ReadingSection key={group.id} group={group} />)}
      </div>
    </div>
  );
}
