'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('orders');

exports.getOrders = (_, res) => {
    Order.find({}, (err, orders) => {
        if (err) {
            res.send(err);
        }
        res.json(orders);
    });
};

exports.createOrder = (req, res) => {
    const newOrder = new Order(req.body);
    newOrder.save((err, order) => {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
};
