import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function GalleryArrow({ direction }) {
  return (
    <svg
      aria-hidden="true"
      className={`project-gallery__arrow project-gallery__arrow--${direction}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.25 10h11.5M10 4.25 15.75 10 10 15.75" />
    </svg>
  );
}

export default function ProjectGallery({ project }) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = project.gallery ?? [];
  const activeImage = images[activeIndex];

  return (
    <section
      className={`project-gallery project-gallery--${project.kind}${activeImage ? "" : " project-gallery--upcoming"}`}
      aria-label={`${project.name} image gallery`}
      aria-roledescription="carousel"
    >
      <div className="project-gallery__stage">
        {activeImage ? (
          <motion.img
            key={activeImage.image}
            className="project-gallery__image"
            src={activeImage.image}
            alt={activeImage.alt}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.32 }}
          />
        ) : (
          <div className="project-gallery__placeholder">
            <span className="project-gallery__placeholder-mark" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i />
            </span>
            <span className="project-gallery__placeholder-label">VISUAL ARCHIVE / IN PROGRESS</span>
            <strong>Coming soon</strong>
          </div>
        )}
        {activeImage && images.length > 1 && (
          <>
            <span className="project-gallery__counter" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(images.length).padStart(2, "0")}
            </span>
            <div className="project-gallery__controls">
              <button
                type="button"
                aria-label={`Previous image in ${project.name} gallery`}
                onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
              >
                <GalleryArrow direction="previous" />
              </button>
              <button
                type="button"
                aria-label={`Next image in ${project.name} gallery`}
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
              >
                <GalleryArrow direction="next" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="project-gallery__caption" aria-live="polite">
        <div className="project-gallery__explanation">
          <span className="project-gallery__eyebrow">
            {activeImage
              ? `SCREEN / ${String(activeIndex + 1).padStart(2, "0")}`
              : "PROJECT VISUALS"}
          </span>
          <h4>{activeImage?.title ?? "A closer look is on its way"}</h4>
          <p>{activeImage?.explanation ?? project.galleryNote}</p>
        </div>
        {activeImage && images.length > 1 && (
          <div className="project-gallery__pagination" role="group" aria-label="Choose a gallery image">
            {images.map((image, index) => (
              <button
                key={image.image}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                aria-label={`Show image ${index + 1}: ${image.title}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
