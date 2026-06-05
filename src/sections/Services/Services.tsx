import { Check, Clock, Globe, LayoutPanelTop, MonitorSmartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './Services.scss';

const icons = [
  <LayoutPanelTop size={26} />,
  <Globe size={26} />,
  <MonitorSmartphone size={26} />
];

export function Services() {
  const { t } = useTranslation();

  const items = t('services.items', { returnObjects: true }) as {
    title: string;
    description: string;
    timeline: string;
    highlights: string[];
    price: string;
  }[];

  const included = t('services.included', { returnObjects: true }) as string[];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <span>{t('services.eyebrow')}</span>

          <h2>{t('services.title')}</h2>

          <p>{t('services.subtitle')}</p>
        </div>

        <div className="services__grid">
          {items.map((item, index) => (
            <article className="services__card" key={item.title}>
              <div className="services__card-top">
                <div className="services__icon">{icons[index]}</div>

                <div className="services__meta">
                  <span className="services__timeline">
                    <Clock size={14} />
                    {item.timeline}
                  </span>

                  <span className="services__price">{item.price}</span>
                </div>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <ul className="services__highlights">
                {item.highlights.map((h) => (
                  <li key={h}>
                    <Check size={16} />
                    {h}
                  </li>
                ))}
              </ul>

              <span className="services__index">{String(index + 1).padStart(2, '0')}</span>
            </article>
          ))}
        </div>

        <div className="services__included">
          <span className="services__included-title">{t('services.includedTitle')}</span>
          <ul>
            {included.map((item) => (
              <li key={item}>
                <Check size={14} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}