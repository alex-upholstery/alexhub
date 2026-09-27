import { Link, useParams, Navigate } from "react-router-dom";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { getServiceBySlug } from "../services-data.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">
            <Link to="/services">Our Services</Link> / {service.name}
          </span>
          <h1>{service.name}</h1>
          <p className="lede">{service.text}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="split">
            <div className="split-media">
              <img src={service.img} alt={service.name} />
            </div>
            <div>
              <h2>How it works</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                {service.long}
              </p>
              <ul style={{ marginTop: 24, paddingLeft: 20, lineHeight: 1.9 }}>
                {service.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="btn solid"
                style={{ marginTop: 32 }}
              >
                Request a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">More examples</span>
              <h2>Recent {service.name.toLowerCase()} work</h2>
            </div>
            <div className="grid cols-2">
              {service.gallery.map((img, i) => (
                <img
                  src={img}
                  alt={`${service.name} example ${i + 1}`}
                  key={i}
                  style={{ borderRadius: 14, width: "100%", height: "auto" }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2>Ready to get started?</h2>
          <p className="lede" style={{ margin: "16px auto 0" }}>
            Tell us about your {service.name.toLowerCase()} project and we'll
            get back to you with a free, no-obligation quote.
          </p>
          <Link to="/contact" className="btn solid" style={{ marginTop: 28 }}>
            Get a free quote
          </Link>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
