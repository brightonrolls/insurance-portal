import React, { useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import SubTabPanel from "./SubTabPanel";
import TabWithoutCard from "./TabWithoutCard";
import {
  lifeInsuranceOptions,
  nonLifeInsuranceOptions,
} from "../../../Utils/Contants";

const SubTabs = ({ currentTabValue }) => {
  console.log(currentTabValue);
  const [value, setValue] = React.useState(0);
  let optionsArr = [...lifeInsuranceOptions];

  useEffect(() => {
    if (currentTabValue === 0) {
      optionsArr = [...lifeInsuranceOptions];
    } else if (currentTabValue === 1) {
      optionsArr = [...nonLifeInsuranceOptions];
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
                sx={{ gap: "10px" }}
                iconPosition="start"
                icon={<img src={icon} alt={name} />}
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
