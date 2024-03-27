import React, { useState, useEffect } from 'react';
//import { makeStyles } from "@mui/material/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Snackbar
} from "@mui/material";

//const useStyles = makeStyles((theme) => ({
  //container: {
   // paddingTop: theme.spacing(4),
   // paddingBottom: theme.spacing(4),
   // height: '120vh',
   // display: 'flex',
   // flexDirection: 'column',
   // justifyContent: 'center',
   // alignItems: 'center'
  //},
  //formControl: {
    //margin: theme.spacing(2),
   // minWidth: 120,
 // },
//}));

const Settings = () => {
  //const classes = useStyles();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    weight: '',
    height: "",
  });
  const [unitSystem, setUnitSystem] = useState('metric');
  const [notification, setNotification] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('fitnessSettings'));
    if (savedSettings) {
      setProfile(savedSettings.profile);
      setUnitSystem(savedSettings.unitSystem);
      setNotification(savedSettings.notification);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleUnitSystemChange = (e) => {
    setUnitSystem(e.target.value);
  };

  const handleNotificationChange = () => {
    setNotification(!notification);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("fitnessSettings", JSON.stringify({
      profile,
      unitSystem,
      notification
    }));
    setSnackbarOpen(true);
    console.log('Saved Settings:',{profile, unitSystem, notification} );
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
   <Container maxWidth="sm" >
  
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <TextField
        name="name"
        type="name"
        label="Name"
        value={profile.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="age"
        label="Age"
        type="age"
        value={profile.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" >
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={profile.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      <TextField
        name="weight"
        label="Weight"
        type="weight"
        value={profile.weight}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="height"
        label="Height"
        type="height"
        value={profile.height}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" >
        <FormLabel component="legend">Unit System</FormLabel>
        <RadioGroup
          aria-label="unitSystem"
          name="unitSystem"
          value={unitSystem}
          onChange={handleUnitSystemChange}
        >
          <FormControlLabel value="metric" control={<Radio />} label="Metric" />
          <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
        </RadioGroup>
      </FormControl>
      <FormControlLabel
        control={<Switch checked={notification} onChange={handleNotificationChange} />}
        label="Enable Notifications"
      />
      <Button variant="contained" color="primary" onClick={handleSaveSettings}>
        Save Settings
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Settings saved successfully"
      />
    </Container>
  );
};

export default Settings;
