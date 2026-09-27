import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact Us</span>
          <h1>Reach out to us now for your queries</h1>
          <p className="lede">
            Our team is always ready to serve you. Reach out for prompt,
            professional and friendly support.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap contact-grid">
          <div>
            <h2>Need more information? Send us a message.</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Want to learn more about our services or get a quote? Send us
              a message and we'll get back to you with all the details you
              need.
            </p>

            {sent ? (
              <div className="feature" style={{ marginTop: 32 }}>
                <h3>Message sent</h3>
                <p style={{ marginTop: 8 }}>
                  Thanks for reaching out — our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: 32 }}>
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text" placeholder="How to address you" required />
                </div>
                <div className="field">
                  <label htmlFor="contact">Contact for communication</label>
                  <input id="contact" type="text" placeholder="Phone, email or WhatsApp" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea id="message" placeholder="Briefly describe your furniture and what you'd like done" />
                </div>
                <button type="submit" className="btn solid">Send request</button>
              </form>
            )}
          </div>

          <div>
            <h2>Our contact information</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Fast, reliable support — we're committed to prompt,
              professional answers to your questions.
            </p>

            <div style={{ marginTop: 28 }}>
              <div className="contact-info-item">
                <span className="tag">Office</span>
                <p>Shop 14, Doringkloof Mall, Cnr. Aster &amp; Lupin Ave, Centurion, 0157</p>
              </div>
              <div className="contact-info-item">
                <span className="tag">Phone</span>
                <p>+27 63 455 5268</p>
              </div>
              <div className="contact-info-item">
                <span className="tag">Hours</span>
                <p>Monday – Saturday, 8:00 AM – 5:00 PM</p>
              </div>
              <div className="contact-info-item">
                <span className="tag">Email</span>
                <p>info@afurnhub.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
