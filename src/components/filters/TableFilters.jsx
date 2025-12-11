import { Input } from 'reactstrap';
import { X } from 'lucide-react';

const TableFilters = ({ filters, filterConfig, onFilterChange, onClearFilters }) => {
  const hasFilters = Object.values(filters).some((v) => v !== '');

  return (
    <div className="table-filters">
      <div className="filter-row">
        {filterConfig.map((filter) => (
          <div key={filter.key} className="filter-item">
            {filter.type === 'text' ? (
              <Input
                type="text"
                placeholder={filter.placeholder}
                value={filters[filter.key] || ''}
                onChange={(e) => onFilterChange(filter.key, e.target.value)}
                className="filter-input"
              />
            ) : (
              <Input
                type="select"
                value={filters[filter.key] || ''}
                onChange={(e) => onFilterChange(filter.key, e.target.value)}
                className="filter-select"
              >
                <option value="">{filter.placeholder}</option>
                {filter.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Input>
            )}
          </div>
        ))}

        {hasFilters && (
          <button
            type="button"
            className="clear-filters-btn"
            onClick={onClearFilters}
          >
            <X size={14} />
            <span>Clear All Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TableFilters;
