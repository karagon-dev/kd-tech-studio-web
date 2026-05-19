import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Hero.scss';

export function Hero() {
  const { t } = useTranslation();
  const code = t('hero.code', { returnObjects: true }) as {
    line1_const: string;
    line1_studio: string;
    line2_name: string;
    line2_value: string;
    line3_team: string;
    line3_num: string;
    line3_comment: string;
    line4_stack: string;
    line4_react: string;
    line4_ts: string;
    line4_vite: string;
    line5_ships: string;
    line5_function: string;
  };

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
                  <span className="tk-kw">{code.line1_const}</span>{' '}
                  <span className="tk-var">{code.line1_studio}</span> = {'{'}
                </span>
                <span className="hero__line">
                  <span className="hero__ln">2</span>
                  {'  '}
                  <span className="tk-prop">{code.line2_name}</span>:{' '}
                  <span className="tk-str">'{code.line2_value}'</span>,
                </span>
                <span className="hero__line">
                  <span className="hero__ln">3</span>
                  {'  '}
                  <span className="tk-prop">{code.line3_team}</span>:{' '}
                  <span className="tk-num">{code.line3_num}</span>{' '}
                  <span className="tk-comm">// {code.line3_comment}</span>
                </span>
                <span className="hero__line">
                  <span className="hero__ln">4</span>
                  {'  '}
                  <span className="tk-prop">{code.line4_stack}</span>: [
                  <span className="tk-str">'{code.line4_react}'</span>,{' '}
                  <span className="tk-str">'{code.line4_ts}'</span>,{' '}
                  <span className="tk-str">'{code.line4_vite}'</span>],
                </span>
                <span className="hero__line">
                  <span className="hero__ln">5</span>
                  {'  '}
                  <span className="tk-prop">{code.line5_ships}</span>:{' '}
                  <span className="tk-fn">{code.line5_function}</span>(),
                </span>
                <span className="hero__line">
                  <span className="hero__ln">6</span>
                  {'};'}
                  <span className="hero__caret" />
                </span>
              </code>
            </pre>
          </div>

          
        </div>
      </div>
    </section>
  );
}