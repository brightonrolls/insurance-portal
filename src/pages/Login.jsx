import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

import "../index.css";

const Login = ({ handleLogin }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box className="login-container">
        <Typography fontSize="25px">Login</Typography>
        <Box mx={4} my={4}>
          <FormControl variant="outlined" fullWidth>
            <label htmlFor="user-name">Username*</label>
            <TextField type="text" id="user-name" variant="outlined" />
          </FormControl>
        </Box>
        <Box mx={4} mt={4} mb={3}>
          <FormControl variant="outlined" fullWidth>
            <label htmlFor="password">Password</label>
            <TextField
              type="password"
              fullWidth
              id="password"
              variant="outlined"
            />
          </FormControl>
        </Box>
        <Box
          mx={4}
          my={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="" className="login-btn">
            <Typography fontSize="14px">Forgot Password</Typography>
          </Link>
          <Link to="" className="login-btn">
            <Typography fontSize="14px">Sign In</Typography>
          </Link>
        </Box>
        <Box
          mx={4}
          mt={5}
          mb={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/dashboard">
            <Button
              variant="contained"
              className="custom-btn login-btn-2"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
