import React from "react";
import { Box, Grid } from "@mui/material";

import DisplayCard from "../components/UI/DisplayCard";
import BasicCard from "../components/UI/BasicCard";

const Homepage = () => {
  return (
    <>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <DisplayCard type="info" title="Policies" label="$ 34.00" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <DisplayCard type="secondary" title="Claims" label="$ 4.00" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <DisplayCard type="error" title="Lorem Ipsum" label="$ 45.00" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <DisplayCard type="success" title="Payment" label="$ 100.00" />
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={1}>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <BasicCard title="Policies Preview" />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <BasicCard title="Claim Preview" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
