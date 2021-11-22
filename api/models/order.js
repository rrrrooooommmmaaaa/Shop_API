'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    products: [
        {
            productId: String,
            pricePerOne: Number,
            amount: Number,
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    },
    totalPrice: Number
});



module.exports = mongoose.model('orders', OrderSchema);