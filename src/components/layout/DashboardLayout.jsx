import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Menu, X } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar.jsx';
import DashboardHeader from './DashboardHeader.jsx';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-wrapper">
      <DashboardSidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className="main-content">
        <DashboardHeader onMenuToggle={toggleSidebar} />
        <div className="content-area">
          <Outlet />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default DashboardLayout;
