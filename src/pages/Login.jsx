import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { TextField, Button, Grid, Box } from '@material-ui/core';

//import { loginHandler } from "../redux/authSlice";
import "../index.css";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email) errors.email = 'Username is required';
    if (!password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn === true) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try{
        await dispatch(login(email,password));
      }catch(error){
        console.log(error);
      }
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
    <Box className="login-container">
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            value={password}
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Link to='/registration' variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </form>
    </Box>
    </Box>
  );
}

export default LoginForm;