import { motion } from "framer-motion";

const moods = [
  { id: "morning", label: "Dawn", mark: "AM" },
  { id: "canopy", label: "Canopy", mark: "NOON" },
  { id: "harvest", label: "Golden hour", mark: "PM" },
  { id: "dusk", label: "Dusk", mark: "NIGHT" },
];

export default function MoodSelector({ mood, onSelectMood, isAuto, onEnableAuto, bangladeshTime }) {
  return (
    <div className="mood-selector" role="group" aria-label="Choose the home page atmosphere">
      <div className="mood-selector__context">
        <span className="mood-selector__eyebrow">ATMOSPHERE</span>
        <span className="mood-selector__clock">
          <span className="mood-selector__clock-dot" aria-hidden="true" />
          BANGLADESH <time>{bangladeshTime}</time>
        </span>
      </div>
      <div className="mood-selector__options">
        <button
          className={`mood-selector__button mood-selector__auto${isAuto ? " is-active" : ""}`}
          type="button"
          onClick={onEnableAuto}
          aria-pressed={isAuto}
          aria-label={`Use automatic atmosphere based on Bangladesh time, currently ${moods.find((option) => option.id === mood)?.label}`}
        >
          {isAuto && <motion.span className="mood-selector__pill" layoutId="mood-pill" aria-hidden="true" />}
          <span className="mood-selector__button-label">AUTO</span>
        </button>
        {moods.map((option) => {
          const currentByTime = isAuto && mood === option.id;
          return (
            <button
              className={`mood-selector__button${mood === option.id && !isAuto ? " is-active" : ""}${currentByTime ? " is-time-current" : ""}`}
              key={option.id}
              type="button"
              onClick={() => onSelectMood(option.id)}
              aria-pressed={mood === option.id && !isAuto}
              aria-label={currentByTime ? `${option.label}, selected for current Bangladesh time` : `${option.label} atmosphere`}
              title={currentByTime ? `${option.label} — current Bangladesh time` : `${option.label} atmosphere`}
            >
              {mood === option.id && !isAuto && (
                <motion.span className="mood-selector__pill" layoutId="mood-pill" aria-hidden="true" />
              )}
              <span className="mood-selector__mark" aria-hidden="true">{option.mark}</span>
              <span className="mood-selector__name">{option.label}</span>
              {currentByTime && <span className="mood-selector__current-dot" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
