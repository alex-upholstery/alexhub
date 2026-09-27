import { useState, useRef, useEffect } from 'react';

const WHATSAPP_NUMBER = '+27634555268'; // replace with your number, no + or spaces
const DEFAULT_MESSAGE = "Hi! I'd like to ask about your furniture services.";

export default function ContactButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="contact-widget" ref={ref}>
      {open && (
        <div className="contact-menu">
          <button
            type="button"
            className="contact-menu-item"
            onClick={() => {
              setOpen(false);
              // TODO: hook this up to your AI assistant / chat widget
              console.log('Open AI assistant');
            }}
          >
            <span className="contact-menu-icon ai">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
            <span>
              <span className="contact-menu-title">AI Assistant</span>
              <span className="contact-menu-sub">Chat with our virtual assistant</span>
            </span>
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-menu-item"
            onClick={() => setOpen(false)}
          >
            <span className="contact-menu-icon whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.43 1.32 4.92L2 22l5.31-1.39a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.25 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.07.89 2.4 1.02 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </span>
            <span>
              <span className="contact-menu-title">WhatsApp</span>
              <span className="contact-menu-sub">Message us directly</span>
            </span>
          </a>
        </div>
      )}

      <button
        type="button"
        className="contact-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 5h16v11H8l-4 4V5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
       Get In Touch
      </button>
    </div>
  );
}