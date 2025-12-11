import { Input } from 'reactstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TablePagination = ({
  currentPage,
  totalPages,
  pageSize,
  totalCount,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50],
}) => {
  const startEntry = (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, totalCount);

  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first few pages
      pages.push(1, 2, 3, 4);
      
      // Add ellipsis and last page
      if (currentPage > 4 && currentPage < totalPages - 1) {
        pages.splice(1, 3, '...', currentPage);
      }
      
      pages.push('...');
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="hira-pagination">
      <div className="hira-pagination-entries">
        <span>Show</span>
        <Input
          type="select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="hira-entries-select"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </Input>
        <span>entries</span>
      </div>

      <div className="hira-pagination-info">
        Showing {startEntry}-{endEntry} of {totalCount.toLocaleString()}
      </div>

      <div className="hira-pagination-controls">
        <button
          type="button"
          className="hira-page-btn hira-page-btn-nav"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={14} />
        </button>

        {getPageNumbers().map((page, idx) =>
          typeof page === 'string' ? (
            <span key={`dots-${idx}`} className="hira-page-dots">
              {page}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={`hira-page-btn ${currentPage === page ? 'hira-page-btn-active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          className="hira-page-btn hira-page-btn-nav"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
