import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="ml-sidebar">
        <DashboardHeader />
        <main className="p-6 animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
