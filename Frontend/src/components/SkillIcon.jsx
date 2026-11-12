const skillMarks = {
  javascript: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M12.5 16.5c.4.8 1.1 1.2 2.2 1.2 1.2 0 1.9-.5 1.9-1.4 0-.8-.5-1.2-1.8-1.7l-.7-.3c-1.8-.8-2.7-1.7-2.7-3.5 0-1.7 1.3-2.9 3.3-2.9 1.4 0 2.4.5 3.1 1.8M10 15.9c-.4 1.2-1.1 1.8-2.3 1.8-1 0-1.7-.5-2.2-1.3" /></>,
  react: <><ellipse cx="12" cy="12" rx="9" ry="3.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.5" /></>,
  node: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><circle cx="12" cy="8" r="1.2" /><circle cx="8" cy="15.5" r="1.2" /><circle cx="16" cy="15.5" r="1.2" /><path d="m11.4 9-2.8 5.3m4-.3 2.8-5.3m-6.2 6.5h5.6" /></>,
  express: <><path d="M4 6h7M13 6l3 3-3 3m7 6h-7m-2 0-3-3 3-3" /><circle cx="4" cy="6" r="1.5" /><circle cx="20" cy="18" r="1.5" /></>,
  php: <><ellipse cx="12" cy="12" rx="9" ry="5.5" /><path d="M7.5 14.5 9 9.5h2.1c1.3 0 1.8.7 1.5 1.8l-.4 1.4c-.3 1-1 1.5-2.2 1.5H8.8m5.1 0 1.5-5h2m-2.9 2h3.2" /></>,
  rest: <><path d="M5 8h13m0 0-3-3m3 3-3 3M19 16H6m0 0 3-3m-3 3 3 3" /><circle cx="4" cy="8" r="1" /><circle cx="20" cy="16" r="1" /></>,
  git: <><path d="M12 5v14m0-9 6-4m-6 7-6 4" /><circle cx="12" cy="4" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="17" r="2" /><circle cx="12" cy="20" r="2" /></>,
  python: <><path d="M12 3H8.5A3.5 3.5 0 0 0 5 6.5V10h8v4H7a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h4v-4h5a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4V3Z" /><circle cx="8.5" cy="6.5" r=".7" /><circle cx="15.5" cy="17.5" r=".7" /></>,
  sklearn: <><path d="M12 4v5m0 0L6 15m6-6 6 6" /><circle cx="12" cy="4" r="2" /><circle cx="6" cy="16" r="2" /><circle cx="18" cy="16" r="2" /><path d="M4 21h16" /></>,
  xgboost: <><path d="M12 4v5m0 0-5 4m5-4 5 4m-10 0v5m0-5-3 4m3-4 3 4m7-4v5m0-5-3 4m3-4 3 4" /><circle cx="12" cy="4" r="1.5" /><path d="M4 21h16" /></>,
  features: <><path d="M5 5v14m7-14v14m7-14v14M3 9h4m3 6h4m3-7h4" /><circle cx="5" cy="9" r="1.5" /><circle cx="12" cy="15" r="1.5" /><circle cx="19" cy="8" r="1.5" /></>,
  evaluation: <><path d="M4 20V5m0 15h17" /><path d="M7 16h3v2H7zm5-5h3v7h-3zm5-4h3v11h-3z" /><path d="m8 10 3-3 2 2 5-5" /></>,
  pytorch: <><path d="M14 3c-4 3-7 6.5-7 10a5 5 0 0 0 10 0c0-1.7-.8-3.2-2.2-4.3.2 2.1-.6 3.3-2.1 3.3-1.4 0-2.2-1-2.2-2.2 0-2 1.6-4.3 3.5-6.8Z" /><path d="M7 19c1.2 1.2 2.8 2 5 2" /></>,
  tensorflow: <><path d="M12 3v18M5 7l7 5 7-5M5 17l7-5 7 5" /><rect x="3.5" y="5.5" width="3" height="3" rx=".5" /><rect x="17.5" y="5.5" width="3" height="3" rx=".5" /><rect x="10.5" y="10.5" width="3" height="3" rx=".5" /></>,
  cnn: <><rect x="4" y="4" width="5" height="5" rx=".6" /><rect x="10" y="4" width="5" height="5" rx=".6" /><rect x="16" y="4" width="4" height="5" rx=".6" /><rect x="4" y="10" width="5" height="5" rx=".6" /><rect x="10" y="10" width="5" height="5" rx=".6" /><rect x="16" y="10" width="4" height="5" rx=".6" /><path d="M4 18h16" /></>,
  transformers: <><path d="M5 6h14M5 12h14M5 18h14" /><circle cx="8" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="10" cy="18" r="2" /><path d="m10 7.5 3.5 3m-2.5 3  -1 2" /></>,
  bangla: <><path d="M4 7h15M6 4v13c0 2 1.2 3 3 3m8-12-5 6m0-6 5 6" /><text x="12" y="14" textAnchor="middle" dominantBaseline="central">ক</text></>,
  sql: <><ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" /><path d="M4.5 5.5v12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-12M4.5 11.5c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" /></>,
  mongodb: <><path d="M12 3c-3 4-5 6.5-5 10a5 5 0 0 0 10 0c0-3.5-2-6-5-10Z" /><path d="M12 9v12m0-5-3-3m3 5 3-3" /></>,
  mysql: <><path d="M4 7h16M6 7v11h12V7M9 10h6m-6 3h6m-6 3h3" /><path d="m16 4 2 3" /></>,
  pandas: <><path d="M6 4v6m0 4v6m6-16v2m0 4v6m0 4v2m6-18v6m0 4v8" /><circle cx="6" cy="12" r="2" /><circle cx="12" cy="7" r="2" /><circle cx="18" cy="12" r="2" /></>,
  numpy: <><path d="M8 5H5v14h3m8-14h3v14h-3" /><rect x="9" y="8" width="2" height="2" /><rect x="13" y="8" width="2" height="2" /><rect x="9" y="12" width="2" height="2" /><rect x="13" y="12" width="2" height="2" /><rect x="9" y="16" width="2" height="2" /><rect x="13" y="16" width="2" height="2" /></>,
  powerbi: <><path d="M4 20V4m0 16h17" /><rect x="7" y="12" width="3" height="6" rx=".5" /><rect x="12" y="8" width="3" height="10" rx=".5" /><rect x="17" y="5" width="3" height="13" rx=".5" /></>,
};

const skillIconIds = {
  JavaScript: "javascript",
  React: "react",
  "Node.js": "node",
  Express: "express",
  PHP: "php",
  "REST APIs": "rest",
  Git: "git",
  Python: "python",
  "scikit-learn": "sklearn",
  XGBoost: "xgboost",
  "Feature engineering": "features",
  "Model evaluation": "evaluation",
  PyTorch: "pytorch",
  "TensorFlow / Keras": "tensorflow",
  CNNs: "cnn",
  Transformers: "transformers",
  "Bangla NLP": "bangla",
  SQL: "sql",
  MongoDB: "mongodb",
  MySQL: "mysql",
  Pandas: "pandas",
  NumPy: "numpy",
  "Power BI": "powerbi",
};

const groupIconIds = {
  code: "javascript",
  model: "sklearn",
  neural: "tensorflow",
  data: "powerbi",
};

export default function SkillIcon({ skill, group, className = "" }) {
  const iconId = skill ? skillIconIds[skill] : groupIconIds[group];
  if (!iconId) return null;

  return (
    <svg
      className={`skill-glyph${className ? ` ${className}` : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {skillMarks[iconId]}
    </svg>
  );
}
