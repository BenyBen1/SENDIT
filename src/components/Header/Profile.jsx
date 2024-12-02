import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export default function Profile() {
  const [open, setOpen] = useState(false); // State to manage the dialog's visibility
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup

  // Open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5, // Reduce spacing between avatar and button
      }}
    >
      {/* Avatar and Login Button */}
      <Avatar
        sx={{
          bgcolor: "#f0f0f0",
          color: "#000",
          width: 32,
          height: 32,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="small" // Make the button smaller to align better
        onClick={handleClickOpen}
      >
        Login
      </Button>

      {/* Login/Signup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Form Fields */}
          {isSignUp && (
            <TextField 
              label="Name" 
              variant="outlined" 
              fullWidth 
            />
          )}
          <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
            fullWidth 
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            sx={{ color: "#007bff", textTransform: "none" }}
          >
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
