const express = require('express');
const router = express.Router();
const foodRequestController = require('../controllers/foodRequestController');

// Route to get all donated food items
router.get('/', foodRequestController.getAllFoodRequestItems);

// Route to get a single donated food item by ID
router.get('/:id', foodRequestController.getFoodRequestItemById);

// Route to create a new donated food item
router.post('/', foodRequestController.createFoodRequestItem);

// Route to update a donated food item by ID
router.put('/:id', foodRequestController.updateFoodRequestItem);

// Route to delete a donated food item by ID
router.delete('/:id', foodRequestController.deleteFoodRequestItem);

module.exports = router;
