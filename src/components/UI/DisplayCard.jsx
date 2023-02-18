import React from "react";
import {
  Box,
  Card,
  Chip,
  Divider,
  Typography,
  CardContent,
} from "@mui/material";

const DisplayCard = ({ title, type, label }) => {
  return (
    <Box>
      <Card variant="outlined" sx={{ borderRadius: "5px" }}>
        <CardContent>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            align="center"
            variant="body1"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Divider />
          <Box
            p={2}
            pb={0}
            gap={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              This month
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Chip
              label={label}
              color={type}
              variant="outlined"
              sx={{ borderRadius: "5px" }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DisplayCard;
