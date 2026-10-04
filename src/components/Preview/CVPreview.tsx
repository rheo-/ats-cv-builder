import type { CVData } from "../../types/cv";

interface CVPreviewProps {
  cv: CVData;
}

export function CVPreview({ cv }: CVPreviewProps) {
  return (
    <article className="cv">
      <header className="cv-header">
        <h1>{cv.personal.name}</h1>

        <div className="cv-contact">
          {cv.personal.location && (
            <span>{cv.personal.location}</span>
          )}

          {cv.personal.email && (
            <span>{cv.personal.email}</span>
          )}

          {cv.personal.phone && (
            <span>{cv.personal.phone}</span>
          )}

          {cv.personal.linkedin && (
            <span>{cv.personal.linkedin}</span>
          )}

          {cv.personal.website && (
            <span>{cv.personal.website}</span>
          )}
        </div>
      </header>

      {cv.summary && (
        <section className="cv-section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>{cv.summary}</p>
        </section>
      )}

      {cv.experience.length > 0 && (
        <section className="cv-section">
          <h2>EXPERIENCE</h2>

          {cv.experience.map((job, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <div>
                  <h3>{job.position}</h3>
                  <div className="company">
                    {job.company}
                    {job.location && ` · ${job.location}`}
                  </div>
                </div>

                <div className="date">
                  {job.startDate} – {job.endDate}
                </div>
              </div>

              {job.description.length > 0 && (
                <ul>
                  {job.description.map((item, bulletIndex) => (
                    <li key={bulletIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {cv.education.length > 0 && (
        <section className="cv-section">
          <h2>EDUCATION</h2>

          {cv.education.map((education, index) => (
            <div className="education-item" key={index}>
              <div className="education-header">
                <div>
                  <h3>{education.degree}</h3>

                  <div className="institution">
                    {education.institution}
                    {education.field && ` · ${education.field}`}
                  </div>
                </div>

                {(education.startDate || education.endDate) && (
                  <div className="date">
                    {education.startDate} – {education.endDate}
                  </div>
                )}
              </div>

              {education.description &&
                education.description.length > 0 && (
                  <ul>
                    {education.description.map((item, bulletIndex) => (
                      <li key={bulletIndex}>{item}</li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </section>
      )}

      {cv.skills.length > 0 && (
        <section className="cv-section">
          <h2>SKILLS</h2>

          <p>{cv.skills.join(" · ")}</p>
        </section>
      )}

      {cv.projects.length > 0 && (
        <section className="cv-section">
          <h2>PROJECTS</h2>

          {cv.projects.map((project, index) => (
            <div className="project-item" key={index}>
              <h3>{project.name}</h3>

              {project.technologies &&
                project.technologies.length > 0 && (
                  <div className="technologies">
                    {project.technologies.join(" · ")}
                  </div>
                )}

              <ul>
                {project.description.map((item, bulletIndex) => (
                  <li key={bulletIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </article>
  );
}