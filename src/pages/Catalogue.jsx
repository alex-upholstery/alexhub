import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter.jsx';

import chesterfield from '../assets/images/reupholstery-1.jpeg';
import bedroom from '../assets/images/bedroom-headboard.jpg';
import accentChair from '../assets/images/accent-chair-mustard.jpg';
import livingRoomGrey from '../assets/images/curtains-3.jpeg';
import carSeat from '../assets/images/car-seat-black.jpg';
import livingRoomYellow from '../assets/images/living-room-yellow.jpg';
import mediaUnit from '../assets/images/curtains-9.jpeg';
import outdoorBench from '../assets/images/carpentry-1.jpeg';
import fabric1 from '../assets/images/fabric-swatch-1.jpg';
import fabric2 from '../assets/images/fabric-swatch-2.jpg';
import fabric3 from '../assets/images/fabric-swatch-3.jpg';
import fabric4 from '../assets/images/fabric-4.webp';
import outdoorCouch from '../assets/images/outdoor-couch.jpg';
import sectionalBlue from '../assets/images/sectional-blue-cushion.jpg';
import longGreyCouch from '../assets/images/long-grey-couch.jpg';
import armchairGrey from '../assets/images/armchair-grey.jpg';
import kitchenWhite from '../assets/images/kitchen-white.jpg';
import patioPool from '../assets/images/patio-pool.jpg';
import blueCouchOttoman from '../assets/images/blue-couch-ottoman.jpg';

// Real showroom photography — De Palace Mall
import showroomCornerSofa from '../assets/images/showroom-brown-corner-sofa.webp';
import showroomBubbleBed from '../assets/images/upholstered-bubble-bed-grey.webp';
import showroomGreySectional from '../assets/images/showroom-grey-sectional-brown-chair.webp';
import showroomBlueSofa from '../assets/images/showroom-blue-sofa-green-ottomans.webp';
import showroomWhiteCurved from '../assets/images/showroom-white-curved-sofa.webp';
import showroomBoucleArmchairs from '../assets/images/showroom-brown-sofa-grey-armchairs.webp';
import showroomWhiteSectional from '../assets/images/showroom-white-sectional-mustard-pillow.webp';
import showroomBeigeSuite from '../assets/images/showroom-beige-sofas-brown-chairs-art.webp';

const RAIL = [
  'Reupholstery', 'Car Upholstery', 'Curtains & Blinds', 'Custom Furniture',
  'Carpentry', 'Interior Design', 'Headboards & Beds', 'Patio',
];

const ROW1 = [
  { img: chesterfield, name: 'Reupholstery' },
  { img: bedroom, name: 'Headboards & Beds' },
];

const ROW2 = [
  { img: accentChair, name: 'Custom Furniture' },
  { img: livingRoomGrey, name: 'Interior Design' },
  { img: carSeat, name: 'Car Upholstery' },
];

const SHOWROOM = [
  { img: longGreyCouch, name: 'Channel-Back Sofa', cap: 'Grey boucle, reupholstered on a rebuilt frame.' },
  { img: armchairGrey, name: 'Lounge Armchair', cap: 'Brushed wool, a quiet shape for any corner.' },
  { img: blueCouchOttoman, name: 'Couch & Ottoman Set', cap: 'Velvet finish with a matching footstool.' },
  { img: accentChair, name: 'Wingback Accent Chair', cap: 'A statement piece for an entryway or study.' },
  { img: showroomCornerSofa, name: 'Curved Corner Sectional', cap: 'A sweeping brown suede corner sofa, built for family living rooms.' },
  { img: showroomBubbleBed, name: 'Bubble Bed Frame', cap: 'An upholstered bed with a sculptural bubble silhouette in soft bouclé.' },
  { img: showroomGreySectional, name: 'Grey Modular Sectional', cap: 'Chaise-style modular seating in soft grey, made for open-plan spaces.' },
  { img: showroomBlueSofa, name: 'Powder Blue Curved Sofa', cap: 'A relaxed curved sofa styled with rounded bouclé ottomans.' },
];

