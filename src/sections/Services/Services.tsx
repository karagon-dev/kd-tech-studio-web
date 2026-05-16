import { Globe, LayoutPanelTop, MonitorSmartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './Services.scss';

const icons = [
  <LayoutPanelTop size={28} />,
  <Globe size={28} />,
  <MonitorSmartphone size={28} />
];

export function Services() {
  const { t } = useTranslation();

  const items = t('services.items', { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <span>Services</span>

          <h2>{t('services.title')}</h2>

          <p>{t('services.subtitle')}</p>
        </div>

        <div className="services__grid">
          {items.map((item, index) => (
            <article className="services__card" key={item.title}>
              <div className="services__icon">
                {icons[index]}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}