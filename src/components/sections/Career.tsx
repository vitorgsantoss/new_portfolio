import { experiences } from '../../data/career';
import './Career.css';

export const Career: React.FC = () => {
  return (
    <section id="career" className="career section section--alt" aria-labelledby="career-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Experiência</p>
          <h2 id="career-title" className="section__title">
            Carreira
          </h2>
          <p className="section__subtitle">
            Minha trajetória profissional desenvolvendo produtos digitais de impacto.
          </p>
        </div>

        <ol className="timeline" aria-label="Linha do tempo da carreira">
          {experiences.map((exp, index) => (
            <li key={exp.id} className={`timeline__item${index % 2 === 0 ? ' timeline__item--left' : ' timeline__item--right'}`}>
              <div className="timeline__connector">
                <div className="timeline__dot" aria-hidden="true" />
              </div>

              <article className="timeline__card">
                <div className="timeline__card-header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <time className="timeline__period">
                      {exp.period.start} — {exp.period.end}
                    </time>
                    <span className="timeline__location">{exp.location}</span>
                  </div>
                </div>

                <p className="timeline__description">{exp.description}</p>

                <ul className="timeline__responsibilities" aria-label="Responsabilidades">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="timeline__responsibility">
                      {r}
                    </li>
                  ))}
                </ul>

                <ul className="timeline__techs" aria-label="Tecnologias">
                  {exp.technologies.map((tech) => (
                    <li key={tech} className="timeline__tech">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
