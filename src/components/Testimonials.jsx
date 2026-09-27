const DEFAULT_ITEMS = [
  {
    quote:
      "I was ready to throw out my favorite armchair until I found  furn hub Upholstery. They worked wonders on the worn-out cushions, and now it's more comfortable than ever. Highly recommended.",
    name: 'Emily K',
    role: 'CEO',
  },
  {
    quote:
      "I was hesitant to trust someone with my expensive dining chairs, but  furn hub Upholstery completely exceeded my expectations. The quality of their work is outstanding.",
    name: 'Michael B',
    role: 'Influencer',
  },
  {
    quote:
      "From fabric selection to final delivery, the whole process was easy and professional. Our patio set looks brand new — better, actually.",
    name: 'Sofia R',
    role: 'Homeowner',
  },
];

export default function Testimonials({ items = DEFAULT_ITEMS }) {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Thank you for trusting us</span>
          <h2>Testimonials from clients</h2>
        </div>
        <div className="grid cols-3">
          {items.map((t, i) => (
            <div className="testi-card" key={i}>
              <span className="stars">★★★★★</span>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
