import React from "react";
import { Box, Grid } from "@mui/material";

import HeroSection from "./HeroSection";
import "../index.css";

const Dashboard = ({ marginTop }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={9} lg={9}>
        <Box className="foreground-container" sx={{ marginTop }}>
          <HeroSection />
        </Box>
      </Grid>
    </>
  );
};

export default Dashboard;
