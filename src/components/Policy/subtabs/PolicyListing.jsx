import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars";

import "../../../index.css";

const dummyData = [
  {
    id: 1,
    name: "Policy 1",
    lifeCover: "1 Cr",
    maxLimit: "65 Yrs Max Limit 99 Yrs",
    claimed: "97.9%",
    premiumMonthly: "Rs. 9960",
  },
  {
    id: 2,
    name: "Policy 2",
    lifeCover: "1 Cr",
    maxLimit: "70 Yrs Max Limit 99 Yrs",
    claimed: "97.9%",
    premiumMonthly: "Rs. 8888",
  },
];

const PolicyListing = () => {
  return (
    <Box
      className="recommended-policies-container"
      sx={{ height: { xs: 400, lg: "" } }}
    >
      <Box className="recommended-policies-container-header">
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          p={1}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12} lg={2} p={1} pb={0}>
            <Typography align="left">Policy Name</Typography>
          </Grid>
          <Grid item xs={12} lg={2} p={1} pb={0}>
            <Typography align="center">Life Cover</Typography>
          </Grid>
          <Grid item xs={12} lg={2} p={1} pb={0}>
            <Typography align="center">Life Cover</Typography>
          </Grid>
          <Grid item xs={12} lg={2} p={1} pb={0}>
            <Typography align="center">Claimed</Typography>
          </Grid>
          <Grid item xs={12} lg={2} p={1} pb={0}>
            <Typography align="center">Premium Monthly</Typography>
          </Grid>
        </Grid>
      </Box>
      <Scrollbars style={{ height: 200 }}>
        {dummyData.map(
          ({ id, name, lifeCover, maxLimit, claimed, premiumMonthly }) => {
            return (
              <Box key={id} className="recommended-policies-container-body">
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  p={1}
                  alignItems="center"
                  justifyContent="space-evenly"
                  sx={{ padding: "35px 0" }}
                >
                  <Grid item xs={12} lg={2} p={1} pb={0}>
                    <Typography align="left" ml={{ xs: 1 }}>
                      {name}
                    </Typography>
                  </Grid>
                  <Divider
                    flexItem
                    orientation="vertical"
                    className="vertical-line"
                  />
                  <Grid item xs={12} lg={2} p={1} pb={0}>
                    <Typography align="center">{lifeCover}</Typography>
                  </Grid>
                  <Divider
                    flexItem
                    orientation="vertical"
                    className="vertical-line"
                  />
                  <Grid item xs={12} lg={2} p={1} pb={0}>
                    <Typography align="center">{maxLimit}</Typography>
                  </Grid>
                  <Divider
                    flexItem
                    orientation="vertical"
                    className="vertical-line"
                  />
                  <Grid item xs={12} lg={2} p={1} pb={0}>
                    <Typography align="center">{claimed}</Typography>
                  </Grid>
                  <Divider
                    flexItem
                    orientation="vertical"
                    className="vertical-line"
                  />
                  <Grid item xs={12} lg={2} p={1} pb={0}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography align="center">{premiumMonthly}</Typography>
                      <Button variant="contained" className="buy-now-btn">
                        Buy
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          }
        )}
      </Scrollbars>
    </Box>
  );
};

export default PolicyListing;
