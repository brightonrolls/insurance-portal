import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Modal, Box, Typography } from '@material-ui/core';
import {  Link, useNavigate } from "react-router-dom";
import { register } from '../actions/registrationAction';

const  RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanantAddress, setPermanentAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(foramtDate());
  const [errors, setErrors] = useState({});
  const [success, setIsSuccess] = useState(false);
  const history = useNavigate();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  function foramtDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = String(date.getFullYear());
    return yyyy + "-" + mm + "-" + dd;
  }
  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!number) errors.number = 'Phone number is required';
    if (!age) errors.age = 'Age is required';
    if (!bloodGroup) errors.bloodGroup = 'Blood group is required';
    if (!currentAddress) errors.currentAddress = 'Current address is required';
    if (!permanantAddress) errors.permanantAddress = 'Permanent address is required';
    if (!dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;
    try{
        if(validate()){
            response = await register({name,email,password,number,age,bloodGroup,currentAddress,permanantAddress,dateOfBirth});
            if(response.User){
                setIsSuccess(true);
            }else{
                setIsSuccess(false);
            }
        }
    }catch(error){
        console.log(error)
    }
  };
  useEffect(() =>{
    if(success){
        history("/login")
    }
  })
  const handleClose = () => {
    setIsSuccess(false);
  }
  return( <>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            value={name}
            variant="outlined" 
            onChange={(event) => setName(event.target.value)}
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            type="email"
            variant="outlined" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            type="password"
            variant="outlined" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            type="tel"
            value={number}
            variant="outlined" 
            onChange={(event) => setNumber(event.target.value)}
            fullWidth
            error={!!errors.number}
            helperText={errors.number}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            type="number"
            value={age}
            variant="outlined" 
            onChange={(event) => setAge(event.target.value)}
            fullWidth
            error={!!errors.age}
            helperText={errors.age}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Blood Group"
            value={bloodGroup}
            variant="outlined" 
            onChange={(event) => setBloodGroup(event.target.value)}
            fullWidth
            error={!!errors.bloodGroup}
            helperText={errors.bloodGroup}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Current Address"
            multiline
            variant="outlined" 
            value={currentAddress}
            onChange={(event) => setCurrentAddress(event.target.value)}
            fullWidth
            error={!!errors.currentAddress}
            helperText={errors.currentAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Permanent Address"
            multiline
            value={permanantAddress}
            variant="outlined" 
            onChange={(event) => setPermanentAddress(event.target.value)}
            fullWidth
            error={!!errors.permanantAddress}
            helperText={errors.permanantAddress}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            label="Date of Birth"
            type="date"
            variant="outlined" 
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
            fullWidth
            error={!!errors.dateOfBirth}
            helperText={errors.dateOfBirth}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Link to="/" className="login-btn">
          <Button type="submit" variant="contained" color="error" fullWidth>
            Cancel
          </Button>
        </Link>
        </Grid>
      </Grid>
    </form>
    {
        success && <Modal 
        open={success}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             Success fully Registred please Login
          </Typography>
        </Box>
        </Modal>
    }
    </>
  );
}

export default RegistrationForm;
