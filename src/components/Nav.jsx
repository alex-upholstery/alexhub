import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/store", label: "Visit Our Store" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-outer">
      <header className="nav">
        <div className="wrap">
          <NavLink
            to="/"
            className="brand"
            aria-label=" furn hub Upholstery — Home"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark" style={{ color: "var(--thread)" }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                
              </svg>
            </span>
          </NavLink>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <NavLink to="/contact" className="btn solid">
              <span className="label">info@afurnhub.com</span>
            </NavLink>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
