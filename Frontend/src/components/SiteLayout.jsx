import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems, pageVariants } from "../data/portfolio.js";
import { ArrowIcon } from "./shared.jsx";

export default function SiteLayout({ children }) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    setMenuOpen(false);
  }, [location.pathname, reduceMotion]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <motion.div className="reading-progress" style={{ scaleX: progressScale }} aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.header
        ref={headerRef}
        className="site-header"
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Link className="wordmark" to="/" aria-label="Ahsan Habib, home">
          <span className="wordmark__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 3 27 9v14l-11 6L5 23V9l11-6Z"/>
<path d="m11 13 5-3 5 3v6l-5 3-5-3v-6Z"/>
<path d="M16 3v7m11-1-6 4M27 23l-6-4M5 23l6-4M5 9l6 4"/>
<circle cx="16" cy="16" r="2"/>
              <circle cx="16" cy="25" r="2" />
            </svg>
          </span>
          <span className="wordmark__copy">
            <span className="wordmark__name">Ahsan.</span>
            <span className="wordmark__descriptor">SOFTWARE · AI · RESEARCH</span>
          </span>
        </Link>
        <NavLink
          className={({ isActive }) => isActive ? "mobile-contact is-active" : "mobile-contact"}
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close site navigation" : "Open site navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className={menuOpen ? "menu-toggle__icon is-open" : "menu-toggle__icon"} aria-hidden="true">
            <i /><i />
          </span>
        </button>
        <nav
          className={menuOpen ? "primary-navigation is-open" : "primary-navigation"}
          id="primary-navigation"
          aria-label="Main navigation"
          onMouseMove={(event) => {
            if (reduceMotion) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
            event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
            event.currentTarget.style.setProperty("--spot-opacity", "1");
          }}
          onMouseLeave={(event) => event.currentTarget.style.setProperty("--spot-opacity", "0")}
        >
          <span className="primary-navigation__spotlight" aria-hidden="true" />
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => [
                item.to === "/contact" ? "nav-contact" : "nav-link",
                isActive ? "is-active" : "",
              ].filter(Boolean).join(" ")}
            >
              {({ isActive }) => (
                <>
                  {isActive && item.to !== "/contact" && (
                    <motion.span
                      className="nav-link__active-surface"
                      layoutId="site-navigation-active"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                      aria-hidden="true"
                    >
                      <span className="nav-link__active-edge" />
                    </motion.span>
                  )}
                  {item.to === "/contact" ? (
                    <>
                      <span>{item.label}</span>
                      <ArrowIcon diagonal />
                    </>
                  ) : (
                    <>
                      <span className="nav-link__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <span className="nav-link__label">{item.label}</span>
                    </>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </motion.header>

      <main id="main-content" className="route-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            className="route-page"
            variants={pageVariants}
            initial={reduceMotion ? false : "initial"}
            animate="animate"
            exit={reduceMotion ? undefined : "exit"}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <Link className="wordmark" to="/" aria-label="Ahsan, home">
            <span className="wordmark__mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 25V10m0 7c-5.8 0-9-3.1-9-8.5 5.7 0 9 2.8 9 8.5Zm0-3c0-5.7 3.2-9 9-9 0 5.8-3.2 9-9 9Z" />
                <circle cx="16" cy="25" r="2" />
              </svg>
            </span>
            <span className="wordmark__copy">
              <span className="wordmark__name">Ahsan.</span>
              <span className="wordmark__descriptor">SOFTWARE · AI · RESEARCH</span>
            </span>
          </Link>
          <p>Thoughtfully made, one iteration at a time.</p>
          <Link to="/contact">Contact <ArrowIcon diagonal /></Link>
          <span>© {new Date().getFullYear()} H M AHSAN HABIB KUSHAL</span>
        </div>
      </footer>
    </div>
  );
}
