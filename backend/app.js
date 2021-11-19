const express = require('express');
const app = express();
const numberRoutes = require('./api/routes/number');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Issues with CORS Solved!
app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({
            'message': "Hello, the server is working"
        });
    }
    next()
});
//API Routes (/number methods: GET, POST)
app.use('/number',numberRoutes);

//Error handling
app.use((req,res,next) => {
    const error = new Error('404 - Not Found.');
    error.status = 404;
    next(error)
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        error : true
    })
});



module.exports = app;