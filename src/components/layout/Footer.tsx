import './Footer.css';
import { personalInfo } from '../../data/personal';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

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
            aria-label="GitHub de Vítor Santos"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn de Vítor Santos"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
