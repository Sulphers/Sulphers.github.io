const PageHero = ({ eyebrow, title, text }) => (
  <section className="page-hero" data-reveal="up">
    <div className="page-hero-orbit" aria-hidden="true">
      <span />
      <span />
    </div>
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </section>
);

export default PageHero;
