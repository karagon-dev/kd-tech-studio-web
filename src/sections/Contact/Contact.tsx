import { ArrowRight, Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './Contact.scss';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__bg" aria-hidden="true" />

        <div className="contact__content">
          <span className="contact__eyebrow">{t('contact.eyebrow')}</span>

          <h2>{t('contact.title')}</h2>

          <p>{t('contact.description')}</p>

          <div className="contact__badges">
            <span className="contact__badge contact__badge--free">
              {t('contact.freeQuote')}
            </span>
            <span className="contact__badge">
              {t('contact.noObligation')}
            </span>
          </div>

          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <Clock size={18} />
              </div>
              <div>
                <strong>{t('contact.responseTitle')}</strong>
                <span>{t('contact.responseText')}</span>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <MapPin size={18} />
              </div>
              <div>
                <strong>{t('contact.locationTitle')}</strong>
                <span>{t('contact.locationText')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__card">
          <div className="contact__card-header">
            <span className="contact__online">
              <span className="contact__online-dot" />
              online
            </span>
            <span className="contact__card-label">{t('contact.cardLabel')}</span>
          </div>

          <a
            href="mailto:info@kdtechstudio.com"
            className="contact__item contact__item--email"
          >
            <div className="contact__icon">
              <Mail size={22} />
            </div>

            <div className="contact__item-text">
              <strong>{t('contact.emailLabel')}</strong>
              <span>info@kdtechstudio.com</span>
            </div>

            <ArrowRight size={18} className="contact__item-arrow" />
          </a>

          <a
            href="https://wa.me/50686782461"
            target="_blank"
            rel="noreferrer"
            className="contact__item contact__item--whatsapp"
          >
            <div className="contact__icon">
              <MessageCircle size={22} />
            </div>

            <div className="contact__item-text">
              <strong>{t('contact.whatsappLabel')}</strong>
              <span>+506 8678-2461</span>
            </div>

            <ArrowRight size={18} className="contact__item-arrow" />
          </a>

          <div className="contact__divider">
            <span>o</span>
            <span>{t('contact.or')}</span>
          </div>

          <a href="mailto:info@kdtechstudio.com" className="contact__button">
            {t('contact.cta')}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}