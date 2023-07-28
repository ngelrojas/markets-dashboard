import { Grid } from "@mui/material";
import SearchBox from "../search-box";
import TableMarket from "../table-market";

export default function ContainerMarket() {
  return (
    <Grid>
      <Grid item xs={12} sx={{ display: "grid", justifyContent: "center" }}>
        <SearchBox />
      </Grid>
      <Grid item xs={12} sx={{ display: "grid", justifyContent: "center" }}>
        <TableMarket />
      </Grid>
    </Grid>
  );
}
