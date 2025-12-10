import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch.js';
import { fetchCandidates, setFilters, clearFilters, setPage, setPageSize } from '../../store/candidatesSlice.js';
import CandidatesFilters from './CandidatesFilters.jsx';
import CandidatesTableView from './CandidatesTableView.jsx';
import CandidatesPagination from './CandidatesPagination.jsx';

const CandidatesTable = () => {
  const dispatch = useAppDispatch();
  const { candidates, loading, totalCount, currentPage, pageSize, filters } = useAppSelector(
    (state) => state.candidates
  );

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch, currentPage, pageSize, filters]);

  const handleFilterChange = (key, value) => {
    dispatch(setFilters({ [key]: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const handlePageSizeChange = (size) => {
    dispatch(setPageSize(size));
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="candidates-table-wrapper">
      <CandidatesFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <CandidatesTableView candidates={candidates} loading={loading} />
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
