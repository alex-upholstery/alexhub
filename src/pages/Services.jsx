import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { SERVICES } from "../services-data.js";

const FEATURES = [
  {
    title: "Expert Craftsmanship",
    text: "Skilled artisans delivering meticulous attention to detail in every stitch.",
  },
  {
    title: "Personalized Design",
    text: "Custom solutions and consultations to match your unique style.",
  },
  {
    title: "Premium Materials",
    text: "Only the finest fabrics, foams, and materials, for beauty and durability.",
  },
  {
    title: "Furniture Revitalization",
    text: "Extend the life of your beloved pieces while saving money and helping the environment.",
  },
  {
    title: "Timely, Professional Service",
    text: "We work with you so your item is delivered and arranged on schedule.",
  },
  {
    title: "Customer Satisfaction",
    text: "Committed to exceeding expectations from start to finish.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Our Services</span>
          <h1>Expert upholstery for every detail</h1>
          <p className="lede">
            Reupholstery, custom furniture, and auto design — quality
            craftsmanship and personalized attention on every project.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid cols-3">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.slug}>
                <Link to={`/services/${s.slug}`}>
                  <img src={s.img} alt={s.name} />
                </Link>
                <div className="body">
                  <h3>
                    <Link to={`/services/${s.slug}`}>{s.name}</Link>
                  </h3>
                  <p>{s.text}</p>
                  <Link to={`/services/${s.slug}`}>Learn more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Our feature</span>
            <h2>The advantages you'll get with furn hub Upholstery</h2>
          </div>
          <div className="grid cols-3">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <h3>{f.title}</h3>
                <p style={{ marginTop: 8 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
