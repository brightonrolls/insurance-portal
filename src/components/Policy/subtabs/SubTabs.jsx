import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import SubTabPanel from "./SubTabPanel";
import TabWithoutCard from "./TabWithoutCard";
import {
  lifeInsuranceOptions,
  nonLifeInsuranceOptions,
} from "../../../Utils/Contants";

const SubTabs = ({ currentTabValue }) => {
  const [value, setValue] = React.useState(0);
  const [optionsArr, setOptionsArr] = useState([...lifeInsuranceOptions]);

  useEffect(() => {
    if (currentTabValue === 0) {
      setOptionsArr([...lifeInsuranceOptions]);
    } else if (currentTabValue === 1) {
      setOptionsArr([...nonLifeInsuranceOptions]);
    }
  }, [currentTabValue]);

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
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          sx={{
            ".MuiTabs-indicator": {
              height: "4px",
              borderRadius: "10px",
              background: "#ff555f",
            },
          }}
        >
          {optionsArr?.map(({ id, name, icon }, i) => {
            return (
              <Tab
                key={id}
                sx={{
                  gap: "10px",
                  margin: currentTabValue === 1 ? "0 5px" : "0",
                }}
                iconPosition="start"
                icon={<img src={icon} alt={name} style={{ margin: "0" }} />}
                label={<TabWithoutCard title={name} />}
                {...a11yProps(i)}
              />
            );
          })}
        </Tabs>
      </Box>
      <SubTabPanel />
    </>
  );
};

export default SubTabs;
