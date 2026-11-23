import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/shared.jsx";
import { portraitUrl, projects } from "../data/portfolio.js";
import "../styles/overview.css";

const chapters = [
  { title: "Research", text: "I study how models learn from language and images. My work on Bangla clickbait detection led me toward contrastive learning and the question of how images and text can describe the same thing.", to: "/about", link: "Research interests" },
  { title: "Education", text: "I study Computer Science and Engineering at NITER, affiliated with the University of Dhaka. A favorite part of learning a new algorithm is working through an example by hand before writing the code.", to: "/education", link: "Academic background" },
  { title: "Projects", text: "My portfolio spans " + projects.length + " projects, from managing farm production in KhamarBari to explaining model predictions in MindScope. Each project has a demo you can explore.", to: "/work", link: "Explore the projects" },
];

export default function OverviewPage() {
  return (
    <div className="overview-page page-wrap">
      <section className="overview-cover" aria-labelledby="overview-name">
        <div className="overview-intro">
          <span className="overview-kicker">00 / Overview</span>
          <h1 id="overview-name">H M Ahsan<br />Habib <em>Kushal</em></h1>
          <p className="overview-role">Machine learning &amp; software engineering</p>
          <p className="overview-bio">I build web applications and train models in Savar, Bangladesh. I’m especially interested in what a model picks up from a Bangla headline and how to tell when its prediction holds up.</p>
          <div className="overview-links">
            <Link to="/home">Enter Home <ArrowIcon /></Link>
            <a href="https://github.com/AhsanCS64">GitHub <ArrowIcon diagonal /></a>
            <a href="https://huggingface.co/Archmage64">Hugging Face <ArrowIcon diagonal /></a>
          </div>
        </div>
        <figure className="overview-photo">
          <img src={portraitUrl} alt="Portrait of H M Ahsan Habib Kushal" fetchPriority="high" />
        </figure>
      </section>
      <div className="overview-chapters">
        {chapters.map(({title, text, to, link}) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={to}>{link} <ArrowIcon /></Link>
          </section>
        ))}
      </div>
    </div>
  );
}
