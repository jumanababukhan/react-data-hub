import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppDispatch.js';
import { Menu, ArrowLeft, Bot } from 'lucide-react';
import HeaderProfile from './HeaderProfile';

const DashboardHeader = ({ onMenuToggle, onBack }) => {
  const location = useLocation();
  const { totalCount } = useAppSelector((state) => state.candidates);

  const getHeaderConfig = () => {
    const path = location.pathname;
    
    if (path.includes('/profile/')) {
      return { title: 'Candidate Profile', showBack: true };
    }
    if (path.includes('/upload')) {
      return { title: 'Upload Resumes', showBack: true };
    }
    
    const configs = {
      '/dashboard': { title: 'Dashboard', subtitle: '' },
      '/dashboard/candidates': { title: 'Candidates List', subtitle: `${totalCount.toLocaleString()} total resumes` },
      '/dashboard/positions': { title: 'Positions Management', subtitle: '18 Open Positions' },
      '/dashboard/interviews': { title: 'Interviews', subtitle: 'Schedule & Manage' },
    };
    return configs[path] || { title: 'Dashboard' };
  };

  const config = getHeaderConfig();

  const handleBack = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  return (
    <header className="hira-header">
      <div className="hira-header-left">
        <button 
          className="hira-btn-icon hira-mobile-menu"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {config.showBack && (
          <button className="hira-btn-back" onClick={handleBack} aria-label="Go back">
            <ArrowLeft size={20} />
          </button>
        )}

        <div className="hira-header-logo">
          <div className="hira-logo-icon">
            <Bot size={18} />
          </div>
          <span className="hira-logo-name">HIRA</span>
        </div>

        <div className="hira-header-title-group">
          <h1 className="hira-header-title">{config.title}</h1>
          {config.subtitle && (
            <p className="hira-header-subtitle">{config.subtitle}</p>
          )}
        </div>
      </div>

      <div className="hira-header-right">
        <HeaderProfile />
      </div>
    </header>
  );
};

export default DashboardHeader;
