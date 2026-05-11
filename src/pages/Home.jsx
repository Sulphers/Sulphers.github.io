import { useEffect, useRef, useState } from 'react';
import { contact, doctolibUrl, services, testimonials } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const heroImage =
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=82';

const highlights = [
  {
    value: '01',
    title: 'Comprendre',
    text: 'On identifie les habitudes, les signaux digestifs et les vrais freins du quotidien.',
  },
  {
    value: '02',
    title: 'Composer',
    text: 'On construit une assiette simple, plaisante et adaptée à vos rythmes.',
  },
  {
    value: '03',
    title: 'Ajuster',
    text: 'On suit les retours du corps pour garder ce qui fonctionne et simplifier le reste.',
  },
];

const metrics = [
  { value: '45 min', label: 'pour un premier bilan structuré' },
  { value: '3 axes', label: 'digestion, énergie, habitudes' },
  { value: '0 dogme', label: 'des repères, pas d’interdits inutiles' },
];

const Home = () => {
  const heroRef = useRef(null);
  const heroFrameRef = useRef(null);
  const testimonialTimerRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useReveal();

  useEffect(() => {
    testimonialTimerRef.current = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(testimonialTimerRef.current);
  }, []);

  useEffect(() => {
    return () => window.cancelAnimationFrame(heroFrameRef.current);
  }, []);

  const resetTestimonialTimer = () => {
    window.clearInterval(testimonialTimerRef.current);
    testimonialTimerRef.current = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5200);
  };

  const showTestimonial = (nextIndex) => {
    setActiveTestimonial((nextIndex + testimonials.length) % testimonials.length);
    resetTestimonialTimer();
  };

  const handleHeroMove = (event) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    window.cancelAnimationFrame(heroFrameRef.current);
    heroFrameRef.current = window.requestAnimationFrame(() => {
      heroRef.current?.style.setProperty('--mouse-x', x.toFixed(3));
      heroRef.current?.style.setProperty('--mouse-y', y.toFixed(3));
    });
  };

  return (
    <>
      <section className="home-hero" ref={heroRef} onMouseMove={handleHeroMove}>
        <div className="hero-copy" data-reveal="up">
          <p className="eyebrow">Cabinet de diététique à Noisiel</p>
          <h1>Une nutrition lisible, précise et vraiment adaptée à votre quotidien.</h1>
          <p>
            Ines vous accompagne avec une approche fonctionnelle qui relie alimentation,
            digestion, énergie et habitudes de vie, sans injonctions ni régimes standardisés.
          </p>
          <div className="hero-actions">
            <a href={doctolibUrl} target="_blank" rel="noreferrer">
              Prendre rendez-vous
            </a>
            <a href="#approche">Découvrir l’approche</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true" data-reveal="scale">
          <img src={heroImage} alt="" />
          <div className="orbital-ring">
            <span />
            <span />
            <span />
          </div>
          <div className="floating-panel panel-main">
            <span>Suivi</span>
            <strong>100%</strong>
            <small>personnalisé</small>
          </div>
          <div className="floating-panel panel-secondary">
            <span>Cabinet</span>
            <strong>Noisiel</strong>
            <small>et visio</small>
          </div>
        </div>
      </section>

      <section className="kinetic-strip" aria-label="Repères d'accompagnement" data-reveal="up">
        <div className="ticker">
          <span>digestion</span>
          <span>énergie</span>
          <span>microbiote</span>
          <span>satiété</span>
          <span>rythme de vie</span>
          <span>plaisir</span>
          <span>digestion</span>
          <span>énergie</span>
          <span>microbiote</span>
          <span>satiété</span>
          <span>rythme de vie</span>
          <span>plaisir</span>
        </div>
      </section>

      <section className="section-grid" id="approche">
        <div className="section-intro" data-reveal="left">
          <p className="eyebrow">Méthode</p>
          <h2>Une progression claire, centrée sur ce qui compte.</h2>
        </div>
        <div className="service-grid" data-reveal="right">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ '--delay': `${index * 90}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-flow" data-reveal="up">
        <div className="flow-header">
          <p className="eyebrow">Parcours</p>
          <h2>Un accompagnement qui avance avec vous.</h2>
        </div>
        <div className="flow-track">
          {highlights.map((item) => (
            <article key={item.title}>
              <span>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band" data-reveal="up">
        <div>
          <p className="eyebrow">Informations pratiques</p>
          <h2>Un cadre simple pour commencer.</h2>
        </div>
        <div className="info-strip">
          <article>
            <span>Adresse</span>
            <strong>{contact.address}</strong>
          </article>
          <article>
            <span>Horaires</span>
            <strong>Lun. à ven. 09h-21h · Sam. 09h-16h</strong>
          </article>
          <article>
            <span>Contact</span>
            <strong>{contact.phone}</strong>
          </article>
        </div>
      </section>

      <section className="metrics-band" data-reveal="up">
        {metrics.map((metric) => (
          <article key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="testimonials-section" data-reveal="up">
        <div className="section-intro centered">
          <p className="eyebrow">Retours patients</p>
          <h2>Un accompagnement concret, sans complexifier l’assiette.</h2>
        </div>
        <div className="testimonial-slider">
          <button
            className="testimonial-arrow testimonial-arrow-prev"
            type="button"
            aria-label="Témoignage précédent"
            onClick={() => showTestimonial(activeTestimonial - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="testimonial-stage">
            {testimonials.map((testimonial, index) => (
              <blockquote
                className={index === activeTestimonial ? 'is-active' : ''}
                key={testimonial.author}
                aria-hidden={index !== activeTestimonial}
              >
                <p>“{testimonial.quote}”</p>
                <cite>{testimonial.author}</cite>
              </blockquote>
            ))}
          </div>
          <button
            className="testimonial-arrow testimonial-arrow-next"
            type="button"
            aria-label="Témoignage suivant"
            onClick={() => showTestimonial(activeTestimonial + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
          <div className="slider-controls" aria-label="Navigation des témoignages">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                className={index === activeTestimonial ? 'is-active' : ''}
                type="button"
                aria-label={`Afficher le témoignage ${index + 1}`}
                onClick={() => showTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
