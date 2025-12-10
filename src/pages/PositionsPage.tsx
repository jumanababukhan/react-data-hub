import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const positions = [
  { title: 'Senior React Developer', location: 'Remote', type: 'Full-time', applicants: 45 },
  { title: 'UI/UX Designer', location: 'New York, NY', type: 'Full-time', applicants: 32 },
  { title: 'DevOps Engineer', location: 'San Francisco, CA', type: 'Contract', applicants: 28 },
  { title: 'Data Scientist', location: 'Remote', type: 'Full-time', applicants: 56 },
];

const PositionsPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {positions.map((position, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                {position.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {position.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {position.type}
                </span>
              </div>
              <div className="text-sm">
                <span className="font-medium text-foreground">{position.applicants}</span>
                <span className="text-muted-foreground"> applicants</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PositionsPage;
