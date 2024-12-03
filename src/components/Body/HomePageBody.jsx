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
        <Box sx={{ mt: 4 }}>
          <img
            src="/image/bodyimage2.png" // Replace with your image path
            alt="Parcel Delivery"
            style={{
              maxWidth: '30%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>
      </Box>

      {/* Stats and Image Section (New Section) */}
      <Box sx={{ mt: 6, mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Image */}
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="/image/ville-port-scaled.jpg" // Replace with your stats-related image
                alt="Stats"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Box>
          </Grid>

          {/* Right Side: Statistics */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: '#007bff' }}
              >
                Our Achievements
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
                Take a look at the numbers that make us the best in the industry.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 'bold', color: '#ff7300' }}
                    >
                      1M+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Successful Deliveries
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 'bold', color: '#ff7300' }}
                    >
                      500K+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Happy Users
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 'bold', color: '#ff7300' }}
                    >
                      99.9%
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      On-Time Delivery Rate
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 'bold', color: '#ff7300' }}
                    >
                      24/7
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Customer Support
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
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
              <Box>
                <img
                  src="/image/tracking.png"
                  alt="Tracking"
                  style={{
                    maxWidth: '80%',
                    height: '20%',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
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
              <Box>
                <img
                  src="/image/pricing.png"
                  alt="Pricing"
                  style={{
                    maxWidth: '80%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
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
              <Box>
                <img
                  src="/image/customerService2.png"
                  alt="Customer Service"
                  style={{
                    maxWidth: '80%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
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
