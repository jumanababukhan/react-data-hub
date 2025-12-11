const CandidateCell = ({ name, email, initials }) => (
  <div className="hira-candidate-cell">
    <div className="hira-candidate-avatar">
      {initials}
    </div>
    <div className="hira-candidate-info">
      <p className="hira-candidate-name">{name}</p>
      <p className="hira-candidate-email">{email}</p>
    </div>
  </div>
);

export default CandidateCell;
