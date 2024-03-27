import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Headers = () => (
  <div style={styles.headerContainer}> {/* New div for the background image */}
    <div style={styles.overlay}></div> {/* Overlay to make text readable */}
    <div style={styles.content}>
      <div style={styles.icons}>
        <div style={styles.leftBtn}>
          <ion-icon name="list-outline" size="large" style={{ fontSize: 30, color: '#555' }}></ion-icon>
        </div>
        <div style={styles.rightBtns}>
          <ion-icon name="search-outline" size="large" style={{ fontSize: 30, color: '#555', marginRight: 15 }}></ion-icon>
          <ion-icon name="options-outline" size="large" style={{ fontSize: 30, color: '#555' }}></ion-icon>
        </div>
      </div>
      <div>
        <Typography variant="h4" style={styles.headerText}>Start Your</Typography>
        <Typography variant="h4" style={styles.headerText}>
          <span style={styles.pinkText}>Fitness</span> Journey
        </Typography>
        <div style={styles.badges}>
          <span style={styles.badge}>Easy Level</span>
          <span style={styles.badge}>Free</span>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  headerContainer: {
    position: 'relative',
    background: `url('src/assets/risen.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 300, 
    display: 'flex',
    alignItems: 'center',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', 
  },
  content: {
    zIndex: 1,
    width: '100%',
    padding: '0 20px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightBtns: {
    display: 'flex',
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: '#FFF', // Text color
  },
  pinkText: {
    color: '#FC427B',
  },
  badges: {
    display: 'flex',
    margin: '20px 0',
    paddingLeft: 15,
  },
  badge: {
    backgroundColor: '#eee',
    padding: '5px 10px',
    marginRight: 10,
    borderRadius: 20,
    fontSize: 12,
    color: '#333',
  },
};

export default Headers;