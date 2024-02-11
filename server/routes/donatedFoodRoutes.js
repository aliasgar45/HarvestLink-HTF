const express = require('express');
const router = express.Router();
const donatedFoodController = require('../controllers/donatedFoodControllers');

// Route to get all donated food items
router.get('/', donatedFoodController.getAllDonatedFoodItems);

// Route to get a single donated food item by ID
router.get('/:id', donatedFoodController.getDonatedFoodItemById);

// Route to create a new donated food item
router.post('/', donatedFoodController.createDonatedFoodItem);

// Route to update a donated food item by ID
router.put('/:id', donatedFoodController.updateDonatedFoodItem);

// Route to delete a donated food item by ID
router.delete('/:id', donatedFoodController.deleteDonatedFoodItem);

module.exports = router;
