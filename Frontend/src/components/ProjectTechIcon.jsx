const devicons = {
  React: "react",
  TypeScript: "typescript",
  Python: "python",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  SQLAlchemy: "sqlalchemy",
  Vite: "vitejs",
  "MongoDB Atlas": "mongodb",
  Vercel: "vercel",
  PHP: "php",
  MySQL: "mysql",
  HTML: "html5",
  CSS: "css3",
  JavaScript: "javascript",
  "scikit-learn": "scikitlearn",
  Streamlit: "streamlit",
  PyTorch: "pytorch",
  NumPy: "numpy",
  pandas: "pandas",
  pytest: "pytest",
};

const marks = {
  Render: <path fill="#6c46cc" d="M3 21V11a8 8 0 0 1 8-8h10v5h-9a4 4 0 0 0-4 4v9zm7-10h11l-7 7h-4z" />,
  Neon: <path fill="none" stroke="#00a881" strokeWidth="3" strokeLinejoin="round" d="M3 20V5q0-2 2-2h14q2 0 2 2v14q0 2-2 1l-7-6v6H3Z" />,
  BanglaBERT: <><rect x="1" y="1" width="22" height="22" rx="5" fill="#087a52" /><text x="12" y="18" fill="white" fontSize="18" fontFamily="sans-serif" textAnchor="middle">ব</text></>,
  Transformers: <text x="12" y="20" fontSize="21" textAnchor="middle">🤗</text>,
  XGBoost: <g fill="#247ba0" stroke="#247ba0" strokeWidth="1.8"><path d="M12 5v4L5 14v4m7-9 7 5v4" fill="none" /><circle cx="12" cy="4" r="2.5" /><rect x="2" y="17" width="6" height="4" rx="1" /><rect x="16" y="17" width="6" height="4" rx="1" /></g>,
  SHAP: <><path fill="#ef336e" d="M2 4h10l4 4-4 4H2l4-4z" /><path fill="#1582dd" d="M22 12H12l-4 4 4 4h10l-4-4z" /></>,
};

export default function ProjectTechIcon({ name }) {
  const slug = devicons[name];
  if (slug) {
    return (
      <img
        className="project-tech-icon"
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${slug}/${slug}-original.svg`}
        width="18"
        height="18"
        alt=""
        loading="lazy"
        onError={(event) => { event.currentTarget.hidden = true; }}
      />
    );
  }

  return marks[name] ? (
    <svg className="project-tech-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      {marks[name]}
    </svg>
  ) : null;
}
