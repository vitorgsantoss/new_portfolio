import './Footer.css';
import { personalInfo } from '../../data/personal';
import { useTranslation } from '../../hooks/useTranslation';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copy">
        <span className="footer__name">Vítor Santos </span>© {year} 
        </p>
        <div className="footer__links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label={t('footer.github')}
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label={t('footer.linkedin')}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
