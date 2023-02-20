const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const OktaJwtVerifier = require('@okta/jwt-verifier'); 
const User = require('../models/User');

// const oktaJwtVerifier = new OktaJwtVerifier({
//    // issuer: 'https://{yourOktaDomain}/oauth2/default',
//    // clientId: '{yourClientId}',
//   });

router.post('/users/registration', async (req, res) => {
    let user={};
    console.log(req.body);
    try{
    user = new User({
        _id: new mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        contact : req.body.contact,
        age : req.body.age
    })
   const newuser  = await user.save()
        res.json({
            message :{
                "status" : 200,
                "message" : "successfully Registered"
            },
            User : newuser
        })
    }catch(error){
        console.log(error);
       if(error.code==11000){
        res.status(200).json({ 
            user : user,
            "message" : "Already Registered"
        })
       }else {
          res.status(500).json({error:error})
       }
       
    }
   
});

router.get('/users/login', async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        console.log(email)
        const user = await findByCredentials(email, password)
      //  const token = await generateAuthToken(user);
      //  console.log(token, "token");
       if(user){
           res.status(200).json({
               "message" : "You have succeefully logged In.",              
           })
       }else {
           res.send("Enter details are invalid");
       }
    }catch(error){
        res.status(200).json({ error:error})
    }
})

findByCredentials = async(email, password) => {
    const user = await User.findOne({email})
    if(!user){
        throw new Error('unable to login');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('unable to login');
    }
    return user;
};

module.exports = router;