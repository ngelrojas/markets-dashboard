type Order = "asc" | "desc";

export interface Data {
  id?: string;
  name: string;
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  dividends: string;
  stock_splits: string;
}

export interface HeadCell {
  id?: string;
  name: string;
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  dividends: string;
  stock_splits: string;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}
