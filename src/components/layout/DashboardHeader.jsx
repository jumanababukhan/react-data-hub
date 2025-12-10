import { useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Upload, Settings, Menu } from 'lucide-react';

const headerConfig = {
  '/dashboard': { title: 'Dashboard', subtitle: '' },
  '/dashboard/candidates': { title: 'Candidates List', subtitle: '1,248 total resumes', showUpload: true },
  '/dashboard/positions': { title: 'Positions', subtitle: 'Job Descriptions' },
  '/dashboard/interviews': { title: 'Interviews', subtitle: 'Schedule & Manage' },
};

const DashboardHeader = ({ onMenuToggle }) => {
  const location = useLocation();
  const config = headerConfig[location.pathname] || { title: 'Dashboard' };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        {/* Mobile Menu Button */}
        <Button 
          color="link" 
          className="d-lg-none p-0 text-secondary"
          onClick={onMenuToggle}
        >
          <Menu size={24} />
        </Button>

        {/* HIRA Logo */}
        <div className="header-logo-box">
          <div className="logo-icon">H</div>
          <span className="logo-text">HIRA</span>
        </div>

        {/* Title */}
        <div className="header-title">
          <h1>{config.title}</h1>
          {config.subtitle && <p>{config.subtitle}</p>}
        </div>
      </div>

      <div className="header-right">
        {/* Upload Button */}
        {config.showUpload && (
          <Button color="primary" className="btn-primary-custom d-none d-md-flex align-items-center gap-2">
            <Upload size={16} />
            Upload Resume
          </Button>
        )}

        {/* Divider */}
        <div className="header-divider d-none d-md-block" />

        {/* Profile */}
        <div className="header-profile">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
            alt="Profile"
            className="profile-avatar"
          />
          <div className="profile-info">
            <p className="name">Sarah Connor</p>
            <p className="role">HR Manager</p>
          </div>
          <Button color="link" className="p-0 text-secondary">
            <Settings size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
