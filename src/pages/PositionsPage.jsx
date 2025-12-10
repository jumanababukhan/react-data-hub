import { Row, Col } from 'reactstrap';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const positions = [
  { title: 'Senior React Developer', location: 'Remote', type: 'Full-time', applicants: 45 },
  { title: 'UI/UX Designer', location: 'New York, NY', type: 'Full-time', applicants: 32 },
  { title: 'DevOps Engineer', location: 'San Francisco, CA', type: 'Contract', applicants: 28 },
  { title: 'Data Scientist', location: 'Remote', type: 'Full-time', applicants: 56 },
];

const PositionsPage = () => {
  return (
    <Row>
      {positions.map((position, i) => (
        <Col key={i} xs={12} md={6} className="mb-4">
          <div className="position-card">
            <h5 className="position-title">
              <Briefcase size={20} />
              {position.title}
            </h5>
            <div className="position-meta">
              <span>
                <MapPin size={16} />
                {position.location}
              </span>
              <span>
                <Clock size={16} />
                {position.type}
              </span>
            </div>
            <p className="position-applicants">
              <strong>{position.applicants}</strong> applicants
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default PositionsPage;
