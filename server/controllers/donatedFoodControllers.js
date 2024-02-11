const DonatedFood = require('../models/donatedFoodModel');

module.exports = {
    // Controller functions for donated food

    // Get all donated food items
    getAllDonatedFoodItems: async (req, res) => {
        try {
            const donatedFoodItems = await DonatedFood.find();
            res.json(donatedFoodItems);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a specific donated food item by ID
    getDonatedFoodItemById: async (req, res) => {
        try {
            const donatedFoodItem = await DonatedFood.findById(req.params.id);
            if (!donatedFoodItem) {
                return res.status(404).json({ message: 'Donated food item not found' });
            }
            res.json(donatedFoodItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new donated food item
    createDonatedFoodItem: async (req, res) => {
        const { orgName, address, phone_number, email, food_type, expiryDate, foodQuantity } = req.body;
        const donatedFoodItem = new DonatedFood({
            orgName,
            address,
            phone_number,
            email,
            food_type,
            expiryDate,
            foodQuantity
        });

        try {
            const newDonatedFoodItem = await donatedFoodItem.save();
            res.status(201).json(newDonatedFoodItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update a donated food item by ID
    updateDonatedFoodItem: async (req, res) => {
        try {
            const donatedFoodItem = await DonatedFood.findById(req.params.id);
            if (!donatedFoodItem) {
                return res.status(404).json({ message: 'Donated food item not found' });
            }
            Object.assign(donatedFoodItem, req.body);
            const updatedDonatedFoodItem = await donatedFoodItem.save();
            res.json(updatedDonatedFoodItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a donated food item by ID
    deleteDonatedFoodItem: async (req, res) => {
        try {
            const donatedFoodItem = await DonatedFood.findById(req.params.id);
            if (!donatedFoodItem) {
                return res.status(404).json({ message: 'Donated food item not found' });
            }
            await donatedFoodItem.remove();
            res.json({ message: 'Donated food item deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
