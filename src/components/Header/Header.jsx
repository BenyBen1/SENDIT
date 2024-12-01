import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#007bff' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Parcel Delivery App
        </Typography>
        <Button sx={{ color: '#fff' }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
