import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext";
import { useAuth } from "../AuthContext";
import logo from "../assets/images/logo-animation.svg";
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
const SettingsIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

const HeartIcon = () => (
  <svg {...iconProps}>
    <path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z" />
  </svg>
);

const LogoutIcon = () => (
  <svg {...iconProps}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" />
    <path d="M21 12H9" />
  </svg>
);
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { count: cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef(null);
const navigate = useNavigate();
const { user, logout } = useAuth();
const displayName = user?.displayName || user?.email || "";
  const initial = (user?.displayName || user?.email || "?").charAt(0).toUpperCase();

  useEffect(() => {
  if (!menuOpen) return;
  const onClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
  };
  const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
  document.addEventListener("mousedown", onClick);
  document.addEventListener("keydown", onKey);
  return () => {
    document.removeEventListener("mousedown", onClick);
    document.removeEventListener("keydown", onKey);
  };
}, [menuOpen]);

async function handleLogout() {
  setMenuOpen(false);
  await logout();
  navigate("/");
}
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
  <img src={logo} alt="Furn Hub Upholstery" className="brand-logo" />
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
{user ? (
  <div className="user-menu" ref={menuRef}>
    <button
      type="button"
      className="icon-btn avatar"
      aria-label="Account menu"
      aria-haspopup="menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((v) => !v)}
    >
      {initial}
    </button>

    {menuOpen && (
      <div className="user-dropdown" role="menu">
        <div className="user-dropdown-head">
          <span className="avatar avatar-lg">{initial}</span>
          <div className="user-dropdown-id">
            <strong>{user.displayName || "My account"}</strong>
            <small>{user.email}</small>
          </div>
        </div>

        <NavLink to="/settings" role="menuitem" className="user-dropdown-item" onClick={() => setMenuOpen(false)}>
          <SettingsIcon /> Settings
        </NavLink>
        <NavLink to="/favourites" role="menuitem" className="user-dropdown-item" onClick={() => setMenuOpen(false)}>
          <HeartIcon /> Favourites
        </NavLink>

        <div className="user-dropdown-divider" />

        <button type="button" role="menuitem" className="user-dropdown-item danger" onClick={handleLogout}>
          <LogoutIcon /> Log out
        </button>
      </div>
    )}
  </div>
) : (
  <NavLink to="/login" className="icon-btn" aria-label="Log in">
    <UserIcon />
  </NavLink>
)}
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