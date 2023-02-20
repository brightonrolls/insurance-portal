import React from "react";
import { Box, Grid } from "@mui/material";

import FamilyPic from "./assets/images/familyPic.png";

import "./index.css";

const App = ({ children }) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" sx={{ position: "relative" }}>
        {/* BACKGROUND CONTAINER */}
        <Box className="background-container"></Box>
        {/* FOREGROUND CONTAINER */}
        <Grid container>
          {children}
          <Grid item xs={12} sm={6} md={3} lg={3} className="image-container">
            {/* IMAGE CONTAINER */}
            <img
              src={FamilyPic}
              alt="family"
              className="family-img"
              style={{ marginTop: "20px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
