import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";

import carSeat from "../assets/images/car-seat-rear.jpg";
import mediaUnit from "../assets/images/media-unit.jpg";
import customTable from "../assets/images/custom-table.jpg";
import outdoorBench from "../assets/images/outdoor-bench.jpg";
import patioLounge from "../assets/images/patio-lounge.jpg";

// Real showroom photography — De Palace Mall
import furnitureShop from "../assets/images/showroom-beige-sofa-set-wide.webp";
import reupholstery from "../assets/images/showroom-white-curved-sofa.webp";
import interiorDesign from "../assets/images/showroom-beige-sofas-brown-chairs-art.webp";
import bedManufacturing from "../assets/images/upholstered-bubble-bed-grey.webp";

const SERVICES = [
  {
    img: furnitureShop,
    name: "Furniture Shop",
    text: "Explore our shop for high-quality furniture that combines timeless style with exceptional craftsmanship.",
  },
  {
    img: reupholstery,
    name: "Reupholstery",
    text: "We replace worn fabric and padding, restoring your pieces to their original beauty.",
  },
  {
    img: carSeat,
    name: "Car Upholstery",
    text: "High-quality materials and meticulous craftsmanship for a comfortable, stylish interior.",
  },
  {
    img: mediaUnit,
    name: "Curtains and Blinds",
    text: "A wide range of styles, fabrics, and functionalities to suit your home.",
  },
  {
    img: customTable,
    name: "Custom Furniture",
    text: "Custom design and fabrication, bringing your unique vision to life.",
  },
  {
    img: outdoorBench,
    name: "Carpentry",
    text: "Framing, finishing, custom builds, and repairs — reliable, quality craftsmanship.",
  },
  {
    img: interiorDesign,
    name: "Interior Design",
    text: "Comprehensive interior design, from concept to a beautiful, functional space.",
  },
  {
    img: bedManufacturing,
    name: "Headboard & Bed Manufacturing",
    text: "Traditional designs to custom creations, for any bedroom.",
  },
  {
    img: patioLounge,
    name: "Patio",
    text: "Design and enjoy a beautiful, functional outdoor space for relaxing and entertaining.",
  },
];

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
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <Link to="/contact">Request a free quote</Link>
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
