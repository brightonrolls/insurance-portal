import React from "react";
import { Box, Tab, Grid, Tabs } from "@mui/material";

import SubTabs from "../components/Policy/subtabs/SubTabs";
import PolicyTabCard from "../components/Policy/PolicyTabCard";

import "../index.css";
import LifeInsurance from "../assets/images/life-family.png";
import NonLifeInsurance from "../assets/images/non-life.png";

const TabPanel = ({ value, index, title }) => {
  return (
    <div
      // style={{ margin: "0 20px" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 2, background: "#f1f6fa" }}>
          <SubTabs currentTabValue={value} />
        </Box>
      )}
    </div>
  );
};

const Policies = ({ bg, radius, shadow, margin, padding }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Box
          className="foreground-container"
          sx={{
            margin: { xs: "20px", lg: margin },
            padding: { xs: "20px", lg: padding },
            backgroundColor: bg,
            marginTop: "100px !important",
            borderRadius: radius,
            boxShadow: shadow,
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            sx={{ maxWidth: "100% !important" }}
          >
            <Box className="foreground-container">
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  // margin: "0 50px",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="basic tabs example"
                  sx={{
                    ".MuiTabs-indicator": {
                      height: "8px",
                      borderRadius: "5px",
                      background: "#00aecf",
                    },
                  }}
                >
                  <Tab
                    className="mb-20"
                    label={
                      <PolicyTabCard
                        title="Life Insurance"
                        image={LifeInsurance}
                      />
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    className="mb-20"
                    label={
                      <PolicyTabCard
                        title="Non-Life Insurance"
                        image={NonLifeInsurance}
                      />
                    }
                    {...a11yProps(0)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0} title="Life Insurance" />
              <TabPanel value={value} index={1} title="Non-Life Insurance" />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Policies;
