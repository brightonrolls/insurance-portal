import React from "react";
import { Box, Grid } from "@mui/material";

const RightPart = ({ children }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box className="container-two">{children}</Box>
      </Grid>
    </>
  );
};

export default RightPart;
