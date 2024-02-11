const FoodRequest = require('../models/foodRequestModel');

module.exports = {
    // Controller functions for donated food

    // Get all donated food items
    getAllFoodRequestItems: async (req, res) => {
        try {
            const foodRequestItems = await FoodRequest.find();
            res.json(foodRequestItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a specific donated food item by ID
    getFoodRequestItemById: async (req, res) => {
        try {
            const foodRequestItem = await FoodRequest.findById(req.params.id);
            if (!foodRequestItem) {
                return res.status(404).json({ message: 'Donated food item not found' });
            }
            res.json(foodRequestItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new donated food item
    createFoodRequestItem: async (req, res) => {
        const { orgName, address, phone_number, email, food_type, expiryDate, foodQuantity } = req.body;
        const foodRequestItem = new FoodRequest({
            orgName,
            address,
            phone_number,
            email,
            food_type,
            expiryDate,
            foodQuantity
        });

        try {
            const newFoodRequestItem = await foodRequestItem.save();
            res.status(201).json(newFoodRequestItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update a donated food item by ID
    updateFoodRequestItem: async (req, res) => {
        try {
            const foodRequestItem = await FoodRequest.findById(req.params.id);
            if (!foodRequestItem) {
                return res.status(404).json({ message: 'Donated food item not found' });
            }
            Object.assign(foodRequestItem, req.body);
            const updatedFoodRequestItem = await foodRequestItem.save();
            res.json(updatedFoodRequestItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a donated food item by ID
    deleteFoodRequestItem: async (req, res) => {
        try {
            const foodRequestItem = await FoodRequest.findById(req.params.id);
            if (!foodRequestItem) {
                return res.status(404).json({ message: 'Donated food item not found' });
            }
            await foodRequestItem.remove();
            res.json({ message: 'Donated food item deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
