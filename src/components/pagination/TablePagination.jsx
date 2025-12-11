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
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push(2);
      pages.push(3);
      pages.push(4);
      
      if (currentPage > 4 && currentPage < totalPages - 1) {
        pages.splice(1, 3, '...', currentPage);
      }
      
      if (totalPages > 5) {
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="table-pagination">
      <div className="pagination-entries">
        <span>Show</span>
        <Input
          type="select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="entries-select"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </Input>
        <span>entries</span>
      </div>

      <div className="pagination-info">
        Showing {startEntry}-{endEntry} of {totalCount.toLocaleString()}
      </div>

      <div className="pagination-controls">
        <button
          type="button"
          className="page-btn nav-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft size={16} />
        </button>

        {getPageNumbers().map((page, idx) =>
          typeof page === 'string' ? (
            <span key={`dots-${idx}`} className="page-dots">
              {page}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          className="page-btn nav-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
