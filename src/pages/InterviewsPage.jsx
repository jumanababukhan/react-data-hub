import { Badge } from 'reactstrap';
import { Video, Calendar, Clock } from 'lucide-react';

const interviews = [
  { candidate: 'James Wilson', position: 'Senior React Developer', date: 'Dec 15, 2024', time: '10:00 AM', status: 'Scheduled' },
  { candidate: 'Elena Rodriguez', position: 'UI/UX Designer', date: 'Dec 16, 2024', time: '2:00 PM', status: 'Confirmed' },
  { candidate: 'Michael Chang', position: 'Data Scientist', date: 'Dec 17, 2024', time: '11:00 AM', status: 'Pending' },
];

const InterviewsPage = () => {
  return (
    <div>
      {interviews.map((interview, i) => (
        <div key={i} className="interview-card">
          <div className="interview-header">
            <h5 className="interview-candidate">
              <Video size={20} />
              {interview.candidate}
            </h5>
            <Badge color={interview.status === 'Confirmed' ? 'primary' : 'secondary'}>
              {interview.status}
            </Badge>
          </div>
          <p className="interview-position">{interview.position}</p>
          <div className="interview-meta">
            <span>
              <Calendar size={16} />
              {interview.date}
            </span>
            <span>
              <Clock size={16} />
              {interview.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterviewsPage;
