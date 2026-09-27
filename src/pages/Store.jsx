import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials.jsx';
import Newsletter from '../components/Newsletter.jsx';

import g1 from '../assets/images/chesterfield-chaise.jpg';
import g2 from '../assets/images/hero-couch-blue.jpg';
import g3 from '../assets/images/long-grey-couch.jpg';
import g4 from '../assets/images/media-unit.jpg';
import g5 from '../assets/images/living-room-grey.jpg';
import g6 from '../assets/images/living-room-yellow.jpg';
import g7 from '../assets/images/armchair-grey.jpg';
import g8 from '../assets/images/blue-couch-ottoman.jpg';
import g9 from '../assets/images/fabric-swatch-1.jpg';
import g10 from '../assets/images/fabric-swatch-2.jpg';
import g11 from '../assets/images/fabric-swatch-3.jpg';
import g12 from '../assets/images/fabric-swatch-4.jpg';
import g13 from '../assets/images/patio-chairs.jpg';
import g14 from '../assets/images/patio-pergola.jpg';
import g15 from '../assets/images/outdoor-couch.jpg';
import g16 from '../assets/images/sectional-blue-cushion.jpg';

// Showroom pieces — Doringkloof Mall
import s1 from '../assets/images/showroom-brown-sectional-armchair.webp';
import s2 from '../assets/images/showroom-white-curved-sofa.webp';
import s3 from '../assets/images/showroom-white-curved-sofa-top.webp';
import s4 from '../assets/images/showroom-blue-sofa-green-ottomans.webp';
import s5 from '../assets/images/showroom-blue-sofa-top.webp';
import s6 from '../assets/images/showroom-blue-sofa-green-armchairs-top.webp';
import s7 from '../assets/images/upholstered-bubble-bed-grey.webp';
import s8 from '../assets/images/showroom-brown-sofas-patterned-ottoman.webp';
import s9 from '../assets/images/showroom-brown-sofa-brown-chair.webp';
import s10 from '../assets/images/showroom-brown-sofa-green-chairs.webp';
import s11 from '../assets/images/showroom-brown-sofas-patterned-ottoman-wide.webp';
import s12 from '../assets/images/showroom-brown-sofa-grey-armchairs.webp';
import s13 from '../assets/images/showroom-brown-sofa-grey-armchairs-2.webp';
import s14 from '../assets/images/showroom-brown-sofas-green-chairs-wide.webp';
import s15 from '../assets/images/showroom-brown-sofas-brown-chairs-wide.webp';
import s16 from '../assets/images/showroom-grey-sectional-brown-chair.webp';
import s17 from '../assets/images/showroom-grey-sectional-top.webp';
import s18 from '../assets/images/showroom-brown-corner-sofa.webp';
import s19 from '../assets/images/showroom-brown-corner-sofa-wide.webp';

// Showroom pieces — batch 2
import s20 from '../assets/images/showroom-beige-sofas-dark-chairs.webp';
import s21 from '../assets/images/showroom-beige-sofas-brown-chairs-art.webp';
import s22 from '../assets/images/showroom-beige-sofa-set-top.webp';
import s23 from '../assets/images/showroom-grey-curved-sofas-top.webp';
import s24 from '../assets/images/showroom-grey-sofa-orange-chairs.webp';
import s25 from '../assets/images/showroom-white-curved-sofa-orange-pillows.webp';
import s26 from '../assets/images/showroom-white-sofa-green-ottomans.webp';
import s27 from '../assets/images/showroom-white-sofa-cream-bubble-chair.webp';
import s28 from '../assets/images/showroom-white-curved-sofa-wide.webp';
import s29 from '../assets/images/showroom-white-sectional-mustard-pillow.webp';
import s30 from '../assets/images/showroom-white-sectional-black-chair.webp';
import s31 from '../assets/images/showroom-white-sectional-mustard-ottoman-top.webp';
import s32 from '../assets/images/showroom-white-sectional-rust-bubble-chair.webp';
import s33 from '../assets/images/showroom-white-sectional-brown-chair-top.webp';
import s34 from '../assets/images/showroom-beige-armchair-pair.webp';
import s35 from '../assets/images/showroom-beige-sofas-brown-chairs-wide.webp';
import s36 from '../assets/images/showroom-beige-sofa-set-wide.webp';
import s37 from '../assets/images/showroom-beige-armchairs-loveseat-sofa.webp';

const IMAGES = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16];

