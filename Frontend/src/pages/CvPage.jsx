import { useState } from "react";
import { extendedCvUrl, onePageCvUrl } from "../data/portfolio.js";
import { ArrowIcon, DocumentIcon, PageIntro } from "../components/shared.jsx";

const cvOptions = [
  { id: "one-page", label: "One-page CV", url: onePageCvUrl },
  { id: "extended", label: "Extended CV", url: extendedCvUrl },
];

export default function CvPage() {
  const [selectedCvId, setSelectedCvId] = useState(cvOptions[0].id);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const selectedCv = cvOptions.find((option) => option.id === selectedCvId);
  const selectedCvIndex = cvOptions.findIndex((option) => option.id === selectedCvId);

  return (
    <div className="inner-page cv-page">
      <div className="page-wrap">
        <PageIntro
          number="04"
          eyebrow="Curriculum vitae"
          title={<>The details,<br /><em>in your preferred format.</em></>}
          copy="Choose a version to load its preview, open it in a new tab, or explicitly download the PDF below."
        />
        <section className="cv-preview" aria-label="CV preview">
          <div className="cv-preview__toolbar">
            <div className="cv-preview__document">
              <DocumentIcon />
              <div>
                <span className="eyebrow">LIVE DOCUMENT PREVIEW</span>
                <strong>{selectedCv.label}</strong>
              </div>
            </div>
            <div className="cv-preview__actions">
              <div className="cv-preview__switcher" role="group" aria-label="Choose a CV to preview">
                {cvOptions.map((option) => (
                  <button
                    className={option.id === selectedCvId ? "is-active" : ""}
                    key={option.id}
                    type="button"
                    aria-pressed={option.id === selectedCvId}
                    onClick={() => setSelectedCvId(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <a href={selectedCv.url} target="_blank" rel="noreferrer">
                Open PDF <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          {previewLoaded ? (
            <iframe
              className="cv-preview__frame"
              key={selectedCv.id}
              src={`${selectedCv.url}#view=FitH`}
              title={`${selectedCv.label} preview`}
              loading="lazy"
            />
          ) : (
            <div className="cv-preview__empty">
              <span className="cv-preview__empty-index" aria-hidden="true">
                PDF / {String(selectedCvIndex + 1).padStart(2, "0")}
              </span>
              <DocumentIcon />
              <p className="eyebrow">PREVIEW ON REQUEST</p>
              <h2>{selectedCv.label}</h2>
              <p>The PDF stays unloaded until you choose to preview it. Downloads are always started manually.</p>
              <button
                className="cv-preview__load"
                type="button"
                onClick={() => setPreviewLoaded(true)}
              >
                Load PDF preview <ArrowIcon />
              </button>
            </div>
          )}
        </section>
        <section className="cv-list">
          <a className="cv-item" href={onePageCvUrl} download="Ahsan-Habib-Kushal-One-Page-CV.pdf">
            <span className="cv-item__index">01</span>
            <DocumentIcon />
            <span className="cv-item__copy"><strong>One-page CV</strong><span>A concise overview · PDF</span></span>
            <span className="cv-item__action">Download <ArrowIcon diagonal /></span>
          </a>
          <a className="cv-item" href={extendedCvUrl} download="Ahsan-Habib-Kushal-Extended-CV.pdf">
            <span className="cv-item__index">02</span>
            <DocumentIcon />
            <span className="cv-item__copy"><strong>Extended CV</strong><span>Full academic and project details · PDF</span></span>
            <span className="cv-item__action">Download <ArrowIcon diagonal /></span>
          </a>
        </section>
        <section className="cv-aside">
          <span className="cv-aside__mark" aria-hidden="true">CV</span>
          <p className="eyebrow">A note on accuracy</p>
          <p>For the latest academic status, contact details, and verified achievements, please use the information in the documents themselves.</p>
        </section>
      </div>
    </div>
  );
}
