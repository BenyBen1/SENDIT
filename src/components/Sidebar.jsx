import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { History, Support, LocalShipping, Inbox, ListAlt } from "@mui/icons-material";

const drawerWidth = 240;

export default function Sidebar({ setSelectedOption }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={!isMobile}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#090E23",
          color: "#ff7300",
        },
      }}
      anchor="left"
      onClose={() => {}}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem
            button
            onClick={() => setSelectedOption("Order History")}
            sx={{ padding: "10px 20px", backgroundColor: "#090E23" }}
          >
            <ListItemIcon sx={{ color: "#ff7300" }}>
              <History />
            </ListItemIcon>
            <ListItemText primary="Order History" sx={{ color: "#ff7300" }} />
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedOption("Customer Support")}
            sx={{ padding: "10px 20px", backgroundColor: "#090E23" }}
          >
            <ListItemIcon sx={{ color: "#ff7300" }}>
              <Support />
            </ListItemIcon>
            <ListItemText primary="Customer Support" sx={{ color: "#ff7300" }} />
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedOption("Shipping Calculations")}
            sx={{ padding: "10px 20px", backgroundColor: "#090E23" }}
          >
            <ListItemIcon sx={{ color: "#ff7300" }}>
              <LocalShipping />
            </ListItemIcon>
            <ListItemText primary="Shipping Calculations" sx={{ color: "#ff7300" }} />
          </ListItem>
          <ListItem
            button
            onClick={() => setSelectedOption("Orders")}
            sx={{ padding: "10px 20px", backgroundColor: "#090E23" }}
          >
            <ListItemIcon sx={{ color: "#ff7300" }}>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Orders" sx={{ color: "#ff7300" }} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              window.location.href = "/";
            }}
            sx={{ padding: "10px 20px", backgroundColor: "#090E23" }}
          >
            <ListItemIcon sx={{ color: "#ff7300" }}>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: "#ff7300" }} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
