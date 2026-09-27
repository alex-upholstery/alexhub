import { useState } from 'react';
import Newsletter from '../components/Newsletter.jsx';

import bedroom from '../assets/images/bedroom-headboard.jpg';
import mediaUnit from '../assets/images/media-unit.jpg';
import carSeat from '../assets/images/car-seat-side.jpg';
import patioLounge from '../assets/images/patio-lounge.jpg';
import livingRoom from '../assets/images/living-room-yellow.jpg';
import outdoorBench from '../assets/images/outdoor-bench.jpg';
import chesterfield from '../assets/images/chesterfield-chaise.jpg';
import outdoorCouch from '../assets/images/outdoor-couch.jpg';
import kitchen from '../assets/images/kitchen-white.jpg';

const FILTERS = ['All', 'Home Furniture', 'Custom Designs', 'Auto Upholstery', 'Commercial Projects'];

const WORK = [
  { idx: '01', img: bedroom, title: 'Beds and Headboards', text: 'Bring your ideas, and make your bedroom beautiful.', cat: 'Home Furniture' },
  { idx: '02', img: mediaUnit, title: 'Curtains & Blinds Installations', text: 'Transform living spaces to match the style of your rooms.', cat: 'Home Furniture' },
  { idx: '03', img: carSeat, title: 'Car Seats Repair', text: 'We tailor our services to fit your style and preferences.', cat: 'Auto Upholstery' },
  { idx: '04', img: patioLounge, title: 'Patio', text: 'Making furniture to match the outdoor style.', cat: 'Custom Designs' },
  { idx: '05', img: livingRoom, title: 'Establishment Seating', text: 'From hotels to offices — we tailor services to elevate the experience.', cat: 'Commercial Projects' },
  { idx: '06', img: outdoorBench, title: 'Indoor & Outdoor Benches', text: 'We create benches that add comfort to any space.', cat: 'Custom Designs' },
  { idx: '07', img: chesterfield, title: 'Statement Chesterfields', text: 'Deep-buttoned classics, reupholstered by hand.', cat: 'Home Furniture' },
  { idx: '08', img: outdoorCouch, title: 'Outdoor Sectionals', text: 'Weather-ready fabrics for year-round entertaining.', cat: 'Custom Designs' },
  { idx: '09', img: kitchen, title: 'Kitchen Fit-Outs', text: 'Cabinetry and finishes as part of a full room refresh.', cat: 'Commercial Projects' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? WORK : WORK.filter((w) => w.cat === filter);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Portfolio</span>
          <h1>Our collection of works</h1>
          <p className="lede">
            View a selection of our completed upholstery, custom design, and
            renovation projects — the skill, care, and quality we bring to
            every piece.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="btn"
                style={
                  filter === f
                    ? { background: 'var(--ink)', color: 'var(--cream)' }
                    : undefined
                }
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid cols-3">
            {items.map((w) => (
              <div className="service-card" key={w.title}>
                <img src={w.img} alt={w.title} />
                <div className="body">
                  <span className="eyebrow">{w.idx}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
