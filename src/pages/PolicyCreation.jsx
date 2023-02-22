import React from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import MuiPhoneNumber from "material-ui-phone-number";

import Saving from "../assets/images/saving.svg";
import Shield2 from "../assets/images/shield-5.svg";

const PolicyCreation = ({ bg, shadow, radius, margin, padding }) => {
  const { policyData } = useSelector((state) => state.policy);

  const { control } = useForm({
    defaultValues: { ...policyData },
  });
  return (
    <>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Box
          className="foreground-container"
          sx={{
            margin: { xs: "20px", lg: margin },
            padding: { xs: "20px", lg: padding },
            marginTop: "100px !important",
            backgroundColor: bg,
            borderRadius: radius,
            boxShadow: shadow,
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* INSURANCE GUIDE */}
            <Grid item xs={12} lg={12}>
              <Typography align="center" fontSize="22px" pb={2}>
                Insurance Guide
              </Typography>
            </Grid>
            {/* CARDS */}
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              pl={2}
            >
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                  className="feature-container"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <img src={Shield2} alt="Shield" className="svg-icons" />
                  <Typography fontSize="22px" align="center">
                    Insurance Guide
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </Grid>
            </Grid>
            {/* FORM */}
            <Grid item xs={12} lg={12} mt={4}>
              <Typography align="center" fontSize="22px" pb={2}>
                Term Calculator
              </Typography>
            </Grid>
            <Grid item xs={12} lg={12} mt={4}>
              <form>
                {/* FIRST ROW */}
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  pl={2}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl variant="outlined" fullWidth>
                      <label htmlFor="full-name">Full Name*</label>
                      <Controller
                        name="fullname"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            onChange={onChange}
                            value={value}
                            type="text"
                            id="full-name"
                            variant="outlined"
                            placeholder="John Doe"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl variant="outlined" fullWidth>
                      <label htmlFor="dob">Date of Birth*</label>
                      <Controller
                        name="dob"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            onChange={onChange}
                            value={value}
                            type="date"
                            required
                            fullWidth
                            id="dob"
                            variant="outlined"
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                {/* SECOND ROW */}
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  pl={2}
                  my={2}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl variant="outlined" fullWidth>
                      <label>Mobile*</label>
                      <Controller
                        name="mobileno"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <MuiPhoneNumber
                            onChange={onChange}
                            value={value}
                            required
                            variant="outlined"
                            defaultCountry={"in"}
                            autoFormat={true}
                            countryCodeEditable={true}
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl variant="outlined" fullWidth>
                      <label>Annual Income (In Lakhs)</label>
                      <Controller
                        name="income"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <ToggleButtonGroup
                            onChange={onChange}
                            value={value}
                            fullWidth
                            exclusive
                            aria-label="Platform"
                          >
                            <ToggleButton value="3">3</ToggleButton>
                            <ToggleButton value="3-5">3-5</ToggleButton>
                            <ToggleButton value="5-7">5-7</ToggleButton>
                            <ToggleButton value="7-10">7-10</ToggleButton>
                            <ToggleButton value="10">10</ToggleButton>
                          </ToggleButtonGroup>
                        )}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                {/* THIRD ROW */}
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  pl={2}
                  my={2}
                  mb={4}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl variant="outlined" fullWidth>
                      <label>Gender</label>
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <ToggleButtonGroup
                            fullWidth
                            exclusive
                            value={value}
                            onChange={onChange}
                            aria-label="Platform"
                          >
                            <ToggleButton value="male">Male</ToggleButton>
                            <ToggleButton value="female">Female</ToggleButton>
                            <ToggleButton value="transgender">
                              Transgender
                            </ToggleButton>
                          </ToggleButtonGroup>
                        )}
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FormControl variant="outlined" fullWidth>
                      <label>Tobacco/Nicotine</label>
                      <Controller
                        name="tobacco"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <ToggleButtonGroup
                            fullWidth
                            exclusive
                            value={value}
                            onChange={onChange}
                            aria-label="Platform"
                          >
                            <ToggleButton value="no">No</ToggleButton>
                            <ToggleButton value="yes">Yes</ToggleButton>
                          </ToggleButtonGroup>
                        )}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button
                    variant="contained"
                    className="calculate-btn custom-btn"
                    type="submit"
                  >
                    Calculate Now
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default PolicyCreation;