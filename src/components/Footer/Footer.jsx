import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are committed to providing excellent services with a focus on customer satisfaction.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            Email: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
          </Typography>
          <Typography variant="body2">
            Phone: <Link href="tel:+123456789" color="inherit">+1 (234) 567-89</Link>
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
