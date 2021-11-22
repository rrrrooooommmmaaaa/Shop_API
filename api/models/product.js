'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    item: {
        type: String,
    },
    price: {
        type: Number,
    },
    src: {
        type: String,
    }
});

module.exports = mongoose.model('products', ProductSchema);