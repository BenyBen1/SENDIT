import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  CircularProgress,
  Box,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/AccountHeader";
import UserCard from "../components/UserCard";
import OrderHistoryTable from "../components/OrderHistoryTable";
import CustomerSupport from "../components/CustomerSupport";
import ShippingCalculator from "../components/CalculationPrice";
import { fetchOrders, addOrder } from "../components/api";

const drawerWidth = 240;

export default function Account() {
  const [user, setUser] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Order History");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ trackingId: "", itemName: "", deliveryDate: "" });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch initial user and orders data
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
      initializeOrders();
    } else {
      alert("You need to log in first!");
      window.location.href = "/";
    }
  }, []);

  // Fetch orders from JSON server using the API
  const initializeOrders = async () => {
    try {
      const response = await fetchOrders();
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  // Add a new order using the API
  const handleAddOrder = async () => {
    if (!newOrder.trackingId || !newOrder.itemName || !newOrder.deliveryDate) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await addOrder(newOrder);
      setOrders([...orders, response.data]);
      setNewOrder({ trackingId: "", itemName: "", deliveryDate: "" });
    } catch (error) {
      console.error("Failed to add order:", error);
      alert("Failed to add order. Please try again.");
    }
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Order History":
        return <OrderHistoryTable orders={orders} />;
      case "Customer Support":
        return <CustomerSupport />;
      case "Shipping Calculations":
        return <ShippingCalculator />;
      case "Orders":
        return (
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ mb: 4, color: "#ff7300" }}>
              Orders
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ padding: "20px" }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Add New Order
                  </Typography>
                  <TextField
                    label="Tracking ID"
                    name="trackingId"
                    fullWidth
                    value={newOrder.trackingId}
                    onChange={(e) => setNewOrder({ ...newOrder, trackingId: e.target.value })}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Item Name"
                    name="itemName"
                    fullWidth
                    value={newOrder.itemName}
                    onChange={(e) => setNewOrder({ ...newOrder, itemName: e.target.value })}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Delivery Date"
                    name="deliveryDate"
                    fullWidth
                    value={newOrder.deliveryDate}
                    onChange={(e) => setNewOrder({ ...newOrder, deliveryDate: e.target.value })}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" color="primary" onClick={handleAddOrder}>
                    Add Order
                  </Button>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Order List
                </Typography>
                <TableContainer component={Card}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Tracking ID</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell>Delivery Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orders.map((order, index) => (
                        <TableRow key={index}>
                          <TableCell>{order.trackingId}</TableCell>
                          <TableCell>{order.itemName}</TableCell>
                          <TableCell>{order.deliveryDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        );
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
          ml: isMobile && sidebarOpen ? 0 : `${drawerWidth}px`,
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
