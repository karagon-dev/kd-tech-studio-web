import { Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import './Contact.scss';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <span>{t('contact.eyebrow')}</span>

          <h2>{t('contact.title')}</h2>

          <p>{t('contact.description')}</p>
        </div>

        <div className="contact__card">
          <a
            href="mailto:contact@kdtechstudio.com"
            className="contact__item"
          >
            <div className="contact__icon">
              <Mail size={22} />
            </div>

            <div>
              <strong>{t('contact.emailLabel')}</strong>
              <span>contact@kdtechstudio.com</span>
            </div>
          </a>

          <a
            href="https://wa.me/50600000000"
            target="_blank"
            rel="noreferrer"
            className="contact__item"
          >
            <div className="contact__icon">
              <MessageCircle size={22} />
            </div>

            <div>
              <strong>{t('contact.whatsappLabel')}</strong>
              <span>+506 0000-0000</span>
            </div>
          </a>

          <button className="contact__button">
            {t('contact.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}