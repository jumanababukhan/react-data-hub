import { Table, Input } from 'reactstrap';

const StatusBadge = ({ status }) => {
  const statusClass = status.toLowerCase();
  return (
    <span className={`status-badge ${statusClass}`}>
      {status}
    </span>
  );
};

const SkillChip = ({ skill }) => (
  <span className="skill-chip">{skill}</span>
);

const SkeletonRow = () => (
  <tr>
    <td><div className="skeleton" style={{ width: '18px', height: '18px' }} /></td>
    <td>
      <div className="d-flex align-items-center gap-3">
        <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <div>
          <div className="skeleton mb-2" style={{ width: '120px', height: '16px' }} />
          <div className="skeleton" style={{ width: '160px', height: '14px' }} />
        </div>
      </div>
    </td>
    <td><div className="skeleton" style={{ width: '150px', height: '20px' }} /></td>
    <td><div className="skeleton" style={{ width: '60px', height: '16px' }} /></td>
    <td><div className="skeleton" style={{ width: '80px', height: '24px', borderRadius: '12px' }} /></td>
    <td><div className="skeleton" style={{ width: '90px', height: '16px' }} /></td>
    <td><div className="skeleton" style={{ width: '100px', height: '16px' }} /></td>
  </tr>
);

const CandidatesTableView = ({ candidates, loading }) => {
  if (loading) {
    return (
      <div className="table-responsive">
        <Table className="candidates-table">
          <thead>
            <tr>
              <th style={{ width: '50px' }}><Input type="checkbox" /></th>
              <th>Candidate</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => <SkeletonRow key={i} />)}
          </tbody>
        </Table>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <Table className="candidates-table">
        <thead>
          <tr>
            <th style={{ width: '50px' }}><Input type="checkbox" /></th>
            <th>Candidate</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td><Input type="checkbox" /></td>
              <td>
                <div className="candidate-cell">
                  <div 
                    className="candidate-avatar"
                    style={{ backgroundColor: candidate.avatarColor }}
                  >
                    {candidate.initials}
                  </div>
                  <div className="candidate-info">
                    <p className="name">{candidate.name}</p>
                    <p className="email">{candidate.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex flex-wrap">
                  {candidate.skills.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </td>
              <td>{candidate.experience} years</td>
              <td>
                <StatusBadge status={candidate.status} />
              </td>
              <td>{candidate.date}</td>
              <td>
                <a href="#" className="action-link">View Analytics</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CandidatesTableView;
