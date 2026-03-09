import { skillCategories } from '../../data/skills';
import './Skills.css';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">Tecnologias</p>
          <h2 id="skills-title" className="section__title">
            Habilidades
          </h2>
          <p className="section__subtitle">
            Stack técnico que utilizo para construir produtos robustos do front ao back-end.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <article key={category.id} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="skill-card__name">{category.name}</h3>
              </div>
              <ul className="skill-card__list" aria-label={`Habilidades de ${category.name}`}>
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-card__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
