const CandidateCell = ({ name, email, initials, avatarColor }) => (
  <div className="candidate-cell">
    <div className="candidate-avatar" style={{ backgroundColor: avatarColor }}>
      {initials}
    </div>
    <div className="candidate-info">
      <p className="name">{name}</p>
      <p className="email">{email}</p>
    </div>
  </div>
);

export default CandidateCell;
