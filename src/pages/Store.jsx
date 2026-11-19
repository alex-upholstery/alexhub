import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { DINING, CHAIRS, BEDS, PEDESTALS } from "../store-data.js";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";

import g1 from "../assets/img/couches/IMG-20261118-WA0009.jpg";
import g2 from "../assets/img/couches/IMG-20261118-WA0002.jpg";
import g3 from "../assets/img/couches/IMG-20261118-WA0007.jpg";
import g4 from "../assets/images/media-unit.jpg";
import g5 from "../assets/images/living-room-grey.jpg";
import g6 from "../assets/img/couches/IMG-20261118-WA0003.jpg";
import g7 from "../assets/images/armchair-grey.jpg";
import g8 from "../assets/images/blue-couch-ottoman.jpg";
import g9 from "../assets/images/curtains-2.jpeg";
import g10 from "../assets/images/reupholstery-1.jpeg";
import g11 from "../assets/images/store-1.jpeg";
import g12 from "../assets/images/carpentry-2.jpeg";
import g13 from "../assets/img/cabinetry/IMG-20261118-WA0034.jpg";
import g14 from "../assets/images/patio-pergola.jpg";
import g15 from "../assets/images/outdoor-couch.jpg";
import g16 from "../assets/images/sectional-blue-cushion.jpg";

// Showroom pieces — Doringkloof Mall
import s1 from "../assets/images/showroom-brown-sectional-armchair.webp";
import s2 from "../assets/images/showroom-white-curved-sofa.webp";
import s3 from "../assets/images/showroom-white-curved-sofa-top.webp";
import s4 from "../assets/images/showroom-blue-sofa-green-ottomans.webp";
import s5 from "../assets/images/showroom-blue-sofa-top.webp";
import s6 from "../assets/images/showroom-blue-sofa-green-armchairs-top.webp";
import s7 from "../assets/images/upholstered-bubble-bed-grey.webp";
import s8 from "../assets/images/showroom-brown-sofas-patterned-ottoman.webp";
import s9 from "../assets/images/showroom-brown-sofa-brown-chair.webp";
import s10 from "../assets/images/showroom-brown-sofa-green-chairs.webp";
import s11 from "../assets/images/showroom-brown-sofas-patterned-ottoman-wide.webp";
import s12 from "../assets/images/showroom-brown-sofa-grey-armchairs.webp";
import s13 from "../assets/images/showroom-brown-sofa-grey-armchairs-2.webp";
import s14 from "../assets/images/showroom-brown-sofas-green-chairs-wide.webp";
import s15 from "../assets/images/showroom-brown-sofas-brown-chairs-wide.webp";
import s16 from "../assets/images/showroom-grey-sectional-brown-chair.webp";
import s17 from "../assets/images/showroom-grey-sectional-top.webp";
import s18 from "../assets/images/showroom-brown-corner-sofa.webp";
import s19 from "../assets/images/showroom-brown-corner-sofa-wide.webp";

// Showroom pieces — batch 2
import s20 from "../assets/images/showroom-beige-sofas-dark-chairs.webp";
import s21 from "../assets/images/showroom-beige-sofas-brown-chairs-art.webp";
import s22 from "../assets/images/showroom-beige-sofa-set-top.webp";
import s23 from "../assets/images/showroom-grey-curved-sofas-top.webp";
import s24 from "../assets/images/showroom-grey-sofa-orange-chairs.webp";
import s25 from "../assets/images/showroom-white-curved-sofa-orange-pillows.webp";
import s26 from "../assets/images/showroom-white-sofa-green-ottomans.webp";
import s27 from "../assets/images/showroom-white-sofa-cream-bubble-chair.webp";
import s28 from "../assets/images/showroom-white-curved-sofa-wide.webp";
import s29 from "../assets/images/showroom-white-sectional-mustard-pillow.webp";
import s30 from "../assets/images/showroom-white-sectional-black-chair.webp";
import s31 from "../assets/images/showroom-white-sectional-mustard-ottoman-top.webp";
import s32 from "../assets/images/showroom-white-sectional-rust-bubble-chair.webp";
import s33 from "../assets/images/showroom-white-sectional-brown-chair-top.webp";
import s34 from "../assets/images/showroom-beige-armchair-pair.webp";
import s35 from "../assets/images/showroom-beige-sofas-brown-chairs-wide.webp";
import s36 from "../assets/images/showroom-beige-sofa-set-wide.webp";
import s37 from "../assets/images/showroom-beige-armchairs-loveseat-sofa.webp";

