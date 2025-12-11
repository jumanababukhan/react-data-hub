const StatusCell = ({ status }) => {
  const getStatusClass = () => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'interviewed') return 'hira-status-interviewed';
    if (statusLower === 'screened') return 'hira-status-screened';
    if (statusLower === 'shortlisted') return 'hira-status-shortlisted';
    return '';
  };

  return (
    <span className={`hira-status-badge ${getStatusClass()}`}>
      {status}
    </span>
  );
};

export default StatusCell;
