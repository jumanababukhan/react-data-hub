import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';
import { fetchCandidates, setFilters, clearFilters, setPage, setPageSize } from '@/store/candidatesSlice';
import CandidatesFilters from './CandidatesFilters';
import CandidatesTableView from './CandidatesTableView';
import CandidatesPagination from './CandidatesPagination';

const CandidatesTable = () => {
  const dispatch = useAppDispatch();
  const { candidates, loading, totalCount, currentPage, pageSize, filters } = useAppSelector(
    (state) => state.candidates
  );

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch, currentPage, pageSize, filters]);

  const handleFilterChange = (key: string, value: string) => {
    dispatch(setFilters({ [key]: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const handlePageSizeChange = (size: number) => {
    dispatch(setPageSize(size));
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm">
      {/* Filters */}
      <CandidatesFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* Table */}
      <CandidatesTableView candidates={candidates} loading={loading} />

      {/* Pagination */}
      <CandidatesPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default CandidatesTable;
