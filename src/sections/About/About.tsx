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
  const terminal = t('about.terminal', { returnObjects: true }) as {
    whoami: string;
    valuesTitle: string;
    valuesSecond: string;
    valuesThird: string;
    statusLabel: string;
  };

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
              <p className="about__out">{terminal.whoami}</p>

              <p>
                <span className="about__prompt">$</span> cat values.txt
              </p>
              <p className="about__out">{terminal.valuesTitle}</p>
              <p className="about__out">{terminal.valuesSecond}</p>
              <p className="about__out">{terminal.valuesThird}</p>

              <p>
                <span className="about__prompt">$</span> status
              </p>
              <p className="about__out about__out--ok">
                <span className="about__check" /> {terminal.statusLabel}
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