const INSPIRE = [
  { img: kitchenWhite, cap: 'Kitchen cabinetry refit' },
  { img: livingRoomYellow, cap: 'Mustard lounge refresh' },
  { img: bedroom, cap: 'Headboard restyle' },
  { img: patioPool, cap: 'Poolside patio set' },
  { img: sectionalBlue, cap: 'Blue velvet corner' },
  { img: showroomWhiteCurved, cap: 'Boucle curved sofa lounge' },
  { img: showroomBoucleArmchairs, cap: 'Bouclé armchair pairing' },
  { img: showroomBeigeSuite, cap: 'Beige sofa suite with leather chairs' },
];

export default function Catalogue() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <span className="eyebrow">Catalogue</span>
          <h1>Explore what we can restore, build, and finish</h1>
          <p className="lede">
            Every category below is real work from our workshop — browse by
            the kind of piece or project you have in mind.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 32 }}>
        <div className="wrap">
          <div className="cat-rail">
            {RAIL.map((r) => (
              <Link to="/services" key={r}>{r}</Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid cols-2" style={{ marginBottom: 28 }}>
            {ROW1.map((t) => (
              <Link to="/services" className="cat-tile" key={t.name}>
                <img src={t.img} alt={t.name} />
                <span className="name">{t.name} <span className="arrow">&rarr;</span></span>
              </Link>
            ))}
          </div>
          <div className="grid cols-3">
            {ROW2.map((t) => (
              <Link to="/services" className="cat-tile" key={t.name}>
                <img src={t.img} alt={t.name} />
                <span className="name">{t.name} <span className="arrow">&rarr;</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="bento">
            <Link to="/services" className="cat-tile big">
              <img src={livingRoomYellow} alt="Business & Commercial Furniture" />
              <span className="name">Business & Commercial Furniture <span className="arrow">&rarr;</span></span>
            </Link>
            <Link to="/services" className="cat-tile">
              <img src={mediaUnit} alt="Curtains & Blinds" />
              <span className="name">Curtains & Blinds <span className="arrow">&rarr;</span></span>
            </Link>
            <Link to="/services" className="cat-tile">
              <img src={outdoorBench} alt="Carpentry" />
              <span className="name">Carpentry <span className="arrow">&rarr;</span></span>
            </Link>
            <Link to="/services" className="cat-tile" style={{ gridColumn: 'span 2' }}>
              <img src={patioPool} alt="Patio" style={{ aspectRatio: '32/10' }} />
              <span className="name">Patio <span className="arrow">&rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Fabrics &amp; finishes</span>
            <h2>Choose from hundreds of fabrics</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
              Bring your own material, or pick from our supplier range —
              we'll help you land on the right weight, weave, and colour.
            </p>
          </div>
          <div className="grid cols-4">
            {[fabric1, fabric2, fabric3, fabric4].map((f, i) => (
              <img src={f} alt={`Fabric swatch ${i + 1}`} key={i} style={{ aspectRatio: '4/3', objectFit: 'cover' }} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/contact" className="btn">Book a fabric consultation</Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="section-head left">
            <h2>Recently completed</h2>
          </div>
          <div className="overlay-row">
            <div className="overlay-tile">
              <img src={outdoorCouch} alt="Outdoor sectional reupholstery" />
              <span>Outdoor Sectional Refit</span>
            </div>
            <div className="overlay-tile">
              <img src={sectionalBlue} alt="Lounge sectional reupholstery" />
              <span>Lounge Reupholstery</span>
            </div>
            <div className="overlay-tile">
              <img src={showroomWhiteSectional} alt="White modular sectional finish" />
              <span>Modular Sectional Build</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head left">
            <span className="eyebrow">From our showroom</span>
            <h2>A few current favourites</h2>
          </div>
          <div className="grid cols-4">
            {SHOWROOM.map((s) => (
              <div className="showroom-item" key={s.name}>
                <img src={s.img} alt={s.name} />
                <span className="name">{s.name}</span>
                <span className="cap">{s.cap}</span>
                <Link to="/contact">Ask for a quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="section-head left">
            <h2>Get inspired</h2>
            <p className="lede" style={{ marginTop: 12 }}>A few finished rooms, scroll for more.</p>
          </div>
          <div className="scroll-strip">
            {INSPIRE.map((s, i) => (
              <div className="scroll-item" key={i}>
                <img src={s.img} alt={s.cap} />
                <div className="cap">{s.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2>Have something in mind that's not pictured here?</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>
            Almost everything we do starts as a conversation — tell us about
            your piece and we'll quote it properly.
          </p>
          <Link to="/contact" className="btn solid" style={{ marginTop: 28 }}>Get a free quote</Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
