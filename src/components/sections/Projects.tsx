import { useState, useMemo } from 'react';
import { projects } from '../../data/projects';
import './Projects.css';

const allTechs = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filtered = useMemo(
    () =>
      activeFilter === 'Todos'
        ? projects
        : projects.filter((p) => p.technologies.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Portfólio</p>
          <h2 id="projects-title" className="section__title">
            Meus Projetos
          </h2>
          <p className="section__subtitle">
            Seleção de projetos que demonstram minhas habilidades técnicas e paixão por construir
            produtos úteis.
          </p>
        </div>

        <div className="projects__filters" role="group" aria-label="Filtrar projetos por tecnologia">
          <button
            className={`projects__filter-btn${activeFilter === 'Todos' ? ' projects__filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('Todos')}
          >
            Todos
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
            <article key={project.id} className="project-card">
              <div
                className="project-card__image"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
                aria-hidden="true"
              >
                <span className="project-card__image-label">{project.title}</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  {project.featured && (
                    <span className="project-card__badge" aria-label="Projeto em destaque">
                      Destaque
                    </span>
                  )}
                </div>

                <p className="project-card__description">{project.description}</p>

                <ul className="project-card__techs" aria-label="Tecnologias usadas">
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
                      aria-label={`Ver demo de ${project.title}`}
                    >
                      Demo ao vivo ↗
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--repo"
                      aria-label={`Ver repositório de ${project.title}`}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="projects__empty">Nenhum projeto encontrado para essa tecnologia.</p>
        )}
      </div>
    </section>
  );
};
