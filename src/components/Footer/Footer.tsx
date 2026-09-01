import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import './Footer.scss';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Logo inverted />
          <p>{t('footer.blurb')}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#services">{t('nav.services')}</a>
          <a href="#portfolio">{t('nav.portfolio')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#contact">{t('nav.contact')}</a>
          <a href="mailto:info@kdtechstudio.com">info@kdtechstudio.com</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>
          © {year} KD Tech Studio. {t('footer.rights')}
        </span>
      </div>
    </footer>
  );
}
