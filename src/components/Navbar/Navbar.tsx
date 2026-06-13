import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import './Navbar.scss';

export function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__brand">
          <img src={logo} alt="KD Tech Studio" className="navbar__logo" />
        </a>

        <nav className="navbar__links">
          <a href="#services">{t('nav.services')}</a>
          <a href="#portfolio">{t('nav.portfolio')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>

        <button className="navbar__language" onClick={toggleLanguage}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}