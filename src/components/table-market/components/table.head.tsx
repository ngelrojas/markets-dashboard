import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import { EnhancedTableProps, Data, HeadCell } from "../services";

const headCells: readonly HeadCell[] = [
  {
    name: "name",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "date",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "open",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "high",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "low",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "close",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "volume",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "dividends",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
  {
    name: "stock_splits",
    date: "",
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
    dividends: "",
    stock_splits: "",
  },
];

export default function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      console.log(`property: ${property}`);
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.name ? "left" : "right"}
            padding={headCell.id ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.name as keyof Data)}
            >
              {headCell.name}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
