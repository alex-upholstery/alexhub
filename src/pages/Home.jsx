import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";
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
        <div className="wrap">
          <div className="split">
            <div className="split-media">
              <img
                src={newArrivalImg}
                alt="Boucle curved sofa, new showroom arrival"
              />
            </div>
            <div>
              <span className="eyebrow">Fresh from the showroom</span>
              <h2 style={{ marginTop: 14 }}>
                New arrivals, ready to view in person
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Sculptural sofas, statement beds and curved sectionals — styled
                and ready to inspire your next room. Stop by the showroom or
                browse the collection online.
              </p>
              <Link to="/store" className="btn solid" style={{ marginTop: 36 }}>
                Shop new arrivals
              </Link>
            </div>
          </div>
        </div>
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
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">
                Trusted to give your furniture a new life
              </span>
              <h2 style={{ marginTop: 14 }}>
                Don't say goodbye to your favorite pieces
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Partner with us to restore and revitalize the furniture you
                love. From selecting fabrics to meticulous craftsmanship, we
                bring your vision to life.
              </p>
              <div
                className="stat-row"
                style={{ justifyContent: "flex-start", marginTop: 36 }}
              >
                <div>
                  <div className="num">5,000+</div>
                  <div className="label">Clients believe us</div>
                </div>
                <div>
                  <div className="num">1,000+</div>
                  <div className="label">Projects done</div>
                </div>
                <div>
                  <div className="num">1,500</div>
                  <div className="label">Products sold</div>
                </div>
              </div>
              <Link to="/about" className="btn solid" style={{ marginTop: 36 }}>
                Learn our story
              </Link>
            </div>
            <div className="split-media">
              <img
                src={trustImg}
                alt="Blue upholstered couch with matching ottoman"
              />
            </div>
          </div>
        </div>
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
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">
                Trusted to give your furniture a new life
              </span>
              <h2 style={{ marginTop: 14 }}>
                Don't say goodbye to your favorite pieces
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Partner with us to restore and revitalize the furniture you
                love. From selecting fabrics to meticulous craftsmanship, we
                bring your vision to life.
              </p>
              <div
                className="stat-row"
                style={{ justifyContent: "flex-start", marginTop: 36 }}
              >
                <div>
                  <div className="num">5,000+</div>
                  <div className="label">Clients believe us</div>
                </div>
                <div>
                  <div className="num">1,000+</div>
                  <div className="label">Projects done</div>
                </div>
                <div>
                  <div className="num">1,500</div>
                  <div className="label">Products sold</div>
                </div>
              </div>
              <Link to="/about" className="btn solid" style={{ marginTop: 36 }}>
                Learn our story
              </Link>
            </div>
            <div className="split-media">
              <img
                src={trustImg1}
                alt="Blue upholstered couch with matching ottoman"
              />
            </div>
          </div>
        </div>
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
        <div className="wrap">
          <div className="split">
            <div className="split-media">
              <img
                src={trustImg2}
                alt="Blue upholstered couch with matching ottoman"
              />
            </div>
            <div>
              <span className="eyebrow">
                Trusted to give your furniture a new life
              </span>
              <h2 style={{ marginTop: 14 }}>
                Don't say goodbye to your favorite pieces
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Partner with us to restore and revitalize the furniture you
                love. From selecting fabrics to meticulous craftsmanship, we
                bring your vision to life.
              </p>
              <div
                className="stat-row"
                style={{ justifyContent: "flex-start", marginTop: 36 }}
              >
                <div>
                  <div className="num">5,000+</div>
                  <div className="label">Clients believe us</div>
                </div>
                <div>
                  <div className="num">1,000+</div>
                  <div className="label">Projects done</div>
                </div>
                <div>
                  <div className="num">1,500</div>
                  <div className="label">Products sold</div>
                </div>
              </div>
              <Link to="/about" className="btn solid" style={{ marginTop: 36 }}>
                Learn our story
              </Link>
            </div>
          </div>
        </div>
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
