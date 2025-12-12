import { useNavigate } from 'react-router-dom';

const CandidateCell = ({ id, name, email, initials }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/candidates/${id}`);
  };

  return (
    <div className="hira-candidate-cell">
      <div className="hira-candidate-avatar">
        {initials}
      </div>
      <div className="hira-candidate-info">
        <p 
          className="hira-candidate-name hira-candidate-name-link" 
          onClick={handleClick}
        >
          {name}
        </p>
        <p className="hira-candidate-email">{email}</p>
      </div>
    </div>
  );
};

export default CandidateCell;
