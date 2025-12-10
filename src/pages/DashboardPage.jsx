import { Row, Col, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
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
      <div className="mb-4">
        <h2 className="mb-1" style={{ fontWeight: 700 }}>Welcome back, Sarah!</h2>
        <p className="text-secondary">Here's what's happening with your recruitment pipeline.</p>
      </div>

      <Row className="mb-4">
        {stats.map((stat) => (
          <Col key={stat.title} xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
            <div className="stat-card">
              <div className="stat-header">
                <p className="stat-title">{stat.title}</p>
                <div className={`stat-icon ${stat.iconClass}`}>
                  <stat.icon size={18} />
                </div>
              </div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-change">{stat.change}</p>
            </div>
          </Col>
        ))}
      </Row>

      <Card className="custom-card">
        <CardHeader>
          <CardTitle tag="h5" className="mb-0">Recent Activity</CardTitle>
        </CardHeader>
        <CardBody>
          {recentActivity.map((activity, i) => (
            <div key={i} className="activity-item">
              <div className="activity-dot" />
              <div className="activity-content">
                <p className="activity-action">{activity.action}</p>
                <p className="activity-name">{activity.name}</p>
              </div>
              <span className="activity-time">{activity.time}</span>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;
