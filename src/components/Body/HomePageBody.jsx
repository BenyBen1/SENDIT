import { Typography, Container, Box, Grid, Button } from '@mui/material';

const Body = () => {
  return (
    <Container sx={{ backgroundColor: '#f9f9f9', pt: 4, pb: 6 }}>
      {/* Welcome Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#ff7300' }}
        >
          Welcome to SENDIT Parcel Delivery
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}
        >
          SENDIT is your trusted partner for reliable and fast parcel deliveries. 
          Whether it's across town or across the globe, we ensure your packages 
          reach their destination safely and on time.
        </Typography>
      </Box>

      {/* Features Section */}
      <Box>
        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#007bff', mb: 2 }}
              >
                Real-Time Tracking
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                Monitor your shipments in real-time and stay updated on their progress.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#007bff', mb: 2 }}
              >
                Affordable Rates
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                Get competitive prices for all your delivery needs without compromising on quality.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                p: 3,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#007bff', mb: 2 }}
              >
                24/7 Support
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                Our team is here to assist you with any questions or issues anytime.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box textAlign="center" mt={6}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', mb: 2, color: '#ff7300' }}
        >
          Ready to Ship?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: '#555' }}>
          Sign up today and experience the most efficient way to manage your parcel deliveries.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#ff7300',
            color: '#fff',
            '&:hover': { backgroundColor: '#ff9100' },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Body;
