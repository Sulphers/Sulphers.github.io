import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo_ines.jpg';
import { doctolibUrl, navItems } from '../data/siteData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigation principale">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Cabinet Ines" />
          <span>
            <strong>Ines</strong>
            <small>Diététique fonctionnelle</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel ${isOpen ? 'is-open' : ''}`} id="main-menu">
          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <a className="nav-cta" href={doctolibUrl} target="_blank" rel="noreferrer">
            Prendre rendez-vous
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
