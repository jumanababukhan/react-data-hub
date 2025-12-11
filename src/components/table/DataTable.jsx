import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Table, Input } from 'reactstrap';

const DataTable = ({
  data,
  columns,
  loading = false,
  enableRowSelection = true,
  onRowSelectionChange,
}) => {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection,
    onRowSelectionChange: (updater) => {
      const newSelection = typeof updater === 'function' ? updater(rowSelection) : updater;
      setRowSelection(newSelection);
      onRowSelectionChange?.(newSelection);
    },
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return (
      <div className="data-table-wrapper">
        <div className="table-responsive">
          <Table className="data-table">
            <thead>
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx}>{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, rowIdx) => (
                <tr key={rowIdx}>
                  {columns.map((col, colIdx) => (
                    <td key={colIdx}>
                      <div className="skeleton" style={{ 
                        width: col.id === 'select' ? '18px' : '100px',
                        height: col.id === 'select' ? '18px' : '20px'
                      }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="data-table-wrapper">
      <div className="table-responsive">
        <Table className="data-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} style={{ width: header.column.columnDef.size }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
