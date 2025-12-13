import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, LogOut } from 'lucide-react';

const HeaderProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log('Logout clicked');
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="hira-header-profile" ref={dropdownRef}>
      <div className="hira-profile-avatar">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Connor" />
      </div>
      <div className="hira-profile-info">
        <p className="hira-profile-name">Sarah Connor</p>
        <p className="hira-profile-role">HR Manager</p>
      </div>
      
      <button 
        className="hira-btn-settings"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>

      {isOpen && (
        <div className="hira-profile-dropdown">
          <button className="hira-dropdown-item" onClick={handleLogout}>
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
