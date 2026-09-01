import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Hero.scss';

export function Hero() {
  const { t } = useTranslation();

  const capabilities = t('hero.capabilities', { returnObjects: true }) as {
    index: string;
    title: string;
    text: string;
  }[];

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{t('hero.eyebrow')}</span>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              {t('hero.ctaPrimary')}
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn btn--ghost">
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        <aside className="hero__panel" aria-label={t('hero.panelLabel')}>
          <span className="hero__panel-label">{t('hero.panelLabel')}</span>
          <ul className="hero__list">
            {capabilities.map((item) => (
              <li key={item.index}>
                <span className="hero__index">{item.index}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
