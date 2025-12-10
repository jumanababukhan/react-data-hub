import { Candidate } from '@/services/candidatesApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface CandidatesTableViewProps {
  candidates: Candidate[];
  loading: boolean;
}

const StatusBadge = ({ status }: { status: string }) => {
  const statusClass = status.toLowerCase();
  return (
    <span className={cn('status-badge', statusClass)}>
      {status}
    </span>
  );
};

const SkillChip = ({ skill }: { skill: string }) => (
  <span className="skill-chip">{skill}</span>
);

const CandidatesTableView = ({ candidates, loading }: CandidatesTableViewProps) => {
  if (loading) {
    return (
      <div className="p-6 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-12">
            <Checkbox />
          </TableHead>
          <TableHead className="font-semibold text-foreground uppercase text-xs tracking-wider">
            Candidate
          </TableHead>
          <TableHead className="font-semibold text-foreground uppercase text-xs tracking-wider">
            Skills
          </TableHead>
          <TableHead className="font-semibold text-foreground uppercase text-xs tracking-wider">
            Experience
          </TableHead>
          <TableHead className="font-semibold text-foreground uppercase text-xs tracking-wider">
            Status
          </TableHead>
          <TableHead className="font-semibold text-foreground uppercase text-xs tracking-wider">
            Date
          </TableHead>
          <TableHead className="font-semibold text-foreground uppercase text-xs tracking-wider">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id} className="hover:bg-muted/50 transition-colors">
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-primary-foreground"
                  style={{ backgroundColor: candidate.avatarColor }}
                >
                  {candidate.initials}
                </div>
                <div>
                  <p className="font-medium text-foreground">{candidate.name}</p>
                  <p className="text-sm text-muted-foreground">{candidate.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1.5">
                {candidate.skills.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {candidate.experience} years
            </TableCell>
            <TableCell>
              <StatusBadge status={candidate.status} />
            </TableCell>
            <TableCell className="text-muted-foreground">
              {candidate.date}
            </TableCell>
            <TableCell>
              <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                View Analytics
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CandidatesTableView;
