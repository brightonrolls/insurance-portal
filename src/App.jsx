import React from "react";
import { Box, Grid } from "@mui/material";
import { useLocation } from "react-router";

import FamilyPic from "./assets/images/familyPic.png";

import DataTable from "./components/UI/Table/DataTable";

import "./index.css";

const App = ({ children }) => {
  const { pathname } = useLocation();

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
      {pathname === "/new-policy" ? (
        <></>
      ) : (
        <Box>
          <DataTable />
        </Box>
      )}
    </>
  );
};

export default App;
