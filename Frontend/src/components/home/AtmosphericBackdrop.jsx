import { motion, useReducedMotion } from "framer-motion";

const traces = [
  "M-40 612H132L188 556H342L397 501H612",
  "M-40 650H112L167 595H322L376 540H612",
  "M63 -24V118L118 173V319L174 374V612",
  "M106 -24V99L161 154V300L216 355V612",
  "M1140 -20V112L1085 167V281L1032 334V612",
  "M1095 -20V96L1041 150V266L986 321V612",
];

const signals = [
  { x: [-20, 132, 188, 342, 397, 612], y: [612, 612, 556, 556, 501, 501], delay: 0 },
  { x: [63, 63, 118, 118, 174], y: [-20, 118, 173, 319, 374], delay: 1.4 },
  { x: [1140, 1140, 1085, 1085, 1032], y: [-20, 112, 167, 281, 334], delay: 2.8 },
];

export default function AtmosphericBackdrop({ mood }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="atmosphere" aria-hidden="true" data-atmosphere={mood}>
      <div className="atmosphere__grain" />
      <svg className="atmosphere__circuit" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="atmosphere-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" className="atmosphere__grid-line" />
          </pattern>
        </defs>
        <path d="M0 0H1200V700H0z" fill="url(#atmosphere-grid)" />
        {traces.map((trace, index) => (
          <path className="atmosphere__trace" d={trace} key={trace} style={{ opacity: index < 2 ? 0.62 : 0.34 }} />
        ))}
        {[132, 188, 342, 397].map((x, index) => (
          <path className="atmosphere__node" d={`M${x - 3} ${612 - index * 37 - 3}h6v6h-6z`} key={x} />
        ))}
        <g className="atmosphere__attention">
          <path d="M845 93h146v118H845z" className="atmosphere__artifact-frame" />
          <text x="858" y="110" className="atmosphere__artifact-label">ATTENTION / 04</text>
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((column) => (
              <rect
                className={`atmosphere__attention-cell${(row * 3 + column) % 4 === 0 ? " is-highlight" : ""}`}
                x={858 + column * 23}
                y={124 + row * 17}
                width="11"
                height="8"
                key={`${row}-${column}`}
              />
            )),
          )}
          <path d="M858 198h79" className="atmosphere__artifact-rule" />
          <text x="945" y="201" className="atmosphere__artifact-label">WEIGHT MAP</text>
        </g>
        <g className="atmosphere__neural">
          <text x="806" y="270" className="atmosphere__artifact-label">LEARNED REPRESENTATION</text>
          <path d="m825 305 78-31m-78 31 78 30m0-61 83 21m-83 40 83-21m0-19 78-20m-78 20 78 20" className="atmosphere__neural-link" />
          <path d="m825 305 78-31 83 21 78-20" className="atmosphere__neural-flow" />
          {[825, 903, 986, 1064].map((x, index) => {
            const y = [305, 274, 295, 275][index];
            return (
              <circle
                className={`atmosphere__neuron${index === 1 || index === 3 ? " is-emphasis" : ""}`}
                cx={x}
                cy={y}
                r={index === 3 ? 5 : 4}
                key={x}
              />
            );
          })}
          <circle className="atmosphere__neuron atmosphere__neuron--secondary" cx="903" cy="335" r="3" />
          <circle className="atmosphere__neuron atmosphere__neuron--secondary" cx="986" cy="316" r="3" />
          <circle className="atmosphere__neuron atmosphere__neuron--secondary" cx="1064" cy="315" r="3" />
          <text x="817" y="356" className="atmosphere__artifact-label">INPUT</text>
          <text x="895" y="356" className="atmosphere__artifact-label">ENCODE</text>
          <text x="974" y="356" className="atmosphere__artifact-label">ATTEND</text>
          <text x="1052" y="356" className="atmosphere__artifact-label">OUTPUT</text>
        </g>
        <g className="atmosphere__features">
          <text x="877" y="459" className="atmosphere__artifact-label">FEATURE MAP / 03</text>
          <path d="m870 481 48-15 48 15-48 15zm31 14 48-15 48 15-48 15zm31 14 48-15 48 15-48 15z" className="atmosphere__feature-layer" />
          <circle className="atmosphere__embedding-point" cx="1123" cy="142" r="2" />
          <circle className="atmosphere__embedding-point" cx="1144" cy="154" r="3" />
          <circle className="atmosphere__embedding-point" cx="1110" cy="168" r="2.5" />
          <circle className="atmosphere__embedding-point" cx="1160" cy="178" r="2" />
          <circle className="atmosphere__embedding-point" cx="1132" cy="190" r="2" />
          <path d="m1123 142 21 12-34 14 50 10-28 12" className="atmosphere__embedding-path" />
          <text x="1107" y="125" className="atmosphere__artifact-label">LATENT SPACE</text>
        </g>
        <motion.circle
          className="atmosphere__particle"
          r="3"
          animate={reduceMotion ? undefined : {
            cx: [825, 903, 986, 1064],
            cy: [305, 274, 295, 275],
          }}
          transition={{ duration: 9, delay: 0.6, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          className="atmosphere__particle atmosphere__particle--gold"
          r="2.5"
          animate={reduceMotion ? undefined : {
            cx: [870, 918, 966, 1014],
            cy: [481, 466, 481, 466],
          }}
          transition={{ duration: 7, delay: 1.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect
          className="atmosphere__signal"
          width="5"
          height="5"
          animate={reduceMotion ? undefined : {
            x: signals[0].x,
            y: signals[0].y,
          }}
          transition={{ duration: 12, delay: signals[0].delay, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect
          className="atmosphere__signal atmosphere__signal--gold"
          width="4"
          height="4"
          animate={reduceMotion ? undefined : {
            x: signals[1].x,
            y: signals[1].y,
          }}
          transition={{ duration: 11, delay: signals[1].delay, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect
          className="atmosphere__signal"
          width="4"
          height="4"
          animate={reduceMotion ? undefined : {
            x: signals[2].x,
            y: signals[2].y,
          }}
          transition={{ duration: 13, delay: signals[2].delay, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <span className="atmosphere__coordinate atmosphere__coordinate--left">23.8103° N</span>
      <span className="atmosphere__coordinate atmosphere__coordinate--right">90.4125° E</span>
    </div>
  );
}
