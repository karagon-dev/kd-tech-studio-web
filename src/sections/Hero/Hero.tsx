import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Hero.scss';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{t('hero.eyebrow')}</span>

          <h1>{t('hero.title')}</h1>

          <p>{t('hero.subtitle')}</p>

          <div className="hero__actions">
            <a href="#contact" className="hero__button hero__button--primary">
              {t('hero.ctaPrimary')}
              <ArrowRight size={18} />
            </a>

            <a href="#services" className="hero__button hero__button--secondary">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <span>KD Tech Studio</span>
            <strong>Professional websites</strong>
            <p>Modern design · Fast delivery · Clean code</p>
          </div>

          <div className="hero__card hero__card--floating">
            <strong>+ Business Growth</strong>
            <span>Web presence that builds trust</span>
          </div>
        </div>
      </div>
    </section>
  );
}