import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import NutritionTracking from './NutritionTracking'

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom>NutritionTracking</Typography>
          <NutritionTracking />
        </Paper>
       
      
      
      </Grid>
    </Grid>
  );
};

export default Dashboard;