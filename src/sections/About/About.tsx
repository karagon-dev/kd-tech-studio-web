import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './About.scss';

export function About() {
  const { t } = useTranslation();

  const points = t('about.points', { returnObjects: true }) as string[];
  const stats = t('about.stats', { returnObjects: true }) as {
    value: string;
    label: string;
  }[];

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__visual">
          <div className="about__terminal">
            <div className="about__terminal-bar">
              <span className="about__dot about__dot--red" />
              <span className="about__dot about__dot--yellow" />
              <span className="about__dot about__dot--green" />
              <span className="about__terminal-title">~/kd-tech-studio</span>
            </div>

            <div className="about__terminal-body">
              <p>
                <span className="about__prompt">$</span> whoami
              </p>
              <p className="about__out">two developers, one studio</p>

              <p>
                <span className="about__prompt">$</span> cat values.txt
              </p>
              <p className="about__out">- ship quality, not excuses</p>
              <p className="about__out">- write code we'd want to inherit</p>
              <p className="about__out">- charge fair, deliver more</p>

              <p>
                <span className="about__prompt">$</span> status
              </p>
              <p className="about__out about__out--ok">
                <span className="about__check" /> ready to build
                <span className="about__cursor" />
              </p>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span>{t('about.eyebrow')}</span>
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>

          <ul className="about__points">
            {points.map((point) => (
              <li key={point}>
                <Check size={18} />
                {point}
              </li>
            ))}
          </ul>

          <div className="about__stats">
            {stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}