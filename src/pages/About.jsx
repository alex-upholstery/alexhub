import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials.jsx';
import Newsletter from '../components/Newsletter.jsx';
import aboutHero from '../assets/images/living-room-yellow.jpg';
import processImg from '../assets/images/fabric-swatch-1.jpg';

const TEAM = [
  { role: 'Lead Upholsterer', name: 'Liveson', text: 'The master craftsperson responsible for the highest quality upholstery work, ensuring meticulous attention to detail and flawless execution.' },
  { role: 'Design Consultant', name: 'Obert', text: 'The creative visionary who collaborates with clients, providing design expertise, fabric selection, and project planning.' },
  { role: 'Project Manager', name: 'Saide', text: 'The orchestrator of every project, overseeing timelines, coordinating resources, and ensuring a smooth, efficient workflow.' },
];

const STEPS = [
  { title: 'Consultation & Assessment', text: 'We begin with a discussion about your furniture and your vision, assess its condition, discuss fabric options, and provide a personalized quote.' },
  { title: 'Preparation & Deconstruction', text: 'The existing upholstery is carefully removed, documenting the original construction. The frame is inspected and repaired for structural integrity.' },
  { title: 'Upholstery & Craftsmanship', text: 'Your piece is rebuilt by hand with new padding, fabric, and detailing — matched to the finish agreed at consultation.' },
  { title: 'Finishing & Delivery', text: 'Final touches and a quality check, then your furniture is delivered and arranged in your space.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About Us</span>
          <h1>Get to know the team behind every stitch</h1>
          <p className="lede">
            Discover how we treat your furniture with love — from first
            consultation to the finished piece.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split">
            <div>
              <h2>Welcome to  furn hub Upholstery</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Does your cherished furniture show signs of wear and tear?
                Reconsider parting with your beloved pieces. We specialize in
                the restoration and revitalization of furniture, extending
                its lifespan and enhancing its aesthetic appeal.
              </p>
              <p className="lede" style={{ marginTop: 14 }}>
                Imagine a dining room where your chairs take center stage,
                and a living room with an inviting atmosphere — all thanks
                to expertly revitalized upholstery.
              </p>
            </div>
            <div className="split-media">
              <img src={aboutHero} alt="Living room with a grey sofa and a mustard accent chair" />
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap grid cols-2">
          <div className="feature">
            <span className="eyebrow">Our vision</span>
            <h3 style={{ marginTop: 12 }}>To create inviting and spotlight-worthy furniture through expert upholstery and design.</h3>
          </div>
          <div className="feature">
            <span className="eyebrow">Our mission</span>
            <h3 style={{ marginTop: 12 }}>To breathe new life into beloved furniture, ensuring it continues to be cherished.</h3>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Meet our team</span>
            <h2>Our skilled craftsmen</h2>
            <p className="lede" style={{ margin: '16px auto 0' }}>
              Committed to excellence, our team brings years of experience
              to every project — passionate about turning your vision into
              reality.
            </p>
          </div>
          <div className="grid cols-3">
            {TEAM.map((m) => (
              <div className="feature" key={m.name}>
                <span className="eyebrow">{m.role}</span>
                <h3 style={{ marginTop: 10 }}>{m.name}</h3>
                <p style={{ marginTop: 8 }}>{m.text}</p>
                <a href="https://wa.me/27634555268" className="btn thread" style={{ marginTop: 18 }}>
                  Message on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="split reverse">
            <div>
              <span className="eyebrow">Trust the process</span>
              <h2 style={{ marginTop: 14 }}>From worn to wonderful</h2>
              <p className="lede" style={{ marginTop: 14 }}>Your furniture, expertly restored — step by step.</p>
              <div style={{ marginTop: 24 }}>
                {STEPS.map((s, i) => (
                  <div className="step" key={s.title}>
                    <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="split-media">
              <img src={processImg} alt="Fabric swatches fanned out for selection" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <div className="wrap">
          <h2>Need a consultation for a restoration estimate?</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>
            Get an accurate assessment — we offer free consultations for a
            detailed estimate based on your furniture's condition and needs.
          </p>
          <Link to="/contact" className="btn solid" style={{ marginTop: 28 }}>Contact us</Link>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
