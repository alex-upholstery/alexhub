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

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const SearchIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

const CartIcon = () => (
  <svg {...iconProps}>
    <path d="M3 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>
);

const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-3.9 3.6-6 8-6s8 2.1 8 6" />
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const cartCount = 0; // wire this to your cart state/context

  return (
    <div className="nav-outer">
      <header className="nav">
        <div className="wrap">
          <NavLink
            to="/"
            className="brand"
            aria-label="Furn Hub Upholstery — Home"
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
              ></svg>
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

            <div className="nav-icons">
              <NavLink to="/search" className="icon-btn" aria-label="Search">
                <SearchIcon />
              </NavLink>
              <NavLink to="/cart" className="icon-btn" aria-label="Cart">
                <CartIcon />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </NavLink>
              <NavLink to="/login" className="icon-btn" aria-label="Log in">
                <UserIcon />
              </NavLink>
            </div>

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