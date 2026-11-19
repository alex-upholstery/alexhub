import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";
import PromoPopup from "../components/PromoPopup.jsx";
import promoSofa from "../assets/img/couches/promo-modular-sofa.jpeg";
import heroImg2 from "../assets/img/Occassional-chairs/hero-1.jpg";
import heroImg3 from "../assets/img/headboards&beds/hero-1.jpg";
import heroImg4 from "../assets/img/Dining-tables&chairs/hero-1.jpg";
import heroImg from "../assets/images/back-2.webp";
import chesterfield from "../assets/images/reupholstery-1.jpeg";
import carSeat from "../assets/images/carseat-rear-6.jpeg";
import mediaUnit from "../assets/images/curtains-5.jpeg";
import customTable from "../assets/images/custom-table.jpg";
import livingRoom from "../assets/images/living-room-grey.jpg";
import bedroom from "../assets/images/bedroom-headboard.jpg";
import patioPool from "../assets/images/patio-pool.jpg";
import trustImg from "../assets/img/Occassional-chairs/IMG-20261118-WA0133.jpg";
import trustImg1 from "../assets/img/headboards&beds/IMG-20261118-WA0126.jpg";
import trustImg2 from "../assets/img/Patio/IMG-20261118-WA0153.jpg";
import trustImg3 from "../assets/img/cabinetry/IMG-20261118-WA0161.jpg";
import trustImg4 from "../assets/img/couches/IMG-20261118-WA0056.jpg";

import SideActions from "../components/SideActions.jsx";
// Real showroom photography — De Palace Mall
import newArrivalImg from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0116.jpg";
import showcase1 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0111.jpg";
import showcase2 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0092.jpg";
import showcase3 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0106.jpg";
import showcase4 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0101.jpg";
import showcase5 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0110.jpg";
import showcase6 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0112.jpg";
import showcase7 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0123.jpg";
import showcase8 from "../assets/img/Dining-tables&chairs/IMG-20261118-WA0045.jpg";
import chairsnewArrivalImg from "../assets/img/Occassional-chairs/IMG-20261118-WA0127.jpg";
import chairs1 from "../assets/img/Occassional-chairs/IMG-20261118-WA0006.jpg";
import chairs2 from "../assets/img/Occassional-chairs/IMG-20261118-WA0065.jpg";
import chairs3 from "../assets/img/Occassional-chairs/IMG-20261118-WA0066.jpg";
import chairs4 from "../assets/img/Occassional-chairs/IMG-20261118-WA0073.jpg";
import chairs5 from "../assets/img/Occassional-chairs/IMG-20261118-WA0097.jpg";
import chairs6 from "../assets/img/Occassional-chairs/IMG-20261118-WA0113.jpg";
import chairs7 from "../assets/img/Occassional-chairs/IMG-20261118-WA0127.jpg";
import chairs8 from "../assets/img/Occassional-chairs/IMG-20261118-WA0144.jpg";

import kitchen1 from "../assets/img/cabinetry/IMG-20261118-WA0061.jpg";
import kitchen2 from "../assets/img/cabinetry/IMG-20261118-WA0162.jpg";
import kitchen3 from "../assets/img/cabinetry/IMG-20261118-WA0160.jpg";
import kitchen4 from "../assets/img/cabinetry/IMG-20261118-WA0159.jpg";
import kitchen5 from "../assets/img/cabinetry/IMG-20261118-WA0155.jpg";
import kitchen6 from "../assets/img/cabinetry/IMG-20261118-WA0109.jpg";
import kitchen7 from "../assets/img/cabinetry/IMG-20261118-WA0102.jpg";
import kitchen8 from "../assets/img/cabinetry/IMG-20261118-WA0088.jpg";

import beds1 from "../assets/img/headboards&beds/IMG-20261118-WA0143.jpg";
import beds2 from "../assets/img/headboards&beds/IMG-20261118-WA0152.jpg";
import beds3 from "../assets/img/headboards&beds/IMG-20261118-WA0128.jpg";
import beds4 from "../assets/img/headboards&beds/IMG-20261118-WA0126.jpg";
import beds5 from "../assets/img/headboards&beds/IMG-20261118-WA0042.jpg";
import beds6 from "../assets/img/headboards&beds/IMG-20261118-WA0054.jpg";
import beds7 from "../assets/img/headboards&beds/IMG-20261118-WA0070.jpg";
import beds8 from "../assets/img/headboards&beds/IMG-20261118-WA0057.jpg";

