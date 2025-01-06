import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";
import Profile from "../LoginLogic.jsx";

const Header = () => {
  const logo = "/image/SendIt.png"; // Ensure the path is correct

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#090E23",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        {/* Navbar Brand */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            src={logo}
            alt="Sendit Logo"
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontWeight: "bold",
              color: "#f9f9f9",
              textDecoration: "none",
              "&:hover": { color: "#ff7300" },
            }}
          >
            SENDIT Delivery App
          </Typography>
        </Box>

        {/* Profile Component */}
        <Profile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
