import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Testimonials from '../components/Testimonials.jsx';
import Newsletter from '../components/Newsletter.jsx';
import heroImg2 from '../assets/img/Occassional-chairs/hero-1.jpg';
import heroImg3 from '../assets/img/headboards&beds/hero-1.jpg';
import heroImg4 from '../assets/img/Dining-tables&chairs/hero-1.jpg';
import heroImg from '../assets/images/back-2.webp';
import chesterfield from '../assets/images/reupholstery-1.jpeg';
import carSeat from '../assets/images/car-seat-black.jpg';
import mediaUnit from '../assets/images/curtains-5.jpeg';
import customTable from '../assets/images/custom-table.jpg';
import livingRoom from '../assets/images/living-room-grey.jpg';
import bedroom from '../assets/images/bedroom-headboard.jpg';
import patioPool from '../assets/images/patio-pool.jpg';
import trustImg from '../assets/img/Occassional-chairs/IMG-20261118-WA0133.jpg';
import trustImg1 from '../assets/img/headboards&beds/IMG-20261118-WA0126.jpg';
import trustImg2 from '../assets/img/Patio/IMG-20261118-WA0153.jpg'
import SideActions from '../components/SideActions.jsx';
// Real showroom photography — De Palace Mall
import newArrivalImg from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0116.jpg';
import showcase1 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0111.jpg';
import showcase2 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0092.jpg';
import showcase3 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0106.jpg';
import showcase4 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0101.jpg';
import showcase5 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0110.jpg';
import showcase6 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0112.jpg';
import showcase7 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0123.jpg';
import showcase8 from '../assets/img/Dining-tables&chairs/IMG-20261118-WA0045.jpg';
 import chairsnewArrivalImg from '../assets/img/Occassional-chairs/IMG-20261118-WA0127.jpg';
import chairs1 from '../assets/img/Occassional-chairs/IMG-20261118-WA0006.jpg';
import chairs2 from '../assets/img/Occassional-chairs/IMG-20261118-WA0065.jpg';
import chairs3 from '../assets/img/Occassional-chairs/IMG-20261118-WA0066.jpg';
import chairs4 from '../assets/img/Occassional-chairs/IMG-20261118-WA0073.jpg';
import chairs5 from '../assets/img/Occassional-chairs/IMG-20261118-WA0097.jpg';
import chairs6 from '../assets/img/Occassional-chairs/IMG-20261118-WA0113.jpg';
import chairs7 from '../assets/img/Occassional-chairs/IMG-20261118-WA0127.jpg';
import chairs8 from '../assets/img/Occassional-chairs/IMG-20261118-WA0144.jpg';

import beds1 from '../assets/img/headboards&beds/IMG-20261118-WA0143.jpg';
import beds2 from '../assets/img/headboards&beds/IMG-20261118-WA0152.jpg';
import beds3 from '../assets/img/headboards&beds/IMG-20261118-WA0128.jpg';
import beds4 from '../assets/img/headboards&beds/IMG-20261118-WA0126.jpg';
import beds5 from '../assets/img/headboards&beds/IMG-20261118-WA0042.jpg';
import beds6 from '../assets/img/headboards&beds/IMG-20261118-WA0054.jpg';
import beds7 from '../assets/img/headboards&beds/IMG-20261118-WA0070.jpg';
import beds8 from '../assets/img/headboards&beds/IMG-20261118-WA0057.jpg';

import patios1 from '../assets/img/Pedestals/IMG-20261118-WA0023.jpg';
import patios2 from '../assets/img/Pedestals/IMG-20261118-WA0025.jpg';
import patios3 from '../assets/img/Pedestals/IMG-20261118-WA0130.jpg';
import patios4 from '../assets/img/Pedestals/IMG-20261118-WA0132.jpg';
import patios5 from '../assets/img/Pedestals/IMG-20261118-WA0135.jpg';
import patios6 from '../assets/img/Pedestals/IMG-20261118-WA0138.jpg';
import patios7 from '../assets/img/Pedestals/IMG-20261118-WA0139.jpg';
import patios8 from '../assets/img/Patio/IMG-20261118-WA0153.jpg';

const HERO_IMAGES = [heroImg, heroImg, heroImg, heroImg];
const SERVICES = [
  { img: chesterfield, name: 'Reupholstery', text: 'We replace worn fabric and padding, restoring pieces to their original beauty.' },
  { img: carSeat, name: 'Car Upholstery', text: 'High-quality materials and meticulous craftsmanship for a comfortable interior.' },
  { img: mediaUnit, name: 'Curtains & Blinds', text: 'A wide range of styles and fabrics to suit your home\u2019s privacy and style.' },
  { img: customTable, name: 'Custom Furniture', text: 'Custom design and fabrication that brings your unique vision to life.' },
  { img: livingRoom, name: 'Interior Design', text: 'Comprehensive interior design, from concept to a finished, functional room.' },
  { img: bedroom, name: 'Headboards & Beds', text: 'Traditional to custom-built headboards and beds for any bedroom.' },
  { img: patioPool, name: 'Patio', text: 'Everything you need for a beautiful, functional outdoor living space.' },
];

const SHOWCASE = [
  { img: showcase1, name: 'Curved Corner Sectional' },
  { img: showcase2, name: 'Bubble Bed Frame' },
  { img: showcase3, name: 'Grey Modular Sectional' },
  { img: showcase4, name: 'Powder Blue Curved Sofa' },
  { img: showcase5, name: 'Bouclé Armchair Pairing' },
  { img: showcase6, name: 'Beige Sofa Suite' },
  { img: showcase7, name: 'Beige Sofa Suite' },
  { img: showcase8, name: 'Beige Sofa Suite' },
];

const CHAIRS = [
  { img: chairs1, name: 'Curved Corner Sectional' },
  { img: chairs2, name: 'Bubble Bed Frame' },
  { img: chairs3, name: 'Grey Modular Sectional' },
  { img: chairs4, name: 'Powder Blue Curved Sofa' },
  { img: chairs5, name: 'Bouclé Armchair Pairing' },
  { img: chairs6, name: 'Beige Sofa Suite' },
   { img: chairs7, name: 'Beige Sofa Suite' },
    { img: chairs8, name: 'Beige Sofa Suite' },
];

const BEDS = [
  { img: beds1, name: 'Curved Corner Sectional' },
  { img: beds2, name: 'Bubble Bed Frame' },
  { img: beds3, name: 'Grey Modular Sectional' },
  { img: beds4, name: 'Powder Blue Curved Sofa' },
  { img: beds5, name: 'Bouclé Armchair Pairing' },
  { img: beds6, name: 'Beige Sofa Suite' },
   { img: beds7, name: 'Beige Sofa Suite' },
    { img: beds8, name: 'Beige Sofa Suite' },
];

const PATIOS = [
  { img: patios1, name: 'Curved Corner Sectional' },
  { img: patios2, name: 'Bubble Bed Frame' },
  { img: patios3, name: 'Grey Modular Sectional' },
  { img: patios4, name: 'Powder Blue Curved Sofa' },
  { img: patios5, name: 'Bouclé Armchair Pairing' },
  { img: patios6, name: 'Beige Sofa Suite' },
   { img: patios7, name: 'Beige Sofa Suite' },
    { img: patios8, name: 'Beige Sofa Suite' },
];
export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
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
      className={i === heroIndex ? 'active' : ''}
    />
  ))}
  <div className="hero-content">
    <h1>Your furniture's future, re-imagined</h1>
    <p>
      Expert reupholstery, restoration, and custom design — creating
      comfort, style, and longevity for pieces you already love.
    </p>
    <div className="hero-actions">
      <Link to="/contact" className="btn solid">Get a free quote</Link>
      <Link to="/portfolio" className="btn">See our work</Link>
    </div>
  </div>
</section>

     
 <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>Creating comfort, style and longevity</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
             Dining Tables and chairs
            </p>
          </div>
          <div className="grid cols-4">
            {SHOWCASE.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/gallery" className="btn">See the full gallery</Link>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <div className="split">
            <div className="split-media">
              <img src={newArrivalImg} alt="Boucle curved sofa, new showroom arrival" />
            </div>
            <div>
              <span className="eyebrow">Fresh from the showroom</span>
              <h2 style={{ marginTop: 14 }}>New arrivals, ready to view in person</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Sculptural sofas, statement beds and curved sectionals —
                styled and ready to inspire your next room. Stop by the
                showroom or browse the collection online.
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
            <p className="lede" style={{ margin: '16px auto 0' }}>
             Occassional  Chairs
            </p>
          </div>
          <div className="grid cols-4">
            {CHAIRS.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/gallery" className="btn">See the full gallery</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Trusted to give your furniture a new life</span>
              <h2 style={{ marginTop: 14 }}>
                Don't say goodbye to your favorite pieces
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Partner with us to restore and revitalize the furniture you
                love. From selecting fabrics to meticulous craftsmanship, we
                bring your vision to life.
              </p>
              <div className="stat-row" style={{ justifyContent: 'flex-start', marginTop: 36 }}>
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
              <img src={trustImg} alt="Blue upholstered couch with matching ottoman" />
            </div>
          </div>
        </div>
      </section>

     

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
             Headboards and Beds
            </p>
          </div>
          <div className="grid cols-4">
            {BEDS.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/gallery" className="btn">See the full gallery</Link>
          </div>
        </div>
      </section>
  <section>
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Trusted to give your furniture a new life</span>
              <h2 style={{ marginTop: 14 }}>
                Don't say goodbye to your favorite pieces
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Partner with us to restore and revitalize the furniture you
                love. From selecting fabrics to meticulous craftsmanship, we
                bring your vision to life.
              </p>
              <div className="stat-row" style={{ justifyContent: 'flex-start', marginTop: 36 }}>
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
              <img src={trustImg1} alt="Blue upholstered couch with matching ottoman" />
            </div>
          </div>
        </div>
      </section>
           <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside our showroom</span>
            <h2>A closer look at recent pieces</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
             Pedestals and Patios
            </p>
          </div>
          <div className="grid cols-4">
            {PATIOS.map((s) => (
              <div className="service-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="body">
                  <h3>{s.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/gallery" className="btn">See the full gallery</Link>
          </div>
        </div>
      </section>
  <section>
        <div className="wrap">
          <div className="split">
             <div className="split-media">
              <img src={trustImg2} alt="Blue upholstered couch with matching ottoman" />
            </div>
            <div>
              <span className="eyebrow">Trusted to give your furniture a new life</span>
              <h2 style={{ marginTop: 14 }}>
                Don't say goodbye to your favorite pieces
              </h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Partner with us to restore and revitalize the furniture you
                love. From selecting fabrics to meticulous craftsmanship, we
                bring your vision to life.
              </p>
              <div className="stat-row" style={{ justifyContent: 'flex-start', marginTop: 36 }}>
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
            <p className="lede" style={{ margin: '16px auto 0' }}>
              From a single armchair to a full home renovation, every piece
              is treated with the same craftsmanship and care.
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
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/services" className="btn">View all services</Link>
          </div>
        </div>
      </section>
       <section className="alt">
        <div className="wrap col-3">
          <div className="step">
            <span className="idx">01</span>
            <div>
              <h3>Restore</h3>
              <p>Return to original beauty. We repair damage and recreate the former glory of any piece of furniture.</p>
            </div>
          </div>
          <div className="step">
            <span className="idx">02</span>
            <div>
              <h3>Refresh</h3>
              <p>Stylish updates. We revitalize furniture with new fabrics and finishes to match your desired aesthetic.</p>
            </div>
          </div>
          <div className="step">
            <span className="idx">03</span>
            <div>
              <h3>Revive</h3>
              <p>Complete transformation, combining restoration and refreshing for a brand-new finish.</p>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}