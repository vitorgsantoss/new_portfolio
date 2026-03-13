import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from '../../hooks/useTranslation';
import type { TranslationKey } from '../../data/translations';
import './Header.css';
import { getPersonalInfo } from '../../data/personal';

const getNavLinks = (t: (key: TranslationKey) => string) => [
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.career'), href: '#career' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.services'), href: '#services' },
  { label: t('nav.contact'), href: '#contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const { language, toggle: toggleLanguage, t } = useTranslation();
  const personalInfo = getPersonalInfo(language);
  const navLinks = getNavLinks(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__container">
        <a
          href="#hero"
          className="header__logo"
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label={t('nav.goToStart')}
        >
          <span className="header__logo-accent">Vgsantos.</span>dev
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`} aria-label="Navegação principal">
          <a
            href="#hero"
            className="header__logo header__nav-logo"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label={t('nav.goToStart')}
          >
            <span className="header__logo-accent">Vgsantos.</span>dev
          </a>

          <ul className="header__nav-list" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={personalInfo.resume}
            className="header__cta"
            aria-label={t('nav.downloadCV')}
          >
            {t('nav.downloadCV')}
          </a>

          <button
            className="header__lang-toggle"
            onClick={toggleLanguage}
            aria-label={language === 'pt-BR' ? t('language.switchToEnUs') : t('language.switchToPtBr')}
            title={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
          >
            <span className="header__lang-text">{language === 'pt-BR' ? 'PT' : 'EN'}</span>
          </button>

          <button
            className="header__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.lightMode') : t('theme.darkMode')}
            title={theme === 'dark' ? t('theme.lightMode') : t('theme.darkMode')}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </nav>

        <button
          className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
