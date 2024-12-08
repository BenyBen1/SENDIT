import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Avatar, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; // For hamburger icon
import Profile from "../Profile.jsx";

const Header = () => {
  const logo = "/image/SendIt.png"; // Ensure the path is correct
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer visibility

  // Toggle the Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content (navbar items)
  const drawerContent = (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["About", "Track Package", "Services"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

        {/* Hamburger Menu for small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }} // Show on small screens
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation Items for larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            gap: 1.5,
          }}
        >
          <Button
            color="inherit"
            sx={{
              color: "#fff",
              textTransform: "none",
              "&:hover": { color: "#ff7300" },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#fff",
              textTransform: "none",
              "&:hover": { color: "#ff7300" },
            }}
          >
            Track Package
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#fff",
              textTransform: "none",
              "&:hover": { color: "#ff7300" },
            }}
          >
            Services
          </Button>
        </Box>

        {/* Profile Component */}
        <Profile />
      </Toolbar>

      {/* Drawer for Hamburger Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;
