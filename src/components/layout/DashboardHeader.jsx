import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppDispatch.js';
import { Upload, Settings, Menu, LogOut } from 'lucide-react';

const DashboardHeader = ({ onMenuToggle }) => {
  const location = useLocation();
  const { totalCount } = useAppSelector((state) => state.candidates);

  const getHeaderConfig = () => {
    const configs = {
      '/dashboard': { title: 'Dashboard', subtitle: '' },
      '/dashboard/candidates': { 
        title: 'Candidates List', 
        subtitle: `${totalCount.toLocaleString()} total resumes`, 
        showUpload: true 
      },
      '/dashboard/positions': { title: 'Positions', subtitle: 'Job Descriptions' },
      '/dashboard/interviews': { title: 'Interviews', subtitle: 'Schedule & Manage' },
    };
    return configs[location.pathname] || { title: 'Dashboard' };
  };

  const config = getHeaderConfig();

  const handleLogout = () => {
    console.log('Logout clicked');
    // Add logout logic here
  };

  return (
    <header className="hira-header">
      <div className="hira-header-left">
        {/* Mobile Menu Button */}
        <button 
          className="hira-btn-icon d-lg-none"
          onClick={onMenuToggle}
        >
          <Menu size={24} />
        </button>

        {/* HIRA Logo */}
        <div className="hira-header-logo">
          <div className="hira-logo-icon">H</div>
          <span className="hira-logo-text">HIRA</span>
        </div>

        <div className="hira-header-divider d-none d-md-block" />

        {/* Title */}
        <div className="hira-header-title">
          <h1>{config.title}</h1>
          {config.subtitle && <p>{config.subtitle}</p>}
        </div>
      </div>

      <div className="hira-header-right">
        {/* Upload Button */}
        {config.showUpload && (
          <button className="hira-btn-upload d-none d-md-flex">
            <Upload size={16} />
            <span>New Position</span>
          </button>
        )}

        {/* Profile */}
        <div className="hira-header-profile">
          <div className="hira-profile-avatar">SC</div>
          <div className="hira-profile-info">
            <p className="hira-profile-name">Sarah Connor</p>
            <p className="hira-profile-role">HR Manager</p>
          </div>
        </div>

        {/* Actions */}
        <div className="hira-header-actions">
          <button className="hira-btn-icon">
            <Settings size={20} />
          </button>
          <button className="hira-btn-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span className="d-none d-md-inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