import patios1 from "../assets/img/Pedestals/IMG-20261118-WA0023.jpg";
import patios2 from "../assets/img/Pedestals/IMG-20261118-WA0025.jpg";
import patios3 from "../assets/img/Pedestals/IMG-20261118-WA0130.jpg";
import patios4 from "../assets/img/Pedestals/IMG-20261118-WA0132.jpg";
import patios5 from "../assets/img/Pedestals/IMG-20261118-WA0135.jpg";
import patios6 from "../assets/img/Pedestals/IMG-20261118-WA0138.jpg";
import patios7 from "../assets/img/Pedestals/IMG-20261118-WA0139.jpg";
import patios8 from "../assets/img/Patio/IMG-20261118-WA0153.jpg";

import couches1 from "../assets/img/couches/IMG-20261118-WA0059.jpg";
import couches2 from "../assets/img/couches/IMG-20261118-WA0002.jpg";
import couches3 from "../assets/img/couches/IMG-20261118-WA0004.jpg";
import couches4 from "../assets/img/couches/IMG-20261118-WA0007.jpg";
import couches5 from "../assets/img/couches/IMG-20261118-WA0024.jpg";
import couches6 from "../assets/img/couches/IMG-20261118-WA0028.jpg";
import couches7 from "../assets/img/couches/IMG-20261118-WA0030.jpg";
import couches8 from "../assets/img/couches/IMG-20261118-WA0031.jpg";

const HERO_IMAGES = [heroImg, heroImg, heroImg, heroImg];
const SERVICES = [
  {
    img: chesterfield,
    name: "Reupholstery",
    text: "We replace worn fabric and padding, restoring pieces to their original beauty.",
  },
  {
    img: carSeat,
    name: "Car Upholstery",
    text: "High-quality materials and meticulous craftsmanship for a comfortable interior.",
  },
  {
    img: mediaUnit,
    name: "Curtains & Blinds",
    text: "A wide range of styles and fabrics to suit your home\u2019s privacy and style.",
  },
  {
    img: customTable,
    name: "Custom Furniture",
    text: "Custom design and fabrication that brings your unique vision to life.",
  },
  {
    img: livingRoom,
    name: "Interior Design",
    text: "Comprehensive interior design, from concept to a finished, functional room.",
  },
  {
    img: bedroom,
    name: "Headboards & Beds",
    text: "Traditional to custom-built headboards and beds for any bedroom.",
  },
  {
    img: patioPool,
    name: "Patio",
    text: "Everything you need for a beautiful, functional outdoor living space.",
  },
];

// Prices follow the store listing format: "From R x" + 4 interest-free payments.
// Reference prices: Thule Dining Set (R 34,900), Pumpkin Chair (R 6,500), Ocean Headboard & Base (R 13,700).
const formatRand = (n) =>
  "R " +
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const DINING_FROM = 34900;
const CHAIR_FROM = 6500;
const BED_FROM = 13700;
const KITCHEN_FROM = 31500;
const COUCHES_FROM = 25000;

const SHOWCASE = [
  {
    img: showcase1,
    name: "Live-Edge Oak Dining Table",
    text: "Solid live-edge oak top on a white steel U-frame, paired with sleek white shell chairs.",
    from: DINING_FROM,
  },
  {
    img: showcase2,
    name: "Round Bouclé Dining Set",
    text: "A pale fluted pedestal table with cream bouclé armchairs on dark timber legs.",
    from: DINING_FROM,
  },
  {
    img: showcase3,
    name: "Oval Pedestal Dining Set",
    text: "Oval timber top on a fluted pedestal base with sculpted bouclé dining chairs.",
    from: DINING_FROM,
  },
  {
    img: showcase4,
    name: "Walnut Dining Table & Chairs",
    text: "Rich dark timber table with wood-framed chairs upholstered in light bouclé.",
    from: DINING_FROM,
  },
  {
    img: showcase5,
    name: "Marble-Top Dining Set",
    text: "Marble-effect dining table with button-tufted velvet chairs in soft champagne.",
    from: DINING_FROM,
  },
  {
    img: showcase6,
    name: "Rustic Oak Dining Table",
    text: "Chunky oak top on a black steel frame with taupe upholstered dining chairs.",
    from: DINING_FROM,
  },
  {
    img: showcase7,
    name: "Herringbone Oval Dining Set",
    text: "Oval herringbone-veneer top on a fluted pedestal with taupe velvet chairs.",
    from: DINING_FROM,
  },
  {
    img: showcase8,
    name: "Formal Dining Table & Chairs",
    text: "A long dining table with upholstered taupe chairs, made for formal entertaining.",
    from: DINING_FROM,
  },
];

