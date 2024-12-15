import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { LocalShipping, Calculate } from "@mui/icons-material";

export default function ShippingCalculator() {
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState("");
  const [method, setMethod] = useState("");
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    if (!weight || !distance || !method) {
      alert("Please fill all the fields");
      return;
    }

    // Basic cost logic
    const baseCost = method === "Air" ? 4 : method === "Water" ? 2 : 2; // Base cost per km
    const totalCost = baseCost * parseFloat(weight) * parseFloat(distance);
    setCost(totalCost.toFixed(2)); // Fixed to 2 decimal points
  };

  const resetFields = () => {
    setWeight("");
    setDistance("");
    setMethod("");
    setCost(null);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 500, mx: "auto", textAlign: "center", background: "white", color: '#ff7300' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#ff7300' }}>
        Shipping Calculator
      </Typography>

      {/* Input Fields */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Weight (kg)"
            variant="outlined"
            fullWidth
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            sx={{ input: { color: '#020208' }, label: { color: '#020208' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Distance (km)"
            variant="outlined"
            fullWidth
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            sx={{ input: { color: '#020208' }, label: { color: '#020208' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel sx={{ color: '#020208' }}>Shipping Method</InputLabel>
            <Select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              sx={{ color: '#020208', label: { color: '#020208' } }}
            >
              <MenuItem value="Air">Air</MenuItem>
              <MenuItem value="Water">Water</MenuItem>
              <MenuItem value="Road">Road</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Buttons */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={calculateCost}
            startIcon={<Calculate />}
            sx={{ color: 'black' }}
          >
            Calculate
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={resetFields}
            sx={{ color: 'black' }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>

      {/* Result Display */}
      {cost !== null && (
        <Typography variant="h5" sx={{ mt: 3, color: '#ff7300' }}>
          Estimated Cost: ${cost}
        </Typography>
      )}
    </Box>
  );
}
