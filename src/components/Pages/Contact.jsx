import React from 'react';
import { Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Contacts = () => {
  return (
    <Container maxWidth="md"  >
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" gutterBottom>
              Feel free to contact us if you have any questions or inquiries. Our team is here to help you
              achieve your fitness goals.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <IconButton href="mailto:info@fitnesstracker.com">
                <Email /> info@fitnesstracker.com
              </IconButton>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <IconButton href="tel:+1234567890">
                <Phone /> +254 7123456789
              </IconButton>
            </Typography>
            <Typography variant="body1">
              <IconButton href="https://goo.gl/maps/your-location">
                <LocationOn /> Nairobi City, Kenya
              </IconButton>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Business Hours
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our team is available to assist you during the following hours:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Monday-Friday: 8:00 AM - 8:00 PM
            </Typography>
            <Typography variant="body1" gutterBottom>
              Saturday: 9:00 AM - 6:00 PM
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sunday: Closed
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;