import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#007bff',
  },
  button: {
    color: '#fff',
  },
  container: {
    backgroundColor: '#fff', 
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  title: {
    color: '#ff7300',
  },
  welcomeText: {
    color: '#007bff', 
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Parcel Delivery App
          </Typography>
          <Button className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom className={classes.title}>
            Welcome to the Parcel Delivery App
          </Typography>
          <Typography variant="body1" gutterBottom className={classes.welcomeText}>
            Easily track and manage your parcel deliveries with our app.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
