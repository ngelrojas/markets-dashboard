import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function SearchBox() {
  return (
    <Grid item xs={12} sx={{ margin: 2 }}>
      <TextField
        sx={{ width: "100%" }}
        role="search-markets"
        id="search-markets"
        label="Search"
        variant="outlined"
      />
    </Grid>
  );
}
