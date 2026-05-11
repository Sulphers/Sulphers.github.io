import PageHero from '../components/PageHero';
import { contact, doctolibUrl } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const options = [
  { label: 'Cabinet', text: 'Un rendez-vous à Noisiel pour poser les bases du suivi.' },
  { label: 'Visio', text: 'La même préparation, avec plus de flexibilité.' },
  { label: 'Email', text: 'Idéal pour une question simple avant de réserver.' },
];

const Contact = () => {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Choisissez le canal le plus simple pour vous."
        text="Le cabinet reçoit à Noisiel et propose aussi des consultations à distance. Les rendez-vous se réservent en ligne."
      />

      <section className="contact-options" data-reveal="up">
        {options.map((option, index) => (
          <article key={option.label} style={{ '--delay': `${index * 90}ms` }} data-reveal="up">
            <span>{option.label}</span>
            <p>{option.text}</p>
          </article>
        ))}
      </section>

      <section className="contact-layout">
        <div className="contact-card" data-reveal="left">
          <p className="eyebrow">Coordonnées</p>
          <h2>Cabinet Ines</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <p>{contact.address}</p>
          <a className="primary-link" href={doctolibUrl} target="_blank" rel="noreferrer">
            Réserver sur Doctolib
          </a>
        </div>

        <form className="contact-form" action={contact.emailHref} method="post" encType="text/plain" data-reveal="right">
          <p className="eyebrow">Message</p>
          <h2>Préparer une demande</h2>
          <label>
            Nom
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">Envoyer</button>
        </form>

        <div className="map-panel" data-reveal="up">
          <iframe
            title="Localisation du cabinet Ines à Noisiel"
            src="https://www.google.com/maps?q=7%20cour%20des%20Roches%20Noisiel&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
