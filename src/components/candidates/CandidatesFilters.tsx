import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CandidatesFiltersProps {
  filters: {
    name: string;
    skills: string;
    experience: string;
    status: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

const CandidatesFilters = ({ filters, onFilterChange, onClearFilters }: CandidatesFiltersProps) => {
  const hasFilters = Object.values(filters).some((v) => v !== '');

  return (
    <div className="p-6 border-b border-border">
      <div className="flex flex-wrap items-center gap-4">
        <Input
          placeholder="Candidate Name"
          value={filters.name}
          onChange={(e) => onFilterChange('name', e.target.value)}
          className="w-48"
        />

        <Select value={filters.skills} onValueChange={(value) => onFilterChange('skills', value)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Skills" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Skills</SelectItem>
            <SelectItem value="React">React</SelectItem>
            <SelectItem value="TypeScript">TypeScript</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="Node.js">Node.js</SelectItem>
            <SelectItem value="Figma">Figma</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.experience} onValueChange={(value) => onFilterChange('experience', value)}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Experience Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Experience</SelectItem>
            <SelectItem value="1">1+ years</SelectItem>
            <SelectItem value="3">3+ years</SelectItem>
            <SelectItem value="5">5+ years</SelectItem>
            <SelectItem value="7">7+ years</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.status} onValueChange={(value) => onFilterChange('status', value)}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Interviewed">Interviewed</SelectItem>
            <SelectItem value="Screened">Screened</SelectItem>
            <SelectItem value="Shortlisted">Shortlisted</SelectItem>
          </SelectContent>
        </Select>

        {hasFilters && (
          <Button
            variant="ghost"
            className="text-primary hover:text-primary/80 gap-1"
            onClick={onClearFilters}
          >
            <X className="w-4 h-4" />
            Clear All Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default CandidatesFilters;
