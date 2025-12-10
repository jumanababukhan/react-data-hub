import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Video, Settings } from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { path: '/dashboard/candidates', label: 'Candidates', icon: Users },
  { path: '/dashboard/positions', label: 'Positions (JDs)', icon: Briefcase },
  { path: '/dashboard/interviews', label: 'Interviews', icon: Video },
];

const DashboardSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <aside className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="d-flex align-items-center gap-2">
            <div className="logo-box">
              <Settings size={20} />
            </div>
            <div className="logo-text">
              <h1>INF <span>SERVICES</span></h1>
              <p>Intelligence. Impact.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="sidebar-divider" />

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <p>© 2025 HIRA</p>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
