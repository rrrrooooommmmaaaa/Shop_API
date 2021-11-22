const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    Product = require('./api/models/product'),
    Order= require('./api/models/order')
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shop');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
})

const routes = require('./api/routes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);