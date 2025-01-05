import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Switch,
  Grid,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
  const navigate = useNavigate();

  // Customer data state
  const [customers, setCustomers] = useState([]);
  const [globalStatus, setGlobalStatus] = useState("Active");
  const [expanded, setExpanded] = useState(null);

  // Fetch orders and transform into customers
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders"); // Replace with your orders endpoint
        const orders = response.data;

        // Group orders by customerId
        const customerMap = orders.reduce((acc, order) => {
          const { customerId, customerName, customerEmail } = order;
          if (!acc[customerId]) {
            acc[customerId] = {
              id: customerId,
              name: customerName,
              email: customerEmail,
              status: "Active", // Default status (can be changed dynamically)
              orders: [],
            };
          }
          acc[customerId].orders.push(order);
          return acc;
        }, {});

        // Convert the map into an array of customers
        setCustomers(Object.values(customerMap));
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // Handle global status toggle
  const handleGlobalStatusToggle = (status) => {
    setGlobalStatus(status);
    setCustomers(customers.map((customer) => ({ ...customer, status })));
  };

  // Handle individual customer status toggle
  const handleCustomerStatusToggle = (id) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === id
          ? { ...customer, status: customer.status === "Active" ? "Inactive" : "Active" }
          : customer
      )
    );
  };

  // Expand customer details
  const handleExpandClick = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Handle order status change
  const handleOrderStatusChange = (customerId, trackingId, newStatus) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === customerId
          ? {
              ...customer,
              orders: customer.orders.map((order) =>
                order.trackingId === trackingId
                  ? { ...order, status: newStatus }
                  : order
              ),
            }
          : customer
      )
    );
  };

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "navy", mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Global Controls */}
      <Box sx={{ mb: 4, px: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Manage Customers
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography sx={{ mr: 2 }}>Set All Customers:</Typography>
          <Button
            variant={globalStatus === "Active" ? "contained" : "outlined"}
            color="success"
            sx={{ mr: 2 }}
            onClick={() => handleGlobalStatusToggle("Active")}
          >
            Active
          </Button>
          <Button
            variant={globalStatus === "Inactive" ? "contained" : "outlined"}
            color="error"
            onClick={() => handleGlobalStatusToggle("Inactive")}
          >
            Inactive
          </Button>
        </Box>
      </Box>

      {/* Customer Cards */}
      <Grid container spacing={3} sx={{ px: 2 }}>
        {customers.map((customer) => (
          <Grid item xs={12} sm={6} md={4} key={customer.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{customer.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {customer.email}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Status:{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: customer.status === "Active" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {customer.status}
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions>
                <Switch
                  checked={customer.status === "Active"}
                  onChange={() => handleCustomerStatusToggle(customer.id)}
                  color="primary"
                />
                <Button size="small" color="primary" onClick={() => handleExpandClick(customer.id)}>
                  {expanded === customer.id ? "Hide Details" : "Show Details"}
                </Button>
              </CardActions>
              <Collapse in={expanded === customer.id}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Order History
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Tracking ID</TableCell>
                          <TableCell>Item</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customer.orders.map((order) => (
                          <TableRow key={order.trackingId}>
                            <TableCell>{order.trackingId}</TableCell>
                            <TableCell>{order.itemName}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>
                              <Select
                                value={order.status}
                                onChange={(e) =>
                                  handleOrderStatusChange(
                                    customer.id,
                                    order.trackingId,
                                    e.target.value
                                  )
                                }
                                size="small"
                              >
                                <MenuItem value="In Transit">In Transit</MenuItem>
                                <MenuItem value="Delivered">Delivered</MenuItem>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminPage;
