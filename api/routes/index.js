'use strict';
module.exports = (app) => {
    const productsController = require('../controllers/productsController');
    const ordersController = require('../controllers/ordersConroller')

    app.route('/products')
        .get(productsController.getProducts)

    app.route('/cart')
        .get(ordersController.getOrders)
        .post(ordersController.createOrder)
};