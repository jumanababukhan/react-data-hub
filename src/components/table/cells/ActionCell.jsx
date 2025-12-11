const ActionCell = ({ label = 'View Analytics', onClick, href = '#' }) => (
  <a
    href={href}
    className="action-link"
    onClick={(e) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    }}
  >
    {label}
  </a>
);

export default ActionCell;
