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
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password || (isSignUp && !formData.name)) {
      alert("Please fill out all fields.");
      return;
    }

    if (isSignUp) {
      // Sign up logic
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.find((user) => user.email === formData.email);

      if (userExists) {
        alert("User already exists. Please log in.");
      } else {
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign up successful! Please log in.");
        setIsSignUp(false);
      }
    } else {
      // Login logic
      const { email, password } = formData;

      // Admin login
      if (email === "admin@gmail.com" && password === "admin123") {
        localStorage.setItem("loggedInUser", JSON.stringify({ email, isAdmin: true }));
        navigate("/admin"); // Navigate to Admin page
        return;
      }

      // Normal user login
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedInUser = users.find((user) => user.email === email && user.password === password);

      if (loggedInUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        navigate("/account"); // Navigate to Account page
      } else {
        alert("Invalid email or password!");
      }
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#f0f0f0",
          color: "#000",
          width: 32,
          height: 32,
        }}
      />
      <Button variant="contained" color="primary" size="small" onClick={handleClickOpen}>
        Login
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {isSignUp && (
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            sx={{ color: "#007bff", textTransform: "none" }}
          >
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
