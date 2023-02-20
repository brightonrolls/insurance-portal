import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

import Shield2 from "../../assets/images/shield-5.svg";
import Saving from "../../assets/images/saving.svg";

import "../../index.css";

const Policy = () => {
  return (
    <>
      <Typography align="center" fontSize="22px">
        Insurance Quide
      </Typography>
      <Box sx={{ marginTop: "40px" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ gap: "44px" }}
        >
          <Box
            className="feature-container"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={Shield2} alt="Shield" className="svg-icons" />
            <Typography fontSize="22px" align="center">
              Insurance Quide
            </Typography>
          </Box>
          <Box
            className="feature-container"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <img src={Saving} alt="Saving" className="svg-icons" />
            <Typography fontSize="22px" align="center">
              Saving Plan
            </Typography>
          </Box>
        </Box>
        <Typography align="center" fontSize="22px" sx={{ margin: "40px 0" }}>
          Term Calculator
        </Typography>
        <form>
          {/* FIRST ROW */}
          <Box display="flex" alignItems="center" sx={{ gap: "64px" }} mb={4}>
            <FormControl variant="outlined" fullWidth>
              <label htmlFor="full-name">Full Name*</label>
              <TextField
                required
                type="text"
                id="full-name"
                variant="outlined"
                placeholder="John Doe"
              />
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <label htmlFor="dob">Date of Birth*</label>
              <TextField
                type="date"
                required
                fullWidth
                id="dob"
                variant="outlined"
              />
            </FormControl>
          </Box>
          {/* SECOND ROW */}
          <Box display="flex" alignItems="center" sx={{ gap: "64px" }} mb={4}>
            <FormControl variant="outlined" fullWidth>
              <label>Mobile*</label>
              <MuiPhoneNumber
                required
                variant="outlined"
                defaultCountry={"in"}
                onChange={() => {}}
                autoFormat={true}
                countryCodeEditable={true}
              />
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <label>Annual Income (In Lakhs)</label>
              <ToggleButtonGroup
                fullWidth
                exclusive
                onChange={() => {}}
                aria-label="Platform"
              >
                <ToggleButton value="<3">3</ToggleButton>
                <ToggleButton value="3-5">3-5</ToggleButton>
                <ToggleButton value="5-7">5-7</ToggleButton>
                <ToggleButton value="7-10">7-10</ToggleButton>
                <ToggleButton value="10>">10</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </Box>
          {/* THIRD ROW */}
          <Box display="flex" alignItems="center" sx={{ gap: "64px" }} mb={4}>
            <FormControl variant="outlined" fullWidth>
              <label>Gender</label>
              <ToggleButtonGroup
                fullWidth
                exclusive
                value="male"
                onChange={() => {}}
                aria-label="Platform"
              >
                <ToggleButton value="male">Male</ToggleButton>
                <ToggleButton value="female">Female</ToggleButton>
                <ToggleButton value="transgender">Transgender</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <label>Tobacco/Nicotine</label>
              <ToggleButtonGroup
                fullWidth
                exclusive
                value="no"
                onChange={() => {}}
                aria-label="Platform"
              >
                <ToggleButton value="no">No</ToggleButton>
                <ToggleButton value="yes">Yes</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              className="calculate-btn custom-btn"
              onSubmit={() => {}}
            >
              Calculate Now
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Policy;
