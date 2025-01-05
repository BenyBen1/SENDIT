import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    trackingId: "",
    itemName: "",
    deliveryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleAddOrder = () => {
    setOrders([...orders, newOrder]);
    setNewOrder({ trackingId: "", itemName: "", deliveryDate: "" });
  };

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
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Item Name"
              name="itemName"
              fullWidth
              value={newOrder.itemName}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Delivery Date"
              name="deliveryDate"
              fullWidth
              value={newOrder.deliveryDate}
              onChange={handleInputChange}
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
};

export default OrdersPage;
