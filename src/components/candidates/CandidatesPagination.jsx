import { Button, Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CandidatesPagination = ({
  currentPage,
  totalPages,
  pageSize,
  totalCount,
  onPageChange,
  onPageSizeChange,
}) => {
  const startEntry = (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, totalCount);

  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="pagination-section">
      <div className="entries-select">
        <span>Show</span>
        <Input
          type="select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          bsSize="sm"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </Input>
        <span>entries</span>
      </div>

      <div className="pagination-info">
        Showing {startEntry}-{endEntry} of {totalCount.toLocaleString()}
      </div>

      <Pagination size="sm" className="mb-0">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft size={16} />
          </PaginationLink>
        </PaginationItem>

        {getPageNumbers().map((page, idx) =>
          typeof page === 'string' ? (
            <PaginationItem key={`dots-${idx}`} disabled>
              <PaginationLink>{page}</PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={page} active={currentPage === page}>
              <PaginationLink onClick={() => onPageChange(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            next
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRight size={16} />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default CandidatesPagination;
