const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { db } = require('../models/User');


router.get('/products', async(req,res) =>{
  const collection = db.collection('products');
   collection.find().toArray()
    .then(products =>{
        res.status(200).json(products);
    })
    .catch(error => {
        res.status(200).json({ error:error})
    })
});

module.exports = router;