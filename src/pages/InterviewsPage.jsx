import { Video, Calendar, Clock } from 'lucide-react';

const interviews = [
  { candidate: 'James Wilson', position: 'Senior React Developer', date: 'Dec 15, 2024', time: '10:00 AM', status: 'Scheduled' },
  { candidate: 'Elena Rodriguez', position: 'UI/UX Designer', date: 'Dec 16, 2024', time: '2:00 PM', status: 'Confirmed' },
  { candidate: 'Michael Chang', position: 'Data Scientist', date: 'Dec 17, 2024', time: '11:00 AM', status: 'Pending' },
];

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'confirmed':
      return 'confirmed';
    case 'scheduled':
      return 'scheduled';
    default:
      return 'pending';
  }
};

const InterviewsPage = () => {
  return (
    <div className="hira-interviews-list">
      {interviews.map((interview, i) => (
        <div key={i} className="hira-interview-card">
          <div className="hira-interview-header">
            <h5 className="hira-interview-candidate">
              <Video size={20} />
              {interview.candidate}
            </h5>
            <span className={`hira-interview-status ${getStatusClass(interview.status)}`}>
              {interview.status}
            </span>
          </div>
          <p className="hira-interview-position">{interview.position}</p>
          <div className="hira-interview-meta">
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