const CHAIRS = [
  {
    img: chairs1,
    name: "Channel-Back Lounge Chair",
    text: "Ribbed cream bouclé cushions set in a solid timber frame with angled arms.",
    from: CHAIR_FROM,
  },
  {
    img: chairs2,
    name: "Timber-Framed Armchair",
    text: "Textured woven fabric seat and back in a walnut frame with angled arms.",
    from: CHAIR_FROM,
  },
  {
    img: chairs3,
    name: "Cut-Out Velvet Armchair",
    text: "Sculpted mocha velvet shell with a channel-stitched seat cushion.",
    from: CHAIR_FROM,
  },
  {
    img: chairs4,
    name: "Tweed Barrel Chair",
    text: "Rounded barrel back in green-and-black tweed with chunky padded legs.",
    from: CHAIR_FROM,
  },
  {
    img: chairs5,
    name: "Rust Chenille Lounge Chair",
    text: "Deep, rounded rust chenille seat on slim dark timber legs.",
    from: CHAIR_FROM,
  },
  {
    img: chairs6,
    name: "Cloud Bouclé Armchair",
    text: "Cream bouclé with roll arms and a round bolster cushion on a timber base.",
    from: CHAIR_FROM,
  },
  {
    img: chairs7,
    name: "Patterned Bouclé Armchair",
    text: "Geometric green patterned roll back with an olive seat on solid timber legs.",
    from: CHAIR_FROM,
  },
  {
    img: chairs8,
    name: "Round Swivel Tub Chair",
    text: "Tufted taupe bouclé round chair with a scatter cushion, made for lounging.",
    from: CHAIR_FROM,
  },
];
const KITCHEN = [
  {
    img: kitchen1, // WA0061
    name: "Two-Tone L-Shaped Kitchen",
    text: "Oak-look wall units over taupe base cabinets, with handleless doors, a white worktop and black trim details.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen2, // WA0162
    name: "Glass-Door Display & Fridge Unit",
    text: "Black-framed glass cabinets with LED lighting and an oak-look display nook, above taupe storage and beside a built-in fridge surround.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen3, // WA0160
    name: "Fluted Grey Sideboard",
    text: "Fluted grey doors and drawers under a marble-effect top, with black-framed glass wall cabinets and a tall lit display column.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen4, // WA0159
    name: "Floor-to-Ceiling Wardrobe",
    text: "Taupe matte wardrobe with full-height doors, top boxes, sculpted edge pulls and an open lit shelving end with bench seat.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen5, // WA0155
    name: "Glass Display Cabinet & Buffet",
    text: "Glass-fronted wall cabinet with warm LED lighting above a cream-and-oak buffet with drawers and cupboards, ideal for glassware and a drinks station.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen6, // WA0109
    name: "Coffee Station Cabinet",
    text: "White tall unit with a lit marble-effect coffee nook, a glass-door display column, and handleless drawers and cupboards below.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen7, // WA0102
    name: "Gloss White Kitchen Units",
    text: "High-gloss white wall and base cabinets with black bar handles, three-drawer unit and a dark worktop with inset sink.",
    from: KITCHEN_FROM,
  },
  {
    img: kitchen8, // WA0088
    name: "Walnut Handleless Kitchen",
    text: "Rich walnut-grain handleless cabinets with a stone-effect worktop, matching splashback and under-cabinet lighting.",
    from: KITCHEN_FROM,
  },
];
const BEDS = [
  {
    img: beds1,
    name: "Grey Channel Headboard & Base",
    text: "Grey woven fabric with vertical channel panels on the headboard and base.",
    from: BED_FROM,
  },
  {
    img: beds2,
    name: "Green Panelled Headboard & Base",
    text: "Tall forest-green velvet headboard with an X-panel design and matching base.",
    from: BED_FROM,
  },
  {
    img: beds3,
    name: "Black Velvet Gold-Accent Headboard",
    text: "Black velvet headboard with gold veining and a brass-trimmed base.",
    from: BED_FROM,
  },
  {
    img: beds4,
    name: "Ribbed Taupe Headboard & Base",
    text: "Vertical ribbed upholstery framed by a soft wing-style surround.",
    from: BED_FROM,
  },
  {
    img: beds5,
    name: "Full-Wall Panel Headboard",
    text: "Floor-to-ceiling padded panels with timber slats and warm LED lighting.",
    from: BED_FROM,
  },
  {
    img: beds6,
    name: "Gold-Inlay Tall Headboard",
    text: "Tall grey panelled headboard with brass chevron inlay and backlighting.",
    from: BED_FROM,
  },
  {
    img: beds7,
    name: "Diamond-Tufted Headboard & Base",
    text: "Grey fabric headboard with a diamond-quilted design and matching base.",
    from: BED_FROM,
  },
  {
    img: beds8,
    name: "Curved Blush Headboard & Base",
    text: "Soft, rounded blush upholstery with a low base on slim brass legs.",
    from: BED_FROM,
  },
];
const COUCHES = [
  {
    img: couches1,
    name: "Burgundy Bouclé Sofa",
    text: "Cream bouclé rolled arms and back wrapped around a deep burgundy seat, finished with timber side accents.",
    from: COUCHES_FROM,
  },
  {
    img: couches2,
    name: "Cream Curved Sectional",
    text: "Soft, rounded cream corner sofa with olive and neutral scatter cushions.",
    from: COUCHES_FROM,
  },
  {
    img: couches3,
    name: "Taupe Suede Corner Sofa",
    text: "Generous taupe corner sofa in a soft suede-look fabric with softly curved arms.",
    from: COUCHES_FROM,
  },
  {
    img: couches4,
    name: "Low-Profile Chaise Sectional",
    text: "Long, low cream sectional with a chaise end, walnut-trimmed arms and neat back cushions.",
    from: COUCHES_FROM,
  },
  {
    img: couches5,
    name: "Cream Sofa & Armchair Set",
    text: "Two plush cream sofas and a pair of barrel armchairs with walnut-trimmed arms and bases.",
    from: COUCHES_FROM,
  },
  {
    img: couches6,
    name: "Rounded Sofa & Chairs Trio",
    text: "Curved cream three-seater with two matching armchairs, walnut edging and brown scatter cushions.",
    from: COUCHES_FROM,
  },
  {
    img: couches7,
    name: "Navy-Base Corner Sectional",
    text: "Cream corner sofa with a rounded chaise on a dark navy base, styled with quilted teal bolsters.",
    from: COUCHES_FROM,
  },
  {
    img: couches8,
    name: "Modular Bouclé U-Sectional",
    text: "Sculpted modular cream bouclé sofa with a built-in walnut side table.",
    from: COUCHES_FROM,
  },
];
const PATIOS = [
  {
    img: patios1,
    name: "Walnut-Slat Bedside Pedestal",
    text: "Two-drawer pedestal with grey fronts and a timber-slat side panel.",
  },
  {
    img: patios2,
    name: "Fluted Charcoal Pedestal",
    text: "Fluted two-drawer pedestal with a white top, gold handle and brass legs.",
  },
  {
    img: patios3,
    name: "Handle-Free Two-Drawer Pedestal",
    text: "Clean-lined light grey pedestal with two smooth, handle-free drawers.",
  },
  {
    img: patios4,
    name: "Cream Open-Shelf Pedestal",
    text: "Cream pedestal with an open shelf, two drawers and brass pulls.",
  },
  {
    img: patios5,
    name: "White Pedestal with Steel Frame",
    text: "White two-drawer pedestal with black handles on a slim black steel frame.",
  },
  {
    img: patios6,
    name: "Mocha Two-Drawer Pedestal",
    text: "Dark taupe two-drawer pedestal with a smooth, understated finish.",
  },
  {
    img: patios7,
    name: "Champagne Pedestal with Brass Legs",
    text: "Taupe two-drawer pedestal with brass handles and slim brass legs.",
  },
  {
    img: patios8,
    name: "Hardtop Patio Gazebo & Lounge",
    text: "A hardtop gazebo with a comfortable outdoor lounge set for relaxed entertaining.",
  },
];

