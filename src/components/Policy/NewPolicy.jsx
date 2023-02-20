import React from "react";
import { Box, Grid } from "@mui/material";

import Policy from "./Policy";
import "../../index.css";

const NewPolicy = ({ bg, shadow, radius, margin, padding }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Box
          className="foreground-container"
          sx={{
            margin: { xs: "20px", lg: margin },
            padding: { xs: "20px", lg: padding },
            marginTop: "100px !important",
            backgroundColor: bg,
            borderRadius: radius,
            boxShadow: shadow,
          }}
        >
          <Policy />
        </Box>
      </Grid>
    </>
  );
};

export default NewPolicy;
