import { Link } from "react-router-dom";
import { ArrowIcon, PageIntro } from "../components/shared.jsx";

export default function NotFoundPage() {
  return (
    <div className="inner-page not-found-page">
      <div className="page-wrap">
        <PageIntro
          number="404"
          eyebrow="This path wandered off"
          title={<>Let’s find<br /><em>another way.</em></>}
          copy="That page doesn’t exist. Head back to the beginning and keep exploring."
        />
        <Link className="button button--outline" to="/">Return home <ArrowIcon /></Link>
      </div>
    </div>
  );
}
