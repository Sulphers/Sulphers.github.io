import PageHero from '../components/PageHero';
import { contact } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

const sections = [
  {
    title: 'Editeur du site',
    text: `Ce site est edite par Cabinet Ines, dieteticienne-nutritionniste. Adresse : ${contact.address}. Telephone : ${contact.phone}. Email : ${contact.email}.`,
  },
  {
    title: 'Hebergement',
    text: 'Le site est heberge par GitHub Pages, service d’hebergement de GitHub, Inc.',
  },
  {
    title: 'Propriete intellectuelle',
    text: 'Les contenus presents sur ce site sont proteges. Toute reproduction ou adaptation sans accord prealable est interdite.',
  },
  {
    title: 'Donnees personnelles',
    text: 'Les informations transmises par email servent uniquement a repondre aux demandes de contact et de rendez-vous. Vous pouvez demander l’acces, la rectification ou la suppression de vos donnees.',
  },
  {
    title: 'Responsabilite',
    text: 'Les informations du site sont fournies a titre informatif et ne remplacent pas une consultation medicale ou un avis professionnel personnalise.',
  },
];

const trustItems = [
  'Transparence',
  'Confidentialite',
  'Usage limite',
  'Droit d’acces',
];

const MentionsLegales = () => {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Mentions legales"
        title="Informations administratives du site."
        text="Les elements essentiels concernant l’editeur, l’hebergement, les contenus et les donnees personnelles."
      />

      <section className="legal-ribbon" data-reveal="up">
        {trustItems.map((item, index) => (
          <span key={item} style={{ '--delay': `${index * 80}ms` }} data-reveal="up">
            {item}
          </span>
        ))}
      </section>

      <section className="legal-content">
        {sections.map((section, index) => (
          <article key={section.title} data-reveal="up" style={{ '--delay': `${index * 70}ms` }}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default MentionsLegales;
