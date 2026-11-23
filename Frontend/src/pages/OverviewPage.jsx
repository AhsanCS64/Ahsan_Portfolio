import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/shared.jsx";
import { educationHistory, extracurricularRoles, portraitUrl, projects } from "../data/portfolio.js";
import ContactIcon from "../components/ContactIcon.jsx";
import "../styles/overview.css";

const affiliations = [
  ...educationHistory.filter(item => item.result && ["university", "college", "school"].includes(item.kind)).slice(-3).reverse().map(item => ({
    label: item.kind === "university" ? "B.Sc. in CSE, NITER" : item.institution,
    logo: item.logo,
    to: "/education",
  })),
  ...extracurricularRoles.slice(0, 2).map(item => ({
    label: item.role + ", " + item.organization,
    logo: item.logo,
    to: "/eca",
  })),
];

const profiles = [
  ["LinkedIn", "linkedin", "https://www.linkedin.com/in/h-m-ahsan-habib-kushal-0263731a1/"],
  ["GitHub", "github", "https://github.com/AhsanCS64"],
  ["ResearchGate", "researchgate", "https://www.researchgate.net/profile/H-M-Kushal"],
  ["Hugging Face", "huggingface", "https://huggingface.co/Archmage64"],
  ["YouTube", "youtube", "https://www.youtube.com/@kushalahsan1931"],
  ["Facebook", "facebook", "https://www.facebook.com/kushol.ahsanhabib.7"],
];

const chapters = [
  {
    title: "Research",
    text: "I explore contrastive and self-supervised learning, with a current focus on how models connect chest X-rays to radiology reports. GLoRIA was my first hands-on implementation in medical vision-language learning.",
    to: "/research",
    link: "Explore my research journey",
  },
  { title: "Education", text: "I study Computer Science and Engineering at NITER, affiliated with the University of Dhaka. A favorite part of learning a new algorithm is working through an example by hand before writing the code.", to: "/education", link: "Academic background" },
  { title: "Projects", text: "My portfolio spans " + projects.length + " projects, from managing farm production in KhamarBari to explaining model predictions in MindScope. Each project has a demo you can explore.", to: "/work", link: "Explore the projects" },
];

export default function OverviewPage() {
  return (
    <div className="overview-page page-wrap">
      <section className="overview-cover overview-cover--memorial" aria-labelledby="overview-name">
        <figure className="overview-photo">
          <img src={portraitUrl} width="1224" height="1228" alt="Portrait of H. M. Ahsan Habib Kushal" fetchPriority="high" />
        </figure>
        <div className="overview-intro">
          <span className="overview-kicker">00 / Overview</span>
          <h1 id="overview-name">H. M. Ahsan <br />Habib <em>Kushal</em></h1>
          <p className="overview-role">Machine Learning Engineer · Software Developer · AI Research Enthusiast</p>
        </div>
        <div className="overview-summary">
          <div className="overview-bio">
            <p>I am a Computer Science and Engineering undergraduate at the National Institute of Textile Engineering and Research (NITER), University of Dhaka, passionate about transforming ideas into practical technology.</p>
            <p>My work lies at the intersection of Machine Learning, Deep Learning, Artificial Intelligence, and Software Engineering. I enjoy understanding how things work beneath the surface, experimenting with new approaches, and building complete applications that solve meaningful problems.</p>
          </div>
          <div className="overview-links">
            <Link to="/home">Enter Home <ArrowIcon /></Link>
          </div>
        </div>
      </section>
      <div className="overview-badges">
        <nav aria-label="Education and affiliations">
          {affiliations.map(({label, logo, to}) => (
            <Link key={label} to={to}><img src={logo} alt="" />{label}</Link>
          ))}
        </nav>
        <nav aria-label="Social profiles">
          {profiles.map(([label, icon, href]) => (
            <a key={icon} href={href}><ContactIcon type={icon} />{label}</a>
          ))}
        </nav>
      </div>
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
