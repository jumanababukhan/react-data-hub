import { Users, Briefcase, Video, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Total Candidates',
    value: '1,248',
    change: '+12%',
    icon: Users,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'Open Positions',
    value: '24',
    change: '+4',
    icon: Briefcase,
    color: 'bg-status-shortlisted-bg text-status-shortlisted',
  },
  {
    title: 'Interviews Scheduled',
    value: '32',
    change: 'This week',
    icon: Video,
    color: 'bg-status-screened-bg text-status-screened',
  },
  {
    title: 'Hired This Month',
    value: '8',
    change: '+2 from last',
    icon: TrendingUp,
    color: 'bg-status-interviewed-bg text-status-interviewed',
  },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Welcome back, Sarah!</h2>
        <p className="text-muted-foreground">Here's what's happening with your recruitment pipeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'New candidate applied', name: 'James Wilson', time: '2 hours ago' },
              { action: 'Interview completed', name: 'Elena Rodriguez', time: '4 hours ago' },
              { action: 'Resume screened', name: 'Michael Chang', time: '6 hours ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.name}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
