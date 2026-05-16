import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.scss';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--one" />
        <div className="hero__blob hero__blob--two" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__status">
            <span className="hero__status-dot" />
            {t('hero.availability')}
          </span>

          <span className="hero__eyebrow">
            <Sparkles size={14} />
            {t('hero.eyebrow')}
          </span>

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
          <div className="hero__editor" role="presentation">
            <div className="hero__editor-bar">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__editor-file">{t('hero.codeFile')}</span>
            </div>

            <pre className="hero__code">
              <code>
                <span className="hero__line">
                  <span className="hero__ln">1</span>
                  <span className="tk-kw">const</span>{' '}
                  <span className="tk-var">studio</span> = {'{'}
                </span>
                <span className="hero__line">
                  <span className="hero__ln">2</span>
                  {'  '}
                  <span className="tk-prop">name</span>:{' '}
                  <span className="tk-str">'KD Tech Studio'</span>,
                </span>
                <span className="hero__line">
                  <span className="hero__ln">3</span>
                  {'  '}
                  <span className="tk-prop">team</span>:{' '}
                  <span className="tk-num">2</span>{' '}
                  <span className="tk-comm">// devs, no middlemen</span>
                </span>
                <span className="hero__line">
                  <span className="hero__ln">4</span>
                  {'  '}
                  <span className="tk-prop">stack</span>: [
                  <span className="tk-str">'React'</span>,{' '}
                  <span className="tk-str">'Node'</span>,{' '}
                  <span className="tk-str">'Vite'</span>],
                </span>
                <span className="hero__line">
                  <span className="hero__ln">5</span>
                  {'  '}
                  <span className="tk-prop">ships</span>:{' '}
                  <span className="tk-fn">in_weeks</span>(),
                </span>
                <span className="hero__line">
                  <span className="hero__ln">6</span>
                  {'};'}
                  <span className="hero__caret" />
                </span>
              </code>
            </pre>
          </div>

          <div className="hero__stat">
            <strong>{t('hero.statValue')}</strong>
            <span>{t('hero.statLabel')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}