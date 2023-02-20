import React from "react";
import { Grid } from "@mui/material";

import LeftPart from "./LandingPage/LeftPart";
import RightPart from "./LandingPage/RightPart";

import "../index.css";

const Landingpage = ({ children }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "0",
      }}
    >
      <LeftPart />
      <RightPart>{children}</RightPart>
    </Grid>
  );
};

export default Landingpage;
