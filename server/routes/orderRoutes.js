const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/:email', orderController.createOrder);

// Route to get all orders
router.get('/', orderController.getAllOrders);

// Route to get a single order by ID
router.get('/:id', orderController.getOrderById);

// Route to update an order by ID
router.put('/:id', orderController.updateOrderById);

// Route to delete an order by ID
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;

