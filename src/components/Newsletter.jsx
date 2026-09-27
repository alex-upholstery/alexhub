export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="wrap">
        <h2>Subscribe for design tips &amp; project updates</h2>
        <p className="lede" style={{ margin: '14px auto 0', color: 'rgba(250,247,241,.75)' }}>
          One email a month — fabric trends, restoration stories, and offers.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
