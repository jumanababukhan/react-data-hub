import { Input } from 'reactstrap';

export const CheckboxHeader = ({ table }) => (
  <Input
    type="checkbox"
    checked={table.getIsAllRowsSelected()}
    onChange={table.getToggleAllRowsSelectedHandler()}
    className="table-checkbox"
  />
);

export const CheckboxCell = ({ row }) => (
  <Input
    type="checkbox"
    checked={row.getIsSelected()}
    disabled={!row.getCanSelect()}
    onChange={row.getToggleSelectedHandler()}
    className="table-checkbox"
  />
);
