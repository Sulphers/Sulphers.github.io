import PageHero from '../components/PageHero';
import { contact, doctolibUrl } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const options = [
  { label: 'Cabinet', text: 'Un rendez-vous a Noisiel pour poser les bases du suivi.' },
  { label: 'Visio', text: 'La meme preparation, avec plus de flexibilite.' },
  { label: 'Email', text: 'Ideal pour une question simple avant de reserver.' },
];

const Contact = () => {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Choisissez le canal le plus simple pour vous."
        text="Le cabinet recoit a Noisiel et propose aussi des consultations a distance. Les rendez-vous se reservent en ligne."
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
          <p className="eyebrow">Coordonnees</p>
          <h2>Cabinet Ines</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <p>{contact.address}</p>
          <a className="primary-link" href={doctolibUrl} target="_blank" rel="noreferrer">
            Reserver sur Doctolib
          </a>
        </div>

        <form className="contact-form" action={contact.emailHref} method="post" encType="text/plain" data-reveal="right">
          <p className="eyebrow">Message</p>
          <h2>Preparer une demande</h2>
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
            title="Localisation du cabinet Ines a Noisiel"
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
