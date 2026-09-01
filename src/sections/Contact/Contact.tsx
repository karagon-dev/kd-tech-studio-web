import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../../components/Reveal/Reveal';
import './Contact.scss';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <Reveal className="contact__content">
          <span className="contact__eyebrow">{t('contact.eyebrow')}</span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>

          <dl className="contact__facts">
            <div>
              <dt>{t('contact.responseTitle')}</dt>
              <dd>{t('contact.responseText')}</dd>
            </div>
            <div>
              <dt>{t('contact.locationTitle')}</dt>
              <dd>{t('contact.locationText')}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="contact__card" delay={0.1}>
          <span className="contact__card-label">{t('contact.cardLabel')}</span>

          <a href="mailto:info@kdtechstudio.com" className="contact__item">
            <span className="contact__icon">
              <Mail size={18} />
            </span>
            <span className="contact__item-text">
              <strong>{t('contact.emailLabel')}</strong>
              <span>info@kdtechstudio.com</span>
            </span>
            <ArrowRight size={16} />
          </a>

          <a
            href="https://wa.me/50686782461"
            target="_blank"
            rel="noreferrer"
            className="contact__item"
          >
            <span className="contact__icon">
              <MessageCircle size={18} />
            </span>
            <span className="contact__item-text">
              <strong>{t('contact.whatsappLabel')}</strong>
              <span>+506 8678-2461</span>
            </span>
            <ArrowRight size={16} />
          </a>

          <a href="mailto:info@kdtechstudio.com" className="btn btn--primary contact__button">
            {t('contact.cta')}
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
