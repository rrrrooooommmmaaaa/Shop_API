'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('products');

exports.getProducts = (_, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.send(err);
        }
        res.json(products);
    });
};
