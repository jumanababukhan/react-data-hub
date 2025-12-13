import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppDispatch.js';
import { Menu, ArrowLeft, Bot, Plus, Upload } from 'lucide-react';
import HeaderProfile from './HeaderProfile';

const DashboardHeader = ({ onMenuToggle, onBack }) => {
  const location = useLocation();
  const { totalCount } = useAppSelector((state) => state.candidates);

  const getHeaderConfig = () => {
    const path = location.pathname;
    
    if (path.includes('/profile/')) {
      return { title: 'Candidate Profile', showBack: true, showButton: false };
    }
    if (path.includes('/upload')) {
      return { title: 'Upload Resumes', showBack: true, showButton: false };
    }
    
    const configs = {
      '/dashboard': { title: 'Dashboard', subtitle: '', buttonText: 'New Position', buttonIcon: Plus, showButton: true },
      '/dashboard/candidates': { title: 'Candidates List', subtitle: `${totalCount.toLocaleString()} total resumes`, buttonText: 'Upload Resume', buttonIcon: Upload, showButton: true },
      '/dashboard/positions': { title: 'Positions Management', subtitle: '18 Open Positions', buttonText: 'New Position', buttonIcon: Plus, showButton: true },
      '/dashboard/interviews': { title: 'Interviews', subtitle: 'Schedule & Manage', buttonText: 'New Position', buttonIcon: Plus, showButton: true },
    };
    return configs[path] || { title: 'Dashboard', showButton: true, buttonText: 'New Position', buttonIcon: Plus };
  };

  const config = getHeaderConfig();
  const ButtonIcon = config.buttonIcon || Plus;

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
        {config.showButton && (
          <button className="hira-btn-primary hira-header-action">
            <ButtonIcon size={16} />
            <span>{config.buttonText}</span>
          </button>
        )}
        <HeaderProfile />
      </div>
    </header>
  );
};

export default DashboardHeader;
