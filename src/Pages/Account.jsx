import React, { useEffect, useState } from "react";
import { CssBaseline, CircularProgress, Box, Toolbar, Typography, useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/AccountHeader";
import UserCard from "../components/UserCard";
import OrderHistoryTable from "../components/OrderHistoryTable";
import CustomerSupport from "../components/CustomerSupport";
import ShippingCalculator from "../components/CalculationPrice";

const drawerWidth = 240;

export default function Account() {
  const [user, setUser] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Order History");
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      alert("You need to log in first!");
      window.location.href = "/";
    }
  }, []);

  const renderContent = () => {
    switch (selectedOption) {
      case "Order History":
        return <OrderHistoryTable orders={user?.orders} />;
      case "Customer Support":
        return <CustomerSupport />;
      case "Shipping Calculations":
        return <ShippingCalculator />;
      default:
        return <Typography>Select an option from the menu.</Typography>;
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header drawerWidth={drawerWidth} toggleSidebar={toggleSidebar} />
      <Sidebar setSelectedOption={setSelectedOption} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          ml: isMobile && sidebarOpen ? 0 : `${drawerWidth}px`, // Adjust margin on mobile
          transition: "margin 0.3s",
        }}
      >
        <Toolbar />
        {user ? (
          <>
            <UserCard user={user} />
            {renderContent()}
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  );
}