const TRUST_STATS = [
  { num: "5,000+", label: "Clients believe us" },
  { num: "1,000+", label: "Projects done" },
  { num: "1,500", label: "Products sold" },
];

// Image + text block. When it scrolls into the middle of the viewport the
// image and the text slide across and swap sides (on mobile they slide in).
function SwapSplit({
  img,
  alt,
  eyebrow,
  title,
  text,
  cta,
  to,
  mediaFirst = false,
  stats = true,
}) {
  const ref = useRef(null);
  // Browsers without IntersectionObserver just show the swapped layout.
  const [inView, setInView] = useState(
    typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        rootMargin: "-30% 0px -30% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const media = (
    <div className="split-media swap-media">
      <img src={img} alt={alt} />
    </div>
  );
  const body = (
    <div className="swap-text">
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{ marginTop: 14 }}>{title}</h2>
      <p className="lede" style={{ marginTop: 18 }}>
        {text}
      </p>
      {stats && (
        <div
          className="stat-row"
          style={{ justifyContent: "flex-start", marginTop: 36 }}
        >
          {TRUST_STATS.map((s) => (
            <div key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      )}
      <Link to={to} className="btn solid" style={{ marginTop: 36 }}>
        {cta}
      </Link>
    </div>
  );

  return (
    <div className="wrap">
      <div
        ref={ref}
        className={`split swap-split${mediaFirst ? " media-first" : ""}${inView ? " is-in" : ""}`}
      >
        {mediaFirst ? (
          <>
            {media}
            {body}
          </>
        ) : (
          <>
            {body}
            {media}
          </>
        )}
      </div>
    </div>
  );
}

function PriceTag({ from }) {
  if (!from) return null;
  return (
    <>
      <p className="price">From {formatRand(from)}</p>
      <p className="installment">
        or 4 interest-free payments of {formatRand(from / 4)}
      </p>
    </>
  );
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <PromoPopup image={promoSofa} from={COUCHES_FROM} />
      <section className="hero">
        {HERO_IMAGES.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="A furniture piece reupholstered by  furn hub Upholstery"
            className={i === heroIndex ? "active" : ""}
          />
        ))}
        <div className="hero-content">
          <h1>Your furniture's future, re-imagined</h1>
          <p>
            Expert reupholstery, restoration, and custom design — creating
            comfort, style, and longevity for pieces you already love.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn solid">
              Get a free quote
            </Link>
            <Link to="/portfolio" className="btn">
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>Creating comfort, style and longevity</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Dining Tables and chairs
            </p>
          </div>
          <div className="grid cols-4">
            {SHOWCASE.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <PriceTag from={s.from} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/gallery" className="btn">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>
      <section className="alt">
        <SwapSplit
          img={newArrivalImg}
          alt="Oval marble-effect dining table with a fluted pedestal base and taupe shell chairs on gold legs"
          eyebrow="Fresh from the showroom"
          title="New arrival: fluted marble dining sets"
          text="An oval marble-effect table on a sculpted fluted pedestal, surrounded by taupe shell-back chairs on slim gold legs. Elegant for family dinners and entertaining. Stop by the showroom or browse the collection online."
          cta="Shop new arrivals"
          to="/store"
          mediaFirst={true}
          stats={false}
        />
      </section>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Occassional Chairs
            </p>
          </div>
          <div className="grid cols-4">
            {CHAIRS.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <PriceTag from={s.from} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/gallery" className="btn">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>
      <section>
        <SwapSplit
          img={trustImg}
          alt="Rust orange upholstered armchair with a sculpted cut-out arm design"
          eyebrow="Statement seating"
          title="A sculpted armchair with serious personality"
          text="Deep rust-orange fabric wraps this armchair in a bold, open-arm silhouette with a wide, plush seat. A striking accent piece for living rooms, reading corners and bedrooms."
          cta="Shop occasional chairs"
          to="/store"
          mediaFirst={false}
        />
      </section>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Kitchen Units & Cabinetry
            </p>
          </div>
          <div className="grid cols-4">
            {KITCHEN.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <PriceTag from={s.from} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/gallery" className="btn">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>
      <section>
        <SwapSplit
          img={trustImg3}
          alt="Cream shaker-style L-shaped kitchen with oak-look worktop and splashback"
          eyebrow="Made-to-measure kitchens"
          title="Shaker-style cabinetry, warm and timeless"
          text="Cream shaker doors with brushed knobs, an oak-look worktop and splashback, and a built-in oven and hob. Every unit is built to fit your space, so the finished kitchen looks planned from corner to corner."
          cta="Explore kitchens"
          to="/store"
          mediaFirst={false}
        />
      </section>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Headboards and Beds
            </p>
          </div>
          <div className="grid cols-4">
            {BEDS.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <PriceTag from={s.from} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/gallery" className="btn">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>
      <section>
        <SwapSplit
          img={trustImg1}
          alt="Taupe channel-panel upholstered headboard and base with matching cushions"
          eyebrow="Headboards & beds"
          title="Channel-panel headboards for restful bedrooms"
          text="A tall taupe headboard with vertical channel panels and softly curved sides, paired with a matching upholstered base. Finished in a textured fabric and made to suit any bed size."
          cta="Explore beds"
          to="/store"
          mediaFirst={false}
        />
      </section>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Couches and Sofas
            </p>
          </div>
          <div className="grid cols-4">
            {COUCHES.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <PriceTag from={s.from} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/gallery" className="btn">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>
      <section>
        <SwapSplit
          img={trustImg4}
          alt="Cream curved sofas with orange accent chairs in a dark panelled living room"
          eyebrow="Couches & sofas"
          title="Curved sofas that anchor the whole room"
          text="Plush cream curved sofas paired with burnt-orange accent chairs and a round glass coffee table. A soft, sculptural seating arrangement that stands out against dark panelling and polished floors."
          cta="Shop couches"
          to="/store"
          mediaFirst={false}
        />
      </section>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              Pedestals and Patios
            </p>
          </div>
          <div className="grid cols-4">
            {PATIOS.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <PriceTag from={s.from} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/gallery" className="btn">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>
      <section>
        <SwapSplit
          img={trustImg2}
          alt="Hardtop gazebo with timber posts and an outdoor lounge set on a paved patio"
          eyebrow="Patios & outdoor living"
          title="Covered outdoor living, built to relax in"
          text="A hardtop gazebo with a dark steel roof and sturdy timber posts, shading a cushioned outdoor lounge set. A shaded spot for family time and entertaining, whatever the weather."
          cta="Explore patios"
          to="/store"
          mediaFirst={true}
        />
      </section>
      <Testimonials />
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Creating comfort, style and longevity</h2>
            <p className="lede" style={{ margin: "16px auto 0" }}>
              From a single armchair to a full home renovation, every piece is
              treated with the same craftsmanship and care.
            </p>
          </div>
          <div className="grid cols-4">
            {SERVICES.slice(0, 4).map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <Link to="/services">Learn more</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/services" className="btn">
              View all services
            </Link>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap col-3">
          <div className="step">
            <span className="idx">01</span>
            <div>
              <h3>Restore</h3>
              <p>
                Return to original beauty. We repair damage and recreate the
                former glory of any piece of furniture.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="idx">02</span>
            <div>
              <h3>Refresh</h3>
              <p>
                Stylish updates. We revitalize furniture with new fabrics and
                finishes to match your desired aesthetic.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="idx">03</span>
            <div>
              <h3>Revive</h3>
              <p>
                Complete transformation, combining restoration and refreshing
                for a brand-new finish.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
