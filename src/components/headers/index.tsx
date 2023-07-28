import { Grid } from "@mui/material";
import { Header } from "./styled";

export default function Headers() {
  return (
    <Header>
      <Grid container>
        <Grid item xs={12} sx={{ display: "grid", justifyContent: "center" }}>
          <h3>Dashboard Market</h3>
        </Grid>
      </Grid>
    </Header>
  );
}
