const ActionCell = ({ label = 'View Analytics', onClick }) => (
  <button
    type="button"
    className="hira-action-link"
    onClick={onClick}
  >
    {label}
  </button>
);

export default ActionCell;
