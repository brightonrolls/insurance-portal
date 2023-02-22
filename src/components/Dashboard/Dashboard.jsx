import React from "react";
import { Box, Grid } from "@mui/material";

import HeroSection from "./HeroSection";
import "../../index.css";

const Dashboard = ({ marginTop }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={9}>
        <Box
          className="foreground-container"
          sx={{
            marginTop: { xs: "120px", lg: marginTop },
            marginBottom: "50px",
          }}
        >
          <HeroSection />
        </Box>
      </Grid>
    </>
  );
};

export default Dashboard;
