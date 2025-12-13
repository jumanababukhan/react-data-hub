import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppDispatch.js';
import { Upload, Settings, Menu, LogOut, Plus, ArrowLeft, Bot } from 'lucide-react';

const DashboardHeader = ({ onMenuToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCount } = useAppSelector((state) => state.candidates);

  // Check if we're on a detail/upload page that needs back button
  const isDetailPage = location.pathname.includes('/profile/') || 
                       location.pathname.includes('/upload');

  const getHeaderConfig = () => {
    const path = location.pathname;
    
    if (path.includes('/profile/')) {
      return { 
        title: 'Candidate Profile', 
        showBack: true,
        showButton: false 
      };
    }
    if (path.includes('/upload')) {
      return { 
        title: 'Upload Resumes', 
        showBack: true,
        showButton: false 
      };
    }
    
    const configs = {
      '/dashboard': { 
        title: 'Dashboard', 
        subtitle: '',
        buttonText: 'New Position',
        buttonIcon: Plus,
        showButton: true 
      },
      '/dashboard/candidates': { 
        title: 'Candidates List', 
        subtitle: `${totalCount.toLocaleString()} total resumes`,
        buttonText: 'Upload Resume',
        buttonIcon: Upload,
        showButton: true 
      },
      '/dashboard/positions': { 
        title: 'Positions Management', 
        subtitle: '18 Open Positions',
        buttonText: 'New Position',
        buttonIcon: Plus,
        showButton: true 
      },
      '/dashboard/interviews': { 
        title: 'Interviews', 
        subtitle: 'Schedule & Manage',
        buttonText: 'New Position',
        buttonIcon: Plus,
        showButton: true 
      },
    };
    return configs[path] || { title: 'Dashboard', showButton: true, buttonText: 'New Position', buttonIcon: Plus };
  };

  const config = getHeaderConfig();
  const ButtonIcon = config.buttonIcon || Plus;

  const handleLogout = () => {
    console.log('Logout clicked');
    // Add logout logic here
    navigate('/');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="hira-header">
      <div className="hira-header-left">
        {/* Mobile Menu Button */}
        <button 
          className="hira-btn-icon hira-mobile-menu"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Back Button for detail pages */}
        {config.showBack && (
          <button 
            className="hira-btn-back"
            onClick={handleBack}
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
        )}

        {/* HIRA Logo */}
        <div className="hira-header-logo">
          <div className="hira-logo-icon">
            <Bot size={18} />
          </div>
          <span className="hira-logo-name">HIRA</span>
        </div>

        {/* Title */}
        <div className="hira-header-title">
          <h1>{config.title}</h1>
        </div>

        {/* Subtitle Badge */}
        {config.subtitle && (
          <div className="hira-header-badge">
            <span>{config.subtitle}</span>
          </div>
        )}
      </div>

      <div className="hira-header-right">
        {/* Action Button */}
        {config.showButton && (
          <button className="hira-btn-primary">
            <ButtonIcon size={16} />
            <span>{config.buttonText}</span>
          </button>
        )}

        {/* Profile */}
        <div className="hira-header-profile">
          <div className="hira-profile-avatar">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Connor" />
          </div>
          <div className="hira-profile-info">
            <p className="hira-profile-name">Sarah Connor</p>
            <p className="hira-profile-role">HR Manager</p>
          </div>
        </div>

        {/* Settings */}
        <button className="hira-btn-icon" aria-label="Settings">
          <Settings size={20} />
        </button>

        {/* Logout */}
        <button className="hira-btn-logout" onClick={handleLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
