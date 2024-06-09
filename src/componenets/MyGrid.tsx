import Grid from '@mui/material/Grid';

const MyGrid = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <div>Item 1</div>
    </Grid>
    <Grid item xs={12} sm={6}>
      <div>Item 2</div>
    </Grid>
  </Grid>
);

export default MyGrid;
