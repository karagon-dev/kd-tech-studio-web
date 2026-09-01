import { useTranslation } from 'react-i18next';
import { Reveal } from '../../components/Reveal/Reveal';
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
        <Reveal className="about__intro">
          <span>{t('about.eyebrow')}</span>
          <h2>{t('about.title')}</h2>
        </Reveal>

        <Reveal className="about__body" delay={0.08}>
          <p>{t('about.description')}</p>

          <ul className="about__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="about__stats-wrap" delay={0.12}>
        <div className="about__stats">
          {stats.map((s) => (
            <div className="about__stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
