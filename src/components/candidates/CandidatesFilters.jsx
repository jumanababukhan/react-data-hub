import { Input, Button } from 'reactstrap';
import { X } from 'lucide-react';

const CandidatesFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const hasFilters = Object.values(filters).some((v) => v !== '');

  return (
    <div className="filters-section">
      <div className="filter-group">
        <Input
          type="text"
          placeholder="Candidate Name"
          value={filters.name}
          onChange={(e) => onFilterChange('name', e.target.value)}
          style={{ maxWidth: '200px' }}
        />

        <Input
          type="select"
          value={filters.skills}
          onChange={(e) => onFilterChange('skills', e.target.value)}
          style={{ maxWidth: '160px' }}
        >
          <option value="">All Skills</option>
          <option value="React">React</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Python">Python</option>
          <option value="Node.js">Node.js</option>
          <option value="Figma">Figma</option>
        </Input>

        <Input
          type="select"
          value={filters.experience}
          onChange={(e) => onFilterChange('experience', e.target.value)}
          style={{ maxWidth: '180px' }}
        >
          <option value="">Experience Level</option>
          <option value="1">1+ years</option>
          <option value="3">3+ years</option>
          <option value="5">5+ years</option>
          <option value="7">7+ years</option>
        </Input>

        <Input
          type="select"
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          style={{ maxWidth: '150px' }}
        >
          <option value="">All Status</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Screened">Screened</option>
          <option value="Shortlisted">Shortlisted</option>
        </Input>

        {hasFilters && (
          <Button
            color="link"
            className="text-primary d-flex align-items-center gap-1 p-0"
            onClick={onClearFilters}
          >
            <X size={16} />
            Clear All Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default CandidatesFilters;
