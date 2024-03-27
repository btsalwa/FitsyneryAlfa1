import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Snackbar } from '@mui/material';
//import { useHistory } from 'react-router-dom';


const Goals = () => {
    const [laps, setLaps] = useState('');
    const [day, setDay] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [intensity, setIntensity] = useState("");
    const [sleep, setSleep] = useState('');
    const [weightLost, setWeightLost] = useState("");
    
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = () => {
      console.log('Goals submitted:', { laps, day, dateTime, intensity, sleep, weightLost });
        
        const goals = { laps, day, dateTime, intensity, sleep, weightLost };
        localStorage.setItem('fitnessGoals', JSON.stringify(goals));
        setSnackbarOpen(true);

      
    };

    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
      history.push('/');
  };

    return (
        <Container maxWidth="sm">
            <div style={{backgroundColor: '#ffc0cb', padding: '20px', borderRadius: '10px' }}>
                <Typography variant="h4" component="h1" style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#ff69b4' }}>
                    Set Your Fitness Goals
                </Typography>
                <TextField
                label="Laps to Take (today)"
                variant="outlined"
                value={laps}
                onChange={(e) => setLaps(e.target.value)}
                fullWidth
                margin="normal"
                type="number"
                />
                <TextField
                    label="Day"
                    value={day}
                    variant="outlined"
                    onChange={(e) => setDay(e.target.value)}
                    fullWidth
                    margin="normal"
                    type="text"
                />
                <TextField
                label="Date Time"
                variant="outlined"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                fullWidth
                margin="normal"
                type="datetime-local"
                InputLabelProps={{
                shrink: true,
                    }}
                />
                <TextField
                label="Intensity"
                variant="outlined"
                onChange={(e) => setIntensity(e.target.value)}
                value={intensity}
                fullWidth
                margin="normal"
                type="text"
                />
                <TextField
                    label="Amount of Sleep (hours)"
                    value={sleep}
                    onChange={(e) => setSleep(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                />
                <TextField
                label="Target Weight Loss(kg)"
                 variant="outlined"
                 value={weightLost}
                onChange={(e) => setWeightLost(e.target.value)}
                fullWidth
                margin="normal"
                type="number"
                />
                <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                style={{ marginTop: '20px', color: 'white', backgroundColor: '#ff69b4' }} >
               Set Goals
                </Button>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Goals saved successfully!"
                action={
                    <Button color="secondary" size="small" onClick={handleSnackbarClose}>
                        Close
                    </Button>
                }
            />

        </Container>
    );
};

export default Goals;
