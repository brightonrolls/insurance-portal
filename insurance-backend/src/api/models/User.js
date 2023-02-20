const mongoose = require('mongoose');
const Policy = require('./Policy');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type : String, 
        required :true,
        minlength : 3
    },
    email : {
        type : String, 
        required : true,
        unique : true,
        dropDups : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    },
   contact : {
    type: Number,
    required: true,
    unique : true,
    minlength: 10
   },
   age : {
    type: Number,
    required: true,
   },
   policies : [{
    type :  mongoose.Schema.Types.ObjectId,
    ref : 'Policy'
   }]
})

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

module.exports = mongoose.model('User', userSchema)