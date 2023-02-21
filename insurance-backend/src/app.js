const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products');
const policyRoutes = require('./api/routes/policies');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.rd0gj4x.mongodb.net/${process.env.MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true } );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Successful!");
});

 


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if(req.method ==='OPTIONS'){
    res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, PATCH, DELETE')
    return res.status(200).json({});
}
next();
});

app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/',policyRoutes);
app.use((req, res, next)=>{
    const error = new Error('Not found anything');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })
})

module.exports = app;
