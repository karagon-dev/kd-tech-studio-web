import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './Portfolio.scss';

type Project = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  status: 'live' | 'wip';
  accent: 'blue' | 'pink' | 'violet';
  url?: string;
};

export function Portfolio() {
  const { t } = useTranslation();

  const items = t('portfolio.items', { returnObjects: true }) as Project[];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__header">
          <div>
            <span>{t('portfolio.eyebrow')}</span>
            <h2>{t('portfolio.title')}</h2>
          </div>
          <p>{t('portfolio.subtitle')}</p>
        </div>

        <div className="portfolio__grid">
          {items.map((item, index) => (
            <article
              className={`portfolio__card portfolio__card--${item.accent}`}
              key={item.name}
            >
              <div className="portfolio__preview">
                <div className="portfolio__browser">
                  <span className="portfolio__btn portfolio__btn--red" />
                  <span className="portfolio__btn portfolio__btn--yellow" />
                  <span className="portfolio__btn portfolio__btn--green" />
                  <div className="portfolio__url">
                    <span>https://</span>
                    {item.name.toLowerCase()}
                  </div>
                </div>

                <div className="portfolio__mock">
                  <div className="portfolio__mock-nav">
                    <span className="portfolio__mock-logo" />
                    <span className="portfolio__mock-link" />
                    <span className="portfolio__mock-link" />
                    <span className="portfolio__mock-link" />
                  </div>

                  <div className="portfolio__mock-hero">
                    <span className="portfolio__mock-line portfolio__mock-line--xl" />
                    <span className="portfolio__mock-line portfolio__mock-line--lg" />
                    <span className="portfolio__mock-line portfolio__mock-line--md" />
                    <div className="portfolio__mock-cta" />
                  </div>

                  <div className="portfolio__mock-cards">
                    <span /><span /><span />
                  </div>
                </div>
              </div>

              <div className="portfolio__content">
                <div className="portfolio__meta">
                  <span className="portfolio__type">{item.type}</span>
                  <span className={`portfolio__status portfolio__status--${item.status}`}>
                    <span className="portfolio__status-dot" />
                    {item.status === 'live' ? 'Live' : 'WIP'}
                  </span>
                </div>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="portfolio__footer">
                  <ul className="portfolio__tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <a 
                    href={item.url || '#contact'} 
                    className="portfolio__link"
                    {...(item.url && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {item.status === 'live' ? t('portfolio.viewLive') : t('portfolio.viewCase')}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}