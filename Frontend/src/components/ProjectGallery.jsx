
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function GalleryArrow({ direction }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={`project-gallery__arrow project-gallery__arrow--${direction}`}
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryMark() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M18 42 29 20l7 14 5-9 7 17H18Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="42" cy="21" r="3" fill="currentColor" />
    </svg>
  );
}

export default function ProjectGallery({ project }) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = project.gallery ?? [];
  const activeImage = images[activeIndex];
  const hasGallery = images.length > 0;
  const hasMultiple = images.length > 1;

  const navigate = (direction) => {
    setActiveIndex((current) =>
      (current + direction + images.length) % images.length
    );
  };

  return (
    <section
      className={`project-gallery project-gallery--${project.kind}${!hasGallery ? " project-gallery--upcoming" : ""}`}
      aria-label={`${project.name} visual archive`}
      aria-roledescription="carousel"
    >
      <div className="project-gallery__topline">
        <div className="project-gallery__archive">
          <span className="project-gallery__archive-dot" />
          <span>VISUAL DOCUMENTATION</span>
        </div>

        <span className="project-gallery__archive-index">
          {hasGallery
            ? `${String(activeIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`
            : "ARCHIVE / PENDING"}
        </span>
      </div>

      <div className="project-gallery__stage">
        <div className="project-gallery__stage-grid" aria-hidden="true" />

        {hasGallery ? (
          <>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeImage.image}
                className="project-gallery__frame"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.985, y: 8 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, scale: 1.01, y: -5 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  className="project-gallery__image"
                  src={activeImage.image}
                  alt={activeImage.alt}
                  loading="lazy"
                  draggable="false"
                />

                <div className="project-gallery__image-shade" />

                <span className="project-gallery__image-tag">
                  FIG. {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </AnimatePresence>

            {hasMultiple && (
              <div className="project-gallery__controls">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => navigate(-1)}
                  className="project-gallery__nav"
                >
                  <GalleryArrow direction="previous" />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => navigate(1)}
                  className="project-gallery__nav"
                >
                  <GalleryArrow direction="next" />
                </button>
              </div>
            )}

            <div className="project-gallery__stage-footer">
              <span>PROJECT / {project.name.toUpperCase()}</span>
              <span>FIGURE {String(activeIndex + 1).padStart(2, "0")}</span>
            </div>
          </>
        ) : (
          <div className="project-gallery__placeholder">
            <div className="project-gallery__placeholder-art">
              <div className="project-gallery__placeholder-orbit project-gallery__placeholder-orbit--one" />
              <div className="project-gallery__placeholder-orbit project-gallery__placeholder-orbit--two" />
              <GalleryMark />
            </div>

            <div className="project-gallery__placeholder-content">
              <span className="project-gallery__placeholder-label">
                VISUAL ARCHIVE / IN DEVELOPMENT
              </span>
              <h3>Something worth seeing<br />is taking shape.</h3>
              <p>
                {project.galleryNote ?? "Project documentation will appear here as development progresses."}
              </p>
            </div>

            <span className="project-gallery__placeholder-number">00</span>
          </div>
        )}
      </div>

      <div className="project-gallery__caption">
        <div className="project-gallery__explanation">
          <span className="project-gallery__eyebrow">
            {activeImage
              ? `FRAME ${String(activeIndex + 1).padStart(2, "0")} — ${activeImage.title.toUpperCase()}`
              : "DOCUMENTATION PENDING"}
          </span>

          <h4>{activeImage?.title ?? "A closer look is on its way"}</h4>

          <p>
            {activeImage?.explanation ??
              project.galleryNote ??
              "Detailed project visuals and documentation are coming soon."}
          </p>
        </div>

        {hasMultiple && (
          <div
            className="project-gallery__pagination"
            role="group"
            aria-label="Select project image"
          >
            {images.map((image, index) => (
              <button
                key={image.image}
                type="button"
                className={`project-gallery__pagination-item${index === activeIndex ? " is-active" : ""}`}
                aria-label={`Show image ${index + 1}: ${image.title}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span />
              </button>
            ))}
          </div>
        )}
      </div>

      {hasMultiple && (
        <div className="project-gallery__progress" aria-hidden="true">
          <motion.div
            className="project-gallery__progress-fill"
            animate={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
          />
        </div>
      )}
    </section>
  );
}
