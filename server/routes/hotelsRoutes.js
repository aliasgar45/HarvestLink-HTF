const express = require('express');
const router = express.Router();
const hotelsController = require('../controllers/hotelsController');

// Route to create a new hotel
router.post('/', hotelsController.createHotel);

// Route to get all hotels
router.get('/', hotelsController.getAllHotels);

// Route to get a single hotel by ID
router.get('/:id', hotelsController.getHotelById);

// Route to update a hotel by ID
router.put('/:id', hotelsController.updateHotelById);

// Route to delete a hotel by ID
router.delete('/:id', hotelsController.deleteHotelById);

module.exports = router;
