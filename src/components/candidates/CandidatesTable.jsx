import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch.js';
import { fetchCandidates, setFilters, clearFilters, setPage, setPageSize } from '../../store/candidatesSlice.js';
import { DataTable, CheckboxHeader, CheckboxCell, CandidateCell, SkillsCell, StatusCell, ActionCell } from '../table/index.js';
import { TableFilters } from '../filters/index.js';
import { TablePagination } from '../pagination/index.js';

const CandidatesTable = () => {
  const dispatch = useAppDispatch();
  const { candidates, loading, totalCount, currentPage, pageSize, filters } = useAppSelector(
    (state) => state.candidates
  );

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch, currentPage, pageSize, filters]);

  const filterConfig = useMemo(() => [
    {
      key: 'name',
      type: 'text',
      placeholder: 'Candidate Name',
    },
    {
      key: 'skills',
      type: 'select',
      placeholder: 'All Skills',
      options: [
        { value: 'React', label: 'React' },
        { value: 'TypeScript', label: 'TypeScript' },
        { value: 'Python', label: 'Python' },
        { value: 'Node.js', label: 'Node.js' },
        { value: 'Figma', label: 'Figma' },
        { value: 'UI/UX', label: 'UI/UX' },
      ],
    },
    {
      key: 'experience',
      type: 'select',
      placeholder: 'Experience Level',
      options: [
        { value: '1', label: '1+ years' },
        { value: '3', label: '3+ years' },
        { value: '5', label: '5+ years' },
        { value: '7', label: '7+ years' },
      ],
    },
    {
      key: 'status',
      type: 'select',
      placeholder: 'All Status',
      options: [
        { value: 'Interviewed', label: 'Interviewed' },
        { value: 'Screened', label: 'Screened' },
        { value: 'Shortlisted', label: 'Shortlisted' },
      ],
    },
  ], []);

  const columns = useMemo(() => [
    {
      id: 'select',
      size: 50,
      header: ({ table }) => <CheckboxHeader table={table} />,
      cell: ({ row }) => <CheckboxCell row={row} />,
    },
    {
      accessorKey: 'name',
      header: 'CANDIDATE',
      cell: ({ row }) => (
        <CandidateCell
          name={row.original.name}
          email={row.original.email}
          initials={row.original.initials}
          avatarColor={row.original.avatarColor}
        />
      ),
    },
    {
      accessorKey: 'skills',
      header: 'SKILLS',
      cell: ({ row }) => <SkillsCell skills={row.original.skills} />,
    },
    {
      accessorKey: 'experience',
      header: 'EXPERIENCE',
      cell: ({ row }) => `${row.original.experience} years`,
    },
    {
      accessorKey: 'status',
      header: 'STATUS',
      cell: ({ row }) => <StatusCell status={row.original.status} />,
    },
    {
      accessorKey: 'date',
      header: 'DATE',
    },
    {
      id: 'actions',
      header: 'ACTIONS',
      cell: () => <ActionCell label="View Analytics" />,
    },
  ], []);

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
    <div className="candidates-table-container">
      <TableFilters
        filters={filters}
        filterConfig={filterConfig}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <DataTable
        data={candidates}
        columns={columns}
        loading={loading}
        enableRowSelection={true}
      />
      <TablePagination
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
