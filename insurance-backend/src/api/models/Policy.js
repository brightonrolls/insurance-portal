const mongoose = require('mongoose');
const User = require('./User')
const validator = require('validator');

const policySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type : String,
    policyname: {
        type : String, 
        required :true,
        minlength : 6
    },
   policytype : {
    type : String,
    required : true
   },
   policyStartDate : {
    type : Date,
    required : true
   },
   policyEndDate : {
    type : Date,
    required : true
   },
   coverageAmount : {
    type : Number,
    required : true
   },
   user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
   }
})


module.exports = mongoose.model('Policy', policySchema)