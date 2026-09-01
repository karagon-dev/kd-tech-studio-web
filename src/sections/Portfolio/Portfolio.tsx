import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../../components/Reveal/Reveal';
import './Portfolio.scss';

type Project = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  status: 'live' | 'wip';
  url?: string;
};

export function Portfolio() {
  const { t } = useTranslation();
  const items = t('portfolio.items', { returnObjects: true }) as Project[];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <Reveal className="portfolio__header">
          <div>
            <span>{t('portfolio.eyebrow')}</span>
            <h2>{t('portfolio.title')}</h2>
          </div>
          <p>{t('portfolio.subtitle')}</p>
        </Reveal>

        <ol className="portfolio__list">
          {items.map((item, index) => {
            const href = item.url || '#contact';
            const external = Boolean(item.url);

            return (
              <Reveal key={item.name} delay={index * 0.06}>
                <li>
                  <a
                    className="portfolio__row"
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="portfolio__num">{String(index + 1).padStart(2, '0')}</span>

                    <div className="portfolio__main">
                      <div className="portfolio__title-row">
                        <h3>{item.name}</h3>
                        <span className="portfolio__type">{item.type}</span>
                      </div>
                      <p>{item.description}</p>
                      <ul className="portfolio__tags">
                        {item.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>

                    <span className="portfolio__link">
                      {item.status === 'live' ? t('portfolio.viewLive') : t('portfolio.viewCase')}
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
