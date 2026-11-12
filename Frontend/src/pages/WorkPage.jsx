import { Link } from "react-router-dom";
import { projects } from "../data/portfolio.js";
import { ArrowIcon, PageIntro, ProjectCard } from "../components/shared.jsx";

export default function WorkPage() {
  return (
    <div className="inner-page work-page">
      <div className="page-wrap">
        <PageIntro
          number="02"
          eyebrow="Selected work / 2024—26"
          title={<>Ideas, tested<br /><em>in the real world.</em></>}
          copy="A small collection of software and machine-learning work. Each one is a record of a question, a process, and something learned along the way."
        />

        <div className="work-index">
          <span>PROJECT ARCHIVE</span>
          <span>{String(projects.length).padStart(2, "0")} PROJECTS <i>·</i> 2024—26</span>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        <p className="section-footnote">
          HeadlineGuard is experimental; final test evaluation and publication status are still being updated.
        </p>

        <div className="page-end-link">
          <span>Want the wider context?</span>
          <Link to="/about">Read about my approach <ArrowIcon /></Link>
        </div>
      </div>
    </div>
  );
}