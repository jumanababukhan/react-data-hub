import { useLocation } from 'react-router-dom';
import { Upload, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderConfig {
  title: string;
  subtitle?: string;
  showUpload?: boolean;
}

const headerConfig: Record<string, HeaderConfig> = {
  '/dashboard': { title: 'Dashboard', subtitle: '' },
  '/dashboard/candidates': { title: 'Candidates List', subtitle: '1,248 total resumes', showUpload: true },
  '/dashboard/positions': { title: 'Positions', subtitle: 'Job Descriptions' },
  '/dashboard/interviews': { title: 'Interviews', subtitle: 'Schedule & Manage' },
};

const DashboardHeader = () => {
  const location = useLocation();
  const config = headerConfig[location.pathname] || { title: 'Dashboard' };

  return (
    <header className="h-header bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        {/* HIRA Logo */}
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">H</span>
          </div>
          <span className="font-bold text-primary">HIRA</span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-xl font-semibold text-foreground">{config.title}</h1>
          {config.subtitle && (
            <p className="text-sm text-muted-foreground">{config.subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Upload Button */}
        {config.showUpload && (
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Resume
          </Button>
        )}

        {/* Divider */}
        <div className="h-10 w-px bg-border" />

        {/* Profile */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">Sarah Connor</p>
            <p className="text-xs text-muted-foreground">HR Manager</p>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
