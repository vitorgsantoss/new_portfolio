import { getExperiences, getEducation } from '../../data/career';
import { useTranslation } from '../../hooks/useTranslation';
import './Career.css';

export const Career: React.FC = () => {
  const { t, language } = useTranslation();
  const experiences = getExperiences(language);
  const education = getEducation(language);

  return (
    <section id="career" className="career section section--alt" aria-labelledby="career-title">
      <div className="section__container">
        <div className="section__header">
          <p className="section__label">{t('career.label')}</p>
          <h2 id="career-title" className="section__title">
            {t('career.title')}
          </h2>
          <p className="section__subtitle">
            {t('career.subtitle')}
          </p>
        </div>

        <ol className="timeline" aria-label={t('career.timeline')}>
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

                <ul className="timeline__responsibilities" aria-label={t('career.responsibilities')}>
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="timeline__responsibility">
                      {r}
                    </li>
                  ))}
                </ul>

                <ul className="timeline__techs" aria-label={t('career.technologies')}>
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

        <div className="career__education">
          <h3 className="career__education-title">{t('career.education')}</h3>
          <ol className="education-list" aria-label={t('career.educationTimeline')}>
            {education.map((edu) => (
              <li key={edu.id} className="education-item">
                <div className="education-item__icon" aria-hidden="true">🎓</div>
                <div className="education-item__content">
                  <h4 className="education-item__degree">{edu.degree}</h4>
                  <p className="education-item__institution">{edu.institution}</p>
                  <time className="education-item__period">
                    {edu.period.start} — {edu.period.end}
                  </time>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
