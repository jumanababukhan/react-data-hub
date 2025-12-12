const ExperienceSection = ({ experiences }) => {
  if (!experiences?.length) return null;

  return (
    <div className="hira-resume-section">
      <h3 className="hira-resume-section-title">Professional Experience</h3>
      {experiences.map((exp) => (
        <div key={exp.id} className="hira-resume-experience-item">
          <div className="hira-resume-experience-header">
            <h4 className="hira-resume-experience-title">{exp.title}</h4>
            <span className="hira-resume-experience-duration">{exp.detailedDuration}</span>
          </div>
          <p className="hira-resume-experience-company">{exp.company} | {exp.location}</p>
          {exp.responsibilities?.length > 0 && (
            <ul className="hira-resume-experience-list">
              {exp.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const TechnicalSkillsSection = ({ technicalSkills }) => {
  if (!technicalSkills || Object.keys(technicalSkills).length === 0) return null;

  const skillCategories = Object.entries(technicalSkills);

  return (
    <div className="hira-resume-section">
      <h3 className="hira-resume-section-title">Technical Skills</h3>
      <div className="hira-resume-skills-grid">
        {skillCategories.map(([category, skills]) => (
          <div key={category} className="hira-resume-skills-column">
            <h4>{category}</h4>
            <ul className="hira-resume-skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection = ({ education }) => {
  if (!education?.length) return null;

  return (
    <div className="hira-resume-section">
      <h3 className="hira-resume-section-title">Education</h3>
      {education.map((edu) => (
        <div key={edu.id} className="hira-resume-education-item">
          <div className="hira-resume-education-header">
            <h4 className="hira-resume-education-degree">{edu.degree}</h4>
            <span className="hira-resume-education-duration">{edu.duration}</span>
          </div>
          <p className="hira-resume-education-institution">{edu.institution}</p>
          {(edu.coursework || edu.gpa) && (
            <p className="hira-resume-education-details">
              {edu.coursework && <>Relevant Coursework: {edu.coursework}</>}
              {edu.coursework && edu.gpa && <br />}
              {edu.gpa && <>GPA: {edu.gpa}</>}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  if (!projects?.length) return null;

  return (
    <div className="hira-resume-section">
      <h3 className="hira-resume-section-title">Projects</h3>
      {projects.map((project) => (
        <div key={project.id} className="hira-resume-project-item">
          <h4 className="hira-resume-project-title">{project.title}</h4>
          <p className="hira-resume-project-desc">{project.description}</p>
          <p className="hira-resume-project-tech">Technologies: {project.technologies}</p>
        </div>
      ))}
    </div>
  );
};

const CertificationsSection = ({ certifications }) => {
  if (!certifications?.length) return null;

  return (
    <div className="hira-resume-section">
      <h3 className="hira-resume-section-title">Certifications</h3>
      <ul className="hira-resume-certifications-list">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

const DetailedResume = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="hira-detailed-resume">
      <div className="hira-detailed-resume-header">
        <h2 className="hira-detailed-resume-title">Detailed Resume</h2>
        <p className="hira-detailed-resume-subtitle">Complete professional background and qualifications</p>
      </div>

      <ExperienceSection experiences={profile.experience} />
      <TechnicalSkillsSection technicalSkills={profile.technicalSkills} />
      <EducationSection education={profile.education} />
      <ProjectsSection projects={profile.projects} />
      <CertificationsSection certifications={profile.certifications} />
    </div>
  );
};

export default DetailedResume;
