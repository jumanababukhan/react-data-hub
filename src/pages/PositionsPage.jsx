import { Briefcase, MapPin, Clock } from 'lucide-react';

const positions = [
  { title: 'Senior React Developer', location: 'Remote', type: 'Full-time', applicants: 45 },
  { title: 'UI/UX Designer', location: 'New York, NY', type: 'Full-time', applicants: 32 },
  { title: 'DevOps Engineer', location: 'San Francisco, CA', type: 'Contract', applicants: 28 },
  { title: 'Data Scientist', location: 'Remote', type: 'Full-time', applicants: 56 },
];

const PositionsPage = () => {
  return (
    <div className="hira-positions-grid">
      {positions.map((position, i) => (
        <div key={i} className="hira-position-card">
          <h5 className="hira-position-title">
            <Briefcase size={20} />
            {position.title}
          </h5>
          <div className="hira-position-meta">
            <span>
              <MapPin size={16} />
              {position.location}
            </span>
            <span>
              <Clock size={16} />
              {position.type}
            </span>
          </div>
          <p className="hira-position-applicants">
            <strong>{position.applicants}</strong> applicants
          </p>
        </div>
      ))}
    </div>
  );
};

export default PositionsPage;
