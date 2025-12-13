import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Video, Settings, Upload, Plus } from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { path: '/dashboard/candidates', label: 'Candidates', icon: Users },
  { path: '/dashboard/positions', label: 'Positions (JDs)', icon: Briefcase },
  { path: '/dashboard/interviews', label: 'Interviews', icon: Video },
];

const DashboardSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const getActionButton = () => {
    const path = location.pathname;
    if (path === '/dashboard/candidates') {
      return { text: 'Upload Resume', icon: Upload };
    }
    return { text: 'New Position', icon: Plus };
  };

  const actionBtn = getActionButton();
  const ActionIcon = actionBtn.icon;

  return (
    <>
      <div 
        className={`hira-sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <aside className={`hira-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="hira-sidebar-logo">
          <div className="hira-logo-container">
            <div className="hira-logo-box">
              <Settings size={20} />
            </div>
            <div className="hira-logo-text">
              <h1>INF <span>SERVICES</span></h1>
              <p>Intelligence. Impact.</p>
            </div>
          </div>
        </div>

        <div className="hira-sidebar-divider" />

        {/* Navigation */}
        <nav className="hira-sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `hira-nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Action Button */}
        <div className="hira-sidebar-action">
          <button className="hira-btn-primary hira-btn-full">
            <ActionIcon size={16} />
            <span>{actionBtn.text}</span>
          </button>
        </div>

        {/* Footer */}
        <div className="hira-sidebar-footer">
          <p>© 2025 HIRA</p>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
