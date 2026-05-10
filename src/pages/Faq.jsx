import { useState } from 'react';
import PageHero from '../components/PageHero';
import { faqs } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const steps = ['Bilan', 'Plan', 'Suivi', 'Ajustements'];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Les reponses avant de reserver."
        text="Consultation, suivi, distance, objectifs : voici les points les plus frequents pour demarrer avec une vision claire."
      />

      <section className="faq-compass" data-reveal="up">
        {steps.map((step, index) => (
          <article key={step} style={{ '--delay': `${index * 90}ms` }} data-reveal="up">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </article>
        ))}
      </section>

      <section className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              className="faq-item"
              data-reveal="up"
              key={item.question}
              style={{ '--delay': `${index * 80}ms` }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <strong>{isOpen ? '−' : '+'}</strong>
              </button>
              <div className="faq-answer" id={`faq-${index}`} hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Faq;
