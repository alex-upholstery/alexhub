import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "promoPopupSeen";
const SHOW_DELAY_MS = 1500;
const WHATSAPP_NUMBER = "27634555268";
const WHATSAPP_MESSAGE =
  "Hi! I saw the Modular Bouclé Sofa special on your website and I'd like to know more.";

const formatRand = (n) =>
  "R " +
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// Edit the copy here. `from` is the starting price shown in the popup.
export default function PromoPopup({ image, from }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  // Show once per browser session, after a short delay.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage unavailable: just show it */
    }
    if (seen) return;
    const id = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  // Escape to close, lock page scroll, focus the close button.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      className="promo-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="promo-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="promo-close"
          onClick={close}
          aria-label="Close promotion"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>

        <div className="promo-media">
          <img
            src={image}
            alt="Modular cream bouclé sofa with a chaise end, walnut base and side table, styled with olive and grey cushions"
          />
        </div>

        <div className="promo-body">
          <span className="promo-badge">Special showroom offer</span>
          <h2 id="promo-title">The Modular Bouclé Sofa</h2>
          <p className="promo-lede">
            Soft cream bouclé on a walnut plinth, built from separate modules:
            a chaise end, a two-seater and a seat with a built-in side table.
            Arrange it your way and add your choice of accent cushions.
          </p>
          <ul className="promo-list">
            <li>Made to measure to fit your room</li>
            <li>Choose from our full fabric range</li>
            <li>See it in person at the showroom</li>
          </ul>
          {from ? (
            <p className="promo-price">
              From <strong>{formatRand(from)}</strong>
              <span>or 4 interest-free payments of {formatRand(from / 4)}</span>
            </p>
          ) : null}
          <div className="promo-actions">
            <a
              href={whatsappHref}
              className="btn solid"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              Ask about this sofa
            </a>
            <Link to="/store" className="btn" onClick={close}>
              Browse couches
            </Link>
          </div>
          <button type="button" className="promo-dismiss" onClick={close}>
            No thanks, close
          </button>
        </div>
      </div>
    </div>
  );
}