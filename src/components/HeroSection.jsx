import React from "react";
import { Box } from "@mui/material";

import FamilyPicture from "../assets/images/familyPic.png";
import BasicCard from "./UI/Card/BasicCard";

const HeroSection = () => {
  return (
    <Box pt={12}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ gap: "21px", margin: "20px" }}
      >
        <BasicCard title="Self" count={2} color="rgba(3, 159, 59, 0.55)" />
        <BasicCard title="Spouse" count={1} color="rgba(254, 220, 0, 0.55)" />
        <BasicCard title="Child" count={2} color="rgba(234, 104, 47, 0.55)" />
        <BasicCard title="All" count={5} color="rgba(233, 1, 46, 0.55)" />
        <Box>
          <img
            style={{
              width: "250px",
              height: "248px",
            }}
            src={FamilyPicture}
            alt="family"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
