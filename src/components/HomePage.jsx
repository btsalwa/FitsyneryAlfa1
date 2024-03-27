import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('src/assets/samuel-girven-VJ2s0c20qCo-unsplash.jpg')`, // Replace '/path/to/background-image.jpg' with the actual path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '55vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Fitness Tracker
        </Typography>
        <Typography variant="h5" gutterBottom>
          Start your fitness journey today!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button component={Link} to="/login" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/register" variant="outlined" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;