import { useState } from "react";
import { ArrowIcon, Reveal } from "./shared.jsx";
import universityImage from "../../Photo/BeecrowdRanking.png";
import worldImage from "../../Photo/BeecrowdWorldRanking.png";
import "../styles/beecrowd.css";

const standings = [
  { id: "world", label: "World ranking", rank: "12,097", scope: "Worldwide", distinction: "Top 1%", image: worldImage, width: 1908, height: 873, caption: "Global profile standing", alt: "AhsanHabib.NCS-12's Beecrowd profile showing world rank 12,097, a 1% indicator, and 475.13 points." },
  { id: "niter", label: "NITER ranking", rank: "05", scope: "At NITER", distinction: "Institutional rank", image: universityImage, width: 1899, height: 879, caption: "NITER institutional leaderboard", alt: "NITER Beecrowd leaderboard highlighting AhsanHabib.NCS-12 in fifth place, with 140 solved problems and 475.13 points." },
];

export default function BeecrowdShowcase() {
  const [selected, setSelected] = useState("world");
  const active = standings.find((standing) => standing.id === selected);

  return (
    <section className="coding-section" aria-labelledby="coding-heading">
      <div className="activities-section-label"><span>02 / PROBLEM SOLVING</span><span>BEECROWD</span></div>
      <Reveal>
        <div className="coding-showcase">
          <div className="coding-overview">
            <div className="coding-story">
              <span className="coding-kicker"><span aria-hidden="true">&lt;/&gt;</span> ALGORITHMS IN PRACTICE</span>
              <h2 id="coding-heading">Built one<br /><em>solution at a time.</em></h2>
              <p>Turning algorithmic thinking into working solutions. A record of practice, persistence, and progress on Beecrowd.</p>
              <div className="coding-handle"><span aria-hidden="true">@</span><strong>AhsanHabib.NCS-12</strong></div>
            </div>
            <div className="coding-ranks">
              {standings.map((standing) => (
                <button type="button" key={standing.id} className={`coding-rank${selected === standing.id ? " is-selected" : ""}`} aria-pressed={selected === standing.id} aria-controls="coding-evidence" onClick={() => setSelected(standing.id)}>
                  <span className="coding-rank__top"><span>{standing.scope}</span><ArrowIcon diagonal /></span>
                  <span className="coding-rank__value"><small>#</small>{standing.rank}</span>
                  <span className="coding-rank__bottom"><span>{standing.distinction}</span><span className="coding-rank__indicator" aria-hidden="true" /></span>
                </button>
              ))}
              <dl className="coding-metrics">
                <div><dt>Problems solved</dt><dd>140</dd></div>
                <div><dt>Total points</dt><dd>475.13</dd></div>
              </dl>
            </div>
          </div>
          <div className="coding-archive" id="coding-evidence">
            <div className="coding-archive__toolbar">
              <div className="coding-switch" role="group" aria-label="Choose ranking screenshot">
                {standings.map((standing) => <button key={standing.id} type="button" aria-pressed={selected === standing.id} onClick={() => setSelected(standing.id)}>{standing.label}</button>)}
              </div>
              <a className="coding-original" href={active.image} target="_blank" rel="noreferrer">Open original <ArrowIcon diagonal /><span className="coding-sr-only"> (opens in a new tab)</span></a>
            </div>
            <figure className="coding-proof">
              <a href={active.image} target="_blank" rel="noreferrer" aria-label={`Enlarge ${active.label.toLowerCase()} screenshot (opens in a new tab)`}>
                <img key={active.id} src={active.image} alt={active.alt} width={active.width} height={active.height} loading="lazy" decoding="async" />
                <span className="coding-proof__zoom" aria-hidden="true"><ArrowIcon diagonal /></span>
              </a>
              <figcaption aria-live="polite"><span><span className="coding-proof__index">{selected === "world" ? "01" : "02"} /</span> {active.caption}</span><span>Uploaded ranking snapshot</span></figcaption>
            </figure>
          </div>
          <div className="coding-footnote"><span aria-hidden="true">*</span> Rankings and statistics reflect the uploaded screenshots. Live standings may change.</div>
        </div>
      </Reveal>
    </section>
  );
}
