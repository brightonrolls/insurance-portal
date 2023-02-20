import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Bed from "../../assets/images/bed.svg";
import Clock from "../../assets/images/clock.svg";
import Setting from "../../assets/images/setting-2.svg";
import Shield from "../../assets/images/shield-cross.svg";
import FamilyPicture from "../../assets/images/familyPic.png";

const LeftPart = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{
          zIndex: "-1",
          backgroundColor: "#f1f6fa",
        }}
      >
        <Box className="container-one">
          <Box>
            <Typography className="title">
              Secure Family with 1 Cr Cover
            </Typography>
            <Typography className="sub-title" align="right" mr={10}>
              with minimal premium
            </Typography>
          </Box>
          <Box
            mt={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={FamilyPicture}
              alt="family"
              height="300px"
              width="300px"
            />
          </Box>
          <Box
            mt={4}
            sx={{ gap: "50px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              <img src={Shield} alt="family" className="svg-icons" />
              <Typography fontSize="12px" width="80px" align="center" mt={3}>
                99.3% Claims Settlement
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img src={Setting} alt="family" className="svg-icons" />
              <Typography fontSize="12px" width="80px" align="center" mt={3}>
                Zero Payment Discharge
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img src={Bed} alt="family" className="svg-icons" />
              <Typography fontSize="12px" width="80px" align="center" mt={3}>
                Critical Illness
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img src={Clock} alt="family" className="svg-icons" />
              <Typography fontSize="12px" width="80px" align="center" mt={3}>
                Quick response
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default LeftPart;
