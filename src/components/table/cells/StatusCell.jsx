const StatusCell = ({ status }) => {
  const statusClass = status.toLowerCase();
  return (
    <span className={`status-badge ${statusClass}`}>
      {status}
    </span>
  );
};

export default StatusCell;
