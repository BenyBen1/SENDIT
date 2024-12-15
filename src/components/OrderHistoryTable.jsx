import React from "react";
import { Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const OrderHistoryTable = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <Typography>No orders yet!</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Order History
      </Typography>
      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Delivery Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.item}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.deliveryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderHistoryTable;
