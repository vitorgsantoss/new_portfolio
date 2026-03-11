import { useTranslation } from '../../hooks/useTranslation';
import type { TranslationKey } from '../../data/translations';
import './Services.css';

interface Service {
  icon: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

const services: Service[] = [
  {
    icon: '🤖',
    titleKey: 'services.rag.title',
    descriptionKey: 'services.rag.description',
  },
  {
    icon: '🔗',
    titleKey: 'services.aiIntegration.title',
    descriptionKey: 'services.aiIntegration.description',
  },
  {
    icon: '⚡',
    titleKey: 'services.api.title',
    descriptionKey: 'services.api.description',
  },
  {
    icon: '🌐',
    titleKey: 'services.websites.title',
    descriptionKey: 'services.websites.description',
  },
  {
    icon: '🛒',
    titleKey: 'services.ecommerce.title',
    descriptionKey: 'services.ecommerce.description',
  },
  {
    icon: '🔄',
    titleKey: 'services.automation.title',
    descriptionKey: 'services.automation.description',
  },
];

export const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t('services.label')}</p>
          <h2 id="services-title" className="section__title">
            {t('services.title')}
          </h2>
          <p className="section__subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.titleKey} className="service-card">
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="service-card__title">{t(service.titleKey)}</h3>
              <p className="service-card__description">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
