import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const interviews = [
  { candidate: 'James Wilson', position: 'Senior React Developer', date: 'Dec 15, 2024', time: '10:00 AM', status: 'Scheduled' },
  { candidate: 'Elena Rodriguez', position: 'UI/UX Designer', date: 'Dec 16, 2024', time: '2:00 PM', status: 'Confirmed' },
  { candidate: 'Michael Chang', position: 'Data Scientist', date: 'Dec 17, 2024', time: '11:00 AM', status: 'Pending' },
];

const InterviewsPage = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {interviews.map((interview, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Video className="w-5 h-5 text-primary" />
                  {interview.candidate}
                </CardTitle>
                <Badge variant={interview.status === 'Confirmed' ? 'default' : 'secondary'}>
                  {interview.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{interview.position}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {interview.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {interview.time}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InterviewsPage;
