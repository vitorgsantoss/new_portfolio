import { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../../types';
import { getPersonalInfo } from '../../data/personal';
import { useTranslation } from '../../hooks/useTranslation';
import './Contact.css';

const initialForm: ContactFormData = { name: '', email: '', subject: '', message: '' };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { t, language } = useTranslation();
  const personalInfo = getPersonalInfo(language);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = t('contact.nameRequired');
    if (!form.email.trim()) newErrors.email = t('contact.emailRequired');
    else if (!emailRegex.test(form.email)) newErrors.email = t('contact.emailInvalid');
    if (!form.subject.trim()) newErrors.subject = t('contact.subjectRequired');
    if (!form.message.trim()) newErrors.message = t('contact.messageRequired');
    else if (form.message.trim().length < 10) newErrors.message = t('contact.messageMinLength');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'vgsantos.dev@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus('success');
        setForm(initialForm);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact section section--alt" aria-labelledby="contact-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t('contact.label')}</p>
          <h2 id="contact-title" className="section__title">
            {t('contact.title')}
          </h2>
          <p className="section__subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__info">
            <h3 className="contact__info-title">{t('contact.letsTalk')}</h3>
            <p className="contact__info-text">
              {t('contact.infoText')}
            </p>

            <ul className="contact__details" aria-label={t('contact.contactInfo')}>
              <li className="contact__detail">
                <span className="contact__detail-icon" aria-hidden="true">✉️</span>
                <a href={`mailto:${personalInfo.email}`} className="contact__detail-text">
                  {personalInfo.email}
                </a>
              </li>
              <li className="contact__detail">
                <span className="contact__detail-icon" aria-hidden="true">📍</span>
                <span className="contact__detail-text">{personalInfo.location}</span>
              </li>
              <li className="contact__detail">
                <span className="contact__detail-icon" aria-hidden="true">📱</span>
                <span className="contact__detail-text">{personalInfo.phone}</span>
              </li>
            </ul>

            <div className="contact__socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                aria-label={t('contact.profileGithub')}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
                aria-label={t('contact.profileLinkedin')}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact__form-wrapper">
            {status === 'success' ? (
              <div className="contact__success" role="alert">
                <span className="contact__success-icon" aria-hidden="true">✅</span>
                <h3>{t('contact.successTitle')}</h3>
                <p>{t('contact.successMessage')}</p>
                <button
                  className="contact__reset-btn"
                  onClick={() => setStatus('idle')}
                >
                  {t('contact.sendAnother')}
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                {status === 'error' && (
                  <div className="contact__send-error" role="alert">
                    ❌ {t('contact.errorMessage')}
                  </div>
                )}
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">
                    {t('contact.name')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`contact__input${errors.name ? ' contact__input--error' : ''}`}
                    placeholder={t('contact.namePlaceholder')}
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span id="contact-name-error" className="contact__error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">
                    {t('contact.email')}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`contact__input${errors.email ? ' contact__input--error' : ''}`}
                    placeholder={t('contact.emailPlaceholder')}
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="contact-email-error" className="contact__error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject" className="contact__label">
                    {t('contact.subject')}
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className={`contact__input${errors.subject ? ' contact__input--error' : ''}`}
                    placeholder={t('contact.subjectPlaceholder')}
                    value={form.subject}
                    onChange={handleChange}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && (
                    <span id="contact-subject-error" className="contact__error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    className={`contact__textarea${errors.message ? ' contact__input--error' : ''}`}
                    placeholder={t('contact.messagePlaceholder')}
                    value={form.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="contact-message-error" className="contact__error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