const SHOWROOM_IMAGES = [
  { src: s1, label: 'Curved brown sectional & accent chair' },
  { src: s2, label: 'Boucle white curved sofa' },
  { src: s3, label: 'Curved sofa, top view' },
  { src: s4, label: 'Powder blue curved sofa & green ottomans' },
  { src: s5, label: 'Blue sofa seating, top view' },
  { src: s6, label: 'Blue sofa & green armchairs' },
  { src: s7, label: 'Upholstered bubble bed frame' },
  { src: s8, label: 'Brown sofas & patterned ottoman' },
  { src: s9, label: 'Brown sofa & leather accent chairs' },
  { src: s10, label: 'Brown sofa & olive green chairs' },
  { src: s11, label: 'Brown sofa suite, wide view' },
  { src: s12, label: 'Brown sofa & bouclé grey armchairs' },
  { src: s13, label: 'Grey armchair pairing' },
  { src: s14, label: 'Brown sofas & green chairs, wide view' },
  { src: s15, label: 'Brown sofa suite with leather chairs' },
  { src: s16, label: 'Grey modular sectional & leather chair' },
  { src: s17, label: 'Grey sectional, top view' },
  { src: s18, label: 'Curved brown corner sofa' },
  { src: s19, label: 'Brown corner sofa, wide view' },
  { src: s20, label: 'Beige sofa set with dark accent chairs' },
  { src: s21, label: 'Beige sofas & brown leather chairs' },
  { src: s22, label: 'Beige sofa set, top view' },
  { src: s23, label: 'Twin grey curved sofas, top view' },
  { src: s24, label: 'Grey curved sofa & burnt-orange chairs' },
  { src: s25, label: 'White curved sofa with orange accent pillows' },
  { src: s26, label: 'White sofa & olive bouclé ottomans' },
  { src: s27, label: 'White sofa & cream bubble chair' },
  { src: s28, label: 'White curved sofa, wide view' },
  { src: s29, label: 'White sectional with mustard accent pillow' },
  { src: s30, label: 'White sectional & sculptural black chair' },
  { src: s31, label: 'White sectional, top view' },
  { src: s32, label: 'White sectional & rust bubble chair' },
  { src: s33, label: 'White sectional & brown leather chair, top view' },
  { src: s34, label: 'Beige two-tone armchair pair' },
  { src: s35, label: 'Beige sofa suite, wide view' },
  { src: s36, label: 'Beige sofa set, full room view' },
 
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Gallery</span>
          <h1>See your furniture's new life</h1>
          <p className="lede">
            Beautifully transformed sofas, chairs, headboards, and more —
            from classic elegance to modern design, with a vast fabric
            selection and personalized service.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="gallery-grid">
            {IMAGES.map((img, i) => (
              <img src={img} alt={` furn hub Upholstery project ${i + 1}`} key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <span className="eyebrow">Showroom</span>
          <h2>Curated pieces from Doringkloof Mall</h2>
          <p className="lede" style={{ margin: '16px 0 0' }}>
            A closer look at recent showroom sets — sectionals, armchairs and
            statement beds, styled and ready to inspire your next room.
          </p>

          <div className="showroom-masonry">
            {SHOWROOM_IMAGES.map((item, i) => (
              <figure className="showroom-tile" key={i}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2>We hope you found inspiration</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>
            Contact  furn hub Upholstery to start your next project.
          </p>
          <Link to="/contact" className="btn solid" style={{ marginTop: 28 }}>Contact us</Link>
        </div>
      </section>

      <Testimonials />
      <Newsletter />

      <style>{`
        .showroom-masonry {
          margin-top: 40px;
          columns: 4 260px;
          column-gap: 18px;
        }
        .showroom-tile {
          break-inside: avoid;
          margin: 0 0 18px;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          background: #111;
        }
        .showroom-tile img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 0.5s ease;
        }
        .showroom-tile:hover img {
          transform: scale(1.06);
        }
        .showroom-tile figcaption {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 14px 14px 12px;
          font-size: 0.85rem;
          color: #fff;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 85%);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .showroom-tile:hover figcaption {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 640px) {
          .showroom-masonry { columns: 2 160px; column-gap: 12px; }
          .showroom-tile { margin-bottom: 12px; border-radius: 10px; }
          .showroom-tile figcaption { opacity: 1; transform: none; font-size: 0.72rem; padding: 10px 10px 8px; }
        }
      `}</style>
    </>
  );
}
