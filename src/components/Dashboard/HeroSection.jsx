import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import BasicCard from "../UI/Card/BasicCard";

import "../../index.css";
import TabPanel from "./TabPanel";
import { getDashboardDetails } from "../../redux/dashboardSlice";

const HeroSection = () => {
  const dispatch = useDispatch();

  const { loading, data } = useSelector((state) => state.dashboard);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getDashboardDetails());
  }, [dispatch]);

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
      <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "0 50px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          sx={{
            ".MuiTabs-indicator": {
              height: "5px",
              borderRadius: "5px",
            },
          }}
        >
          <Tab
            label={
              <BasicCard
                title="Self"
                count={2}
                color="rgba(3, 159, 59, 0.55)"
              />
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <BasicCard
                title="Spouse"
                count={1}
                color="rgba(254, 220, 0, 0.55)"
              />
            }
            {...a11yProps(1)}
          ></Tab>
          <Tab
            label={
              <BasicCard
                title="Child"
                count={2}
                color="rgba(234, 104, 47, 0.55)"
              />
            }
            {...a11yProps(2)}
          ></Tab>
          <Tab
            label={
              <BasicCard title="All" count={5} color="rgba(233, 1, 46, 0.55)" />
            }
            {...a11yProps(3)}
          ></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} title="Self" />
      <TabPanel value={value} index={1} title="Spouse" />
      <TabPanel value={value} index={2} title="Child" />
      <TabPanel value={value} index={3} title="All" />
    </>
  );
};

export default HeroSection;
