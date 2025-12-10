import { NavLink } from '@/components/NavLink';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Briefcase, Video, Settings } from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/dashboard/candidates', label: 'Candidates', icon: Users },
  { path: '/dashboard/positions', label: 'Positions (JDs)', icon: Briefcase },
  { path: '/dashboard/interviews', label: 'Interviews', icon: Video },
];

const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-sidebar bg-sidebar border-r border-sidebar-border flex flex-col z-50">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground tracking-tight">
              INF <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-[10px] text-muted-foreground -mt-1">Intelligence. Impact.</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-sidebar-border" />

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
              "text-sidebar-foreground hover:bg-sidebar-active-bg hover:text-sidebar-active"
            )}
            activeClassName="bg-sidebar-active-bg text-sidebar-active"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground text-center">© 2025 HIRA</p>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