const IMAGES = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
];

// Prices use the store's "From R x" format with 4 interest-free payments.
// Tier prices are based on the closest matching store listings; edit any item's `from` to change it.
const PRICE = {
  bed: 13700, // Ocean Headboard & Base
  curved: 14500, // Anat curved sofa
  lshape: 16800, // Cloud L-Shape
  suite: 16900, // Oani couch
  corner: 21000, // Vonia U-Shape
  chair: 6500, // Pumpkin Chair
};

const formatRand = (n) =>
  "R " +
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const SHOWROOM_PRODUCTS = [
  {
    src: s1,
    label: "Curved brown sectional & accent chair",
    from: PRICE.corner,
  },
  { src: s2, label: "Boucle white curved sofa", from: PRICE.curved },
  { src: s3, label: "Curved sofa, top view", from: PRICE.curved },
  {
    src: s4,
    label: "Powder blue curved sofa & green ottomans",
    from: PRICE.curved,
  },
  { src: s5, label: "Blue sofa seating, top view", from: PRICE.curved },
  { src: s6, label: "Blue sofa & green armchairs", from: PRICE.curved },
  { src: s7, label: "Upholstered bubble bed frame", from: PRICE.bed },
  { src: s8, label: "Brown sofas & patterned ottoman", from: PRICE.suite },
  { src: s9, label: "Brown sofa & leather accent chairs", from: PRICE.suite },
  { src: s10, label: "Brown sofa & olive green chairs", from: PRICE.suite },
  { src: s11, label: "Brown sofa suite, wide view", from: PRICE.suite },
  { src: s12, label: "Brown sofa & bouclé grey armchairs", from: PRICE.suite },
  { src: s13, label: "Grey armchair pairing", from: PRICE.suite },
  {
    src: s14,
    label: "Brown sofas & green chairs, wide view",
    from: PRICE.suite,
  },
  {
    src: s15,
    label: "Brown sofa suite with leather chairs",
    from: PRICE.suite,
  },
  {
    src: s16,
    label: "Grey modular sectional & leather chair",
    from: PRICE.lshape,
  },
  { src: s17, label: "Grey sectional, top view", from: PRICE.lshape },
  { src: s18, label: "Curved brown corner sofa", from: PRICE.corner },
  { src: s19, label: "Brown corner sofa, wide view", from: PRICE.corner },
  {
    src: s20,
    label: "Beige sofa set with dark accent chairs",
    from: PRICE.suite,
  },
  { src: s21, label: "Beige sofas & brown leather chairs", from: PRICE.suite },
  { src: s22, label: "Beige sofa set, top view", from: PRICE.suite },
  { src: s23, label: "Twin grey curved sofas, top view", from: PRICE.curved },
  {
    src: s24,
    label: "Grey curved sofa & burnt-orange chairs",
    from: PRICE.curved,
  },
  {
    src: s25,
    label: "White curved sofa with orange accent pillows",
    from: PRICE.curved,
  },
  { src: s26, label: "White sofa & olive bouclé ottomans", from: PRICE.curved },
  { src: s27, label: "White sofa & cream bubble chair", from: PRICE.curved },
  { src: s28, label: "White curved sofa, wide view", from: PRICE.curved },
  {
    src: s29,
    label: "White sectional with mustard accent pillow",
    from: PRICE.lshape,
  },
  {
    src: s30,
    label: "White sectional & sculptural black chair",
    from: PRICE.lshape,
  },
  { src: s31, label: "White sectional, top view", from: PRICE.lshape },
  {
    src: s32,
    label: "White sectional & rust bubble chair",
    from: PRICE.lshape,
  },
  {
    src: s33,
    label: "White sectional & brown leather chair, top view",
    from: PRICE.lshape,
  },
  { src: s34, label: "Beige two-tone armchair pair", from: PRICE.chair },
  { src: s35, label: "Beige sofa suite, wide view", from: PRICE.suite },
  { src: s36, label: "Beige sofa set, full room view", from: PRICE.suite },
  { src: s37, label: "Beige armchairs & loveseat set", from: PRICE.suite },
].map((p, i) => ({ ...p, id: `showroom-${i + 1}` }));

