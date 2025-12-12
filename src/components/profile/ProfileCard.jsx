import { Mail, Phone, MapPin, Linkedin, Download, FileText } from 'lucide-react';

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="hira-profile-card">
      <div className="hira-profile-card-content">
        {/* Left Section */}
        <div className="hira-profile-left">
          {/* Avatar */}
          <div className="hira-profile-avatar-section">
            <div className="hira-profile-avatar-large">
              {profile.initials}
            </div>
            <h2 className="hira-profile-name-large">{profile.name}</h2>
            <p className="hira-profile-title">{profile.title}</p>
          </div>

          {/* Profile Score */}
          <div className="hira-profile-score">
            <div className="hira-profile-score-header">
              <span className="hira-profile-score-label">Profile Score</span>
              <span className="hira-profile-score-value">{profile.profileScore}%</span>
            </div>
            <div className="hira-profile-score-bar">
              <div 
                className="hira-profile-score-fill" 
                style={{ width: `${profile.profileScore}%` }}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="hira-profile-contact">
            <div className="hira-profile-contact-item">
              <Mail className="hira-profile-contact-icon" />
              <span className="hira-profile-contact-text">{profile.email}</span>
            </div>
            <div className="hira-profile-contact-item">
              <Phone className="hira-profile-contact-icon" />
              <span className="hira-profile-contact-text">{profile.phone}</span>
            </div>
            <div className="hira-profile-contact-item">
              <MapPin className="hira-profile-contact-icon" />
              <span className="hira-profile-contact-text">{profile.location}</span>
            </div>
            <div className="hira-profile-contact-item">
              <Linkedin className="hira-profile-contact-icon" />
              <a href={`https://${profile.linkedin}`} className="hira-profile-contact-link" target="_blank" rel="noopener noreferrer">
                {profile.linkedin}
              </a>
            </div>
          </div>

          {/* Resume File */}
          {profile.resumeFile && (
            <div className="hira-profile-resume">
              <div className="hira-profile-resume-info">
                <div className="hira-profile-resume-icon">
                  <FileText />
                </div>
                <div className="hira-profile-resume-details">
                  <p className="hira-profile-resume-name">{profile.resumeFile.name}</p>
                  <p className="hira-profile-resume-date">Uploaded {profile.resumeFile.uploadedAt}</p>
                </div>
              </div>
              <button className="hira-profile-resume-download">
                <Download />
                Download Resume
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="hira-profile-right">
          {/* Professional Summary */}
          <div className="hira-profile-section">
            <h3 className="hira-profile-section-title">Professional Summary</h3>
            <p className="hira-profile-section-text">{profile.professionalSummary}</p>
          </div>

          {/* Skills */}
          <div className="hira-profile-section">
            <h3 className="hira-profile-section-title">Skills & Technologies</h3>
            <div className="hira-profile-skills">
              {profile.skills?.map((skill, index) => (
                <span key={index} className="hira-profile-skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="hira-profile-section">
            <h3 className="hira-profile-section-title">Experience</h3>
            {profile.experience?.slice(0, 2).map((exp) => (
              <div key={exp.id} className="hira-profile-experience-item">
                <div className="hira-profile-experience-header">
                  <h4 className="hira-profile-experience-title">{exp.title}</h4>
                  <span className="hira-profile-experience-duration">{exp.duration}</span>
                </div>
                <p className="hira-profile-experience-company">{exp.company}</p>
                <p className="hira-profile-experience-desc">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="hira-profile-section">
            <h3 className="hira-profile-section-title">Education</h3>
            {profile.education?.map((edu) => (
              <div key={edu.id} className="hira-profile-education-item">
                <div className="hira-profile-education-header">
                  <div>
                    <h4 className="hira-profile-education-degree">{edu.degree}</h4>
                    <p className="hira-profile-education-institution">{edu.institution}</p>
                  </div>
                  <span className="hira-profile-education-duration">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
