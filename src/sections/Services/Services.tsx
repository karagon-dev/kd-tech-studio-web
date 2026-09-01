import { useTranslation } from 'react-i18next';
import { Reveal } from '../../components/Reveal/Reveal';
import './Services.scss';

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
        <Reveal className="services__header">
          <span>{t('services.eyebrow')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </Reveal>

        <div className="services__grid">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="services__card">
                <header>
                  <span className="services__index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="services__meta">
                    <span>{item.timeline}</span>
                    <span>{item.price}</span>
                  </div>
                </header>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <ul>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="services__included">
          <span>{t('services.includedTitle')}</span>
          <ul>
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
