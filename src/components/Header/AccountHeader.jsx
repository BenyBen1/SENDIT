import React from "react";
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ drawerWidth, toggleSidebar }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background: "#090E23",
        display: "flex",
        justifyContent: "space-between",
        padding: isMobile ? "0 8px" : "0 16px", // Adjust padding on mobile
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar} // Function to toggle sidebar visibility
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Account Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
