import { useState, useMemo } from 'react';
import { getProjects } from '../../data/projects';
import { useTranslation } from '../../hooks/useTranslation';
import type { Project } from '../../types';
import './Projects.css';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div
        className="project-card__image"
        style={!project.imageUrl ? {
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        } : undefined}
        aria-hidden="true"
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-card__image-img"
            loading="lazy"
          />
        ) : (
          <span className="project-card__image-label">{project.title}</span>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          {project.featured && (
            <span className="project-card__badge" aria-label={t('projects.featured')}>
              {t('projects.featured')}
            </span>
          )}
        </div>

        <div className={`project-card__accordion${expanded ? ' project-card__accordion--open' : ''}`}>
          <p className="project-card__description">{project.description}</p>
        </div>

        <button
          className="project-card__details-btn"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label={expanded ? t('projects.hideDescription') : t('projects.moreDetails')}
        >
          {expanded ? `${t('projects.hideDescription')} ▲` : `${t('projects.moreDetails')} ▼`}
        </button>

        <ul className="project-card__techs" aria-label={t('projects.techsUsed')}>
          {project.technologies.map((tech) => (
            <li key={tech} className="project-card__tech">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--demo"
              aria-label={`${t('projects.viewDemo')} ${project.title}`}
            >
              {t('projects.liveDemo')} ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--repo"
              aria-label={`${t('projects.viewRepo')} ${project.title}`}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { t, language } = useTranslation();
  const projects = getProjects(language);

  const allTechs = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.technologies))).sort(),
    [projects]
  );

  const filtered = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.technologies.includes(activeFilter)),
    [activeFilter, projects],
  );

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t('projects.label')}</p>
          <h2 id="projects-title" className="section__title">
            {t('projects.title')}
          </h2>
          <p className="section__subtitle">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="projects__filters" role="group" aria-label={t('projects.filterByTech')}>
          <button
            className={`projects__filter-btn${activeFilter === 'all' ? ' projects__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t('projects.all')}
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`projects__filter-btn${activeFilter === tech ? ' projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="projects__empty">{t('projects.empty')}</p>
        )}
      </div>
    </section>
  );
};