function ProductCard({ item }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const name = item.name || item.label;
  const image = item.img || item.src;

  const handleAdd = () => {
    add({ id: item.id, name, price: item.from, img: image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="product-card">
      <img src={image} alt={name} loading="lazy" />
      <div className="product-body">
        <h3>{name}</h3>
        {item.text && <p className="desc">{item.text}</p>}
        {item.from ? (
          <>
            <p className="price">From {formatRand(item.from)}</p>
            <p className="installment">
              or 4 interest-free payments of {formatRand(item.from / 4)}
            </p>
            <button
              type="button"
              className={`btn solid add-btn${added ? " added" : ""}`}
              onClick={handleAdd}
            >
              {added ? "Added ✓" : "Add to cart"}
            </button>
          </>
        ) : (
          <>
            <p className="price">Price on request</p>
            <p className="installment">
              Contact us for pricing and fabric options.
            </p>
            <Link to="/contact" className="btn add-btn">
              Enquire
            </Link>
          </>
        )}
      </div>
    </article>
  );
}

const withIds = (prefix, list) =>
  list.map((p, i) => ({ ...p, id: `${prefix}-${i + 1}` }));

const CATEGORIES = [
  {
    key: "dining",
    title: "Dining tables & chairs",
    items: withIds("dining", DINING),
  },
  {
    key: "chairs",
    title: "Occasional chairs",
    items: withIds("chair", CHAIRS),
  },
  { key: "beds", title: "Headboards & beds", items: withIds("bed", BEDS) },
  {
    key: "pedestals",
    title: "Pedestals & patio",
    items: withIds("pedestal", PEDESTALS),
  },
];

export default function Store() {
  return (
    <>
  
      {CATEGORIES.map((cat, idx) => (
        <section key={cat.key} className={idx % 2 === 1 ? "alt" : undefined}>
          <div className="wrap">
            <span className="eyebrow">Shop</span>
            <h2>{cat.title}</h2>
            <div className="store-grid">
              {cat.items.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="wrap">
          <span className="eyebrow">Showroom</span>
          <h2>Shop pieces from Doringkloof Mall</h2>
          <p className="lede" style={{ margin: "16px 0 0" }}>
            Sectionals, armchairs and statement beds from our showroom — add
            your favourites to the cart and we'll confirm delivery and fabric
            options.
          </p>

          <div className="store-grid">
            {SHOWROOM_PRODUCTS.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/cart" className="btn">
              View your cart
            </Link>
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="wrap">
          <h2>We hope you found inspiration</h2>
          <p className="lede" style={{ margin: "16px auto 0" }}>
            Contact furn hub Upholstery to start your next project.
          </p>
          <Link to="/contact" className="btn solid" style={{ marginTop: 28 }}>
            Contact us
          </Link>
        </div>
      </section>

      <Testimonials />
      <Newsletter />

      <style>{`
        .store-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .product-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--line);
        }
        .product-card img {
          display: block;
          width: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
        }
        .product-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 18px;
          flex: 1;
        }
        .product-body h3 { font-size: 1rem; line-height: 1.3; }
        .product-body .price { font-weight: 500; margin-top: 2px; }
        .product-body .desc {
          font-size: 0.88rem;
          color: var(--ink-soft);
        }
        .product-body .installment {
          font-size: 0.82rem;
          color: var(--ink-soft);
          flex: 1;
        }
        .product-body .add-btn {
          margin-top: 10px;
          width: 100%;
          cursor: pointer;
          text-align: center;
          box-sizing: border-box;
        }
        .product-body .add-btn.added { opacity: 0.85; }
        @media (max-width: 1000px) {
          .store-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .store-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .product-body { padding: 12px; }
          .product-body h3 { font-size: 0.9rem; }
        }
      `}</style>
    </>
  );
}
