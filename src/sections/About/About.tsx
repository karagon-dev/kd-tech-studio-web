import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './About.scss';

export function About() {
  const { t } = useTranslation();

  const points = t('about.points', { returnObjects: true }) as string[];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__visual">
          <div className="about__badge">
            <strong>KD</strong>
            <span>Tech Studio</span>
          </div>
        </div>

        <div className="about__content">
          <span>{t('about.eyebrow')}</span>
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>

          <ul>
            {points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={20} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}