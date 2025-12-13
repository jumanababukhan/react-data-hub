import { Users, Briefcase, Video, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Candidates',
    value: '1,248',
    change: '+12%',
    icon: Users,
    iconClass: 'primary',
  },
  {
    title: 'Open Positions',
    value: '24',
    change: '+4',
    icon: Briefcase,
    iconClass: 'info',
  },
  {
    title: 'Interviews Scheduled',
    value: '32',
    change: 'This week',
    icon: Video,
    iconClass: 'warning',
  },
  {
    title: 'Hired This Month',
    value: '8',
    change: '+2 from last',
    icon: TrendingUp,
    iconClass: 'success',
  },
];

const recentActivity = [
  { action: 'New candidate applied', name: 'James Wilson', time: '2 hours ago' },
  { action: 'Interview completed', name: 'Elena Rodriguez', time: '4 hours ago' },
  { action: 'Resume screened', name: 'Michael Chang', time: '6 hours ago' },
];

const DashboardPage = () => {
  return (
    <div>
      <div className="hira-dashboard-welcome">
        <h2>Welcome back, Sarah!</h2>
        <p>Here's what's happening with your recruitment pipeline.</p>
      </div>

      <div className="hira-stats-grid">
        {stats.map((stat) => (
          <div key={stat.title} className="hira-stat-card">
            <div className="hira-stat-header">
              <p className="hira-stat-title">{stat.title}</p>
              <div className={`hira-stat-icon ${stat.iconClass}`}>
                <stat.icon size={18} />
              </div>
            </div>
            <p className="hira-stat-value">{stat.value}</p>
            <p className="hira-stat-change">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="hira-activity-card">
        <div className="hira-activity-header">
          <h5>Recent Activity</h5>
        </div>
        <div className="hira-activity-body">
          {recentActivity.map((activity, i) => (
            <div key={i} className="hira-activity-item">
              <div className="hira-activity-dot" />
              <div className="hira-activity-content">
                <p className="hira-activity-action">{activity.action}</p>
                <p className="hira-activity-name">{activity.name}</p>
              </div>
              <span className="hira-activity-time">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
