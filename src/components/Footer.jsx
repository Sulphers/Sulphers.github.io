import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_ines.jpg';
import { contact, doctolibUrl, navItems } from '../data/siteData';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <img src={logo} alt="" aria-hidden="true" />
        <div>
          <strong>Cabinet Ines</strong>
          <p>Nutrition personnalisée, suivi fonctionnel et accompagnement durable.</p>
        </div>
      </div>

      <div className="footer-column">
        <span>Navigation</span>
        {navItems.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>

      <div className="footer-column">
        <span>Cabinet</span>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={contact.emailHref}>{contact.email}</a>
        <p>{contact.address}</p>
      </div>

      <div className="footer-action">
        <span>Disponibilités</span>
        <p>Consultations au cabinet ou à distance, sur rendez-vous.</p>
        <a href={doctolibUrl} target="_blank" rel="noreferrer">
          Réserver
        </a>
      </div>
    </div>

    <p className="footer-copy">© 2026 Cabinet Ines. Tous droits réservés.</p>
  </footer>
);

export default Footer;
