export const CheckboxHeader = ({ table }) => (
  <input
    type="checkbox"
    className="hira-checkbox"
    checked={table.getIsAllRowsSelected()}
    onChange={table.getToggleAllRowsSelectedHandler()}
  />
);

export const CheckboxCell = ({ row }) => (
  <input
    type="checkbox"
    className="hira-checkbox"
    checked={row.getIsSelected()}
    disabled={!row.getCanSelect()}
    onChange={row.getToggleSelectedHandler()}
  />
);
