import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// import FamilyPicture from "../assets/images/familyPic.png";
import BasicCard from "./UI/Card/BasicCard";

import "../index.css";

const HeroSection = () => {
  const theme = useTheme();
  const extraSmallScreens = useMediaQuery(theme.breakpoints.up("xs"));
  const smallScreens = useMediaQuery(theme.breakpoints.up("sm"));
  const mediumScreens = useMediaQuery(theme.breakpoints.up("md"));

  const responsiveCards = () => {
    if (smallScreens === true && mediumScreens === false) {
      return {
        display: "flex",
        flexWrap: "wrap",
        gap: "21px",
        margin: "20px",
      };
    } else if (extraSmallScreens && smallScreens && mediumScreens) {
      return { display: "flex", gap: "21px", margin: "20px" };
    } else if (extraSmallScreens || (smallScreens && !mediumScreens)) {
      return { display: "block", gap: "21px", margin: "20px" };
    } else if (extraSmallScreens || (smallScreens && !mediumScreens)) {
      return { display: "flex", gap: "21px", margin: "20px" };
    }
  };

  return (
    <Box>
      <Box
        // display={mediumScreens ? (smallScreens ? "flex" : "block") : "block"}
        alignItems="center"
        justifyContent="space-evenly"
        sx={responsiveCards()}
      >
        <BasicCard title="Self" count={2} color="rgba(3, 159, 59, 0.55)" />
        <BasicCard title="Spouse" count={1} color="rgba(254, 220, 0, 0.55)" />
        <BasicCard title="Child" count={2} color="rgba(234, 104, 47, 0.55)" />
        <BasicCard title="All" count={5} color="rgba(233, 1, 46, 0.55)" />
        {/* <Box className="image-container">
          <img
            style={{
              width: "250px",
              height: "248px",
            }}
            src={FamilyPicture}
            alt="family"
          />
        </Box> */}
      </Box>
    </Box>
  );
};

export default HeroSection;
