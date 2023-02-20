const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Policy = require('../models/Policy');

router.post('/policies', async (req,res) => {
    let policy ={};
    try{
        const policy = new Policy({
            _id: new mongoose.Types.ObjectId(),
            policyname : req.body.policyname,
            policytype :  req.body.policytype,
            policyStartDate : req.body.policyStartDate,
            policyEndDate :  req.body.policyEndDate,
            coverageAmount : req.body.coverageAmount,
            user : req.body.userId
        });
        const newpolicy = await policy.save();
        res.json({
            message :{
                "status" : 200,
                "message" : "successfully Registered"
            },
            Policy : newpolicy
        })

        }catch(error){
           if(error.code==11000){
            res.status(200).json({ 
                policy : policy,
                "message" : "Already Registered"
            })
           }else {
            console.log(error)
              res.status(500).json({error:error})
           }
           
        }
});

router.get('/policies/policyId', async (req,res) => {
    try{
        const policy = Policy.findById(req.params.policyId);
        res.status(201).json(policy);
    }catch(error){
        res.status(500).json({error:error})
    }
})

module.exports = router;