import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SignOut from "./Pages/Auth/SignOut.jsx"
function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Fitness Tracker
        </Typography>


        <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>

         {/*<Button component={Link} to="/nutrition" color="inherit">Nutrition Tracking</Button> */}

        <Button component={Link} to="/goalsetting" color="inherit">GoalSetting</Button>
        <Button component={Link} to="/nutrition" color="inherit">NutritionTracking</Button>
        <Button component={Link} to="/workoutplan" color="inherit">WorkoutPlan</Button>
        <Button component={Link} to="/details" color="inherit">Details</Button>
        <Button component={Link} to="/settings" color="inherit">Settings</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/contacts" color="inherit">Contacts</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
        <SignOut />
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;