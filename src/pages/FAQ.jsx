import Newsletter from '../components/Newsletter.jsx';

const GROUPS = [
  {
    idx: '01',
    title: 'General Questions',
    items: [
      ['What types of furniture do you reupholster?', 'We reupholster a wide variety of furniture, including sofas, chairs, ottomans, dining chairs, car seats, and more.'],
      ['Can I choose my own fabrics?', 'Absolutely! We offer a vast selection of fabrics, or you can provide your own. We also offer fabric selection assistance.'],
      ['How long does a typical upholstery project take?', "The timeframe varies depending on the size and complexity of the piece. We'll provide an estimated timeline during the consultation."],
      ['Do you offer custom furniture design?', 'Yes! We specialize in custom designs. Bring us your ideas, or we can help you develop them, into bespoke furniture tailored to your specifications.'],
      ['How much does an upholstery project cost?', 'Costs are determined by the dimensions and the choice of materials. Get in touch with us on social media or by email for a quote.'],
    ],
  },
  {
    idx: '02',
    title: 'Price Questions',
    items: [
      ['How do you determine the price of reupholstery?', 'The price depends on the type of furniture, the size, the fabric choice, and the complexity of the work. We provide a detailed quote after assessing your piece.'],
      ['Do you offer free estimates?', 'Yes, we offer free, no-obligation estimates. Contact us to schedule a consultation.'],
      ['Are there different price levels for fabric options?', 'Yes, fabric prices vary depending on the material, pattern, and quality. We can help you find options that fit your budget.'],
      ['What payment methods do you accept?', 'We accept cash, major credit/debit cards, and other forms of payment, discussed during the consultation.'],
      ['Are there any hidden costs?', "No, we strive to provide transparent pricing. Our quotes are comprehensive, and we'll inform you of any potential additional costs upfront."],
    ],
  },
  {
    idx: '03',
    title: 'Consultation Questions',
    items: [
      ['How do I schedule a consultation?', 'Contact us via phone, email, or through our website to schedule a convenient time.'],
      ['What happens during a consultation?', "We'll discuss your project, assess your furniture, explore fabric options, and provide a detailed quote."],
      ['Can I bring my furniture to the consultation?', 'If possible, yes! Bringing your piece (or photos) helps us evaluate and provide a more accurate estimate.'],
      ['How long does a typical consultation take?', 'Consultations typically last about 30–60 minutes, depending on the complexity of your project.'],
      ['Is there a fee for the consultation?', 'Our consultations are free of charge. A travel fee may apply if we visit your home, depending on your location.'],
    ],
  },
  {
    idx: '04',
    title: 'Newsletter Questions',
    items: [
      ['What kind of content will I find in your newsletter?', 'Design tips, seasonal promotions, project spotlights, industry news, and exclusive offers.'],
      ['How often will you send out newsletters?', 'Approximately once a month, providing fresh content regularly.'],
      ['Will you share my email address?', 'No — your email is only used for our newsletter and never shared with third parties.'],
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">FAQ</span>
          <h1>The answers to all of your questions</h1>
          <p className="lede">
            Clear answers, no confusion. Browse our FAQ for a clear
            understanding of the process and the solutions we offer.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, maxWidth: 820, margin: '0 auto' }}>
        <div className="wrap">
          {GROUPS.map((g) => (
            <div className="faq-group" key={g.title}>
              <span className="idx">{g.idx}</span>
              <h2 style={{ marginTop: 8, marginBottom: 20 }}>{g.title}</h2>
              {g.items.map(([q, a]) => (
                <details className="faq-item" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
