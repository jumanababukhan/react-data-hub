import { useState } from 'react';
import { Outlet } from 'react-router-dom';
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
    <div className="hira-dashboard-wrapper">
      <DashboardSidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className="hira-main-content">
        <DashboardHeader onMenuToggle={toggleSidebar} />
        <div className="hira-content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
