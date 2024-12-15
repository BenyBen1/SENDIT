import React from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ user }) => (
  <Card sx={{ mb: 4,}}>
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, }}>
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 56,
            height: 56,
            fontSize: "1.5rem",
          }}
        >
          {user.name.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default UserCard;
