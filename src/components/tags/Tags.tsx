import { Grid } from '@mui/material';

// /. IMPORTS

export const Tags = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        About
      </Grid>
      <Grid item xs={4}>
        Help center
      </Grid>
      <Grid item xs={4}>
        Advertising
      </Grid>
      <Grid item xs={4}>
        Accessibility
      </Grid>
      <Grid item xs={4}>
        Business services
      </Grid>
      <Grid item xs={12}>
        Privacy and Terms
      </Grid>
    </Grid>
  );
};
