import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './Portfolio.scss';

export function Portfolio() {
  const { t } = useTranslation();

  const items = t('portfolio.items', { returnObjects: true }) as {
    name: string;
    type: string;
    description: string;
  }[];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__header">
          <span>{t('portfolio.eyebrow')}</span>
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.subtitle')}</p>
        </div>

        <div className="portfolio__grid">
          {items.map((item) => (
            <article className="portfolio__card" key={item.name}>
              <div className="portfolio__preview">
                <div className="portfolio__browser">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="portfolio__mock">
                  <strong>{item.name}</strong>
                  <p>{item.type}</p>
                </div>
              </div>

              <div className="portfolio__content">
                <span>{item.type}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <a href="#contact">
                  Work with us
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}