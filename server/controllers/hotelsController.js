const Hotel = require('../models/hotelsModel');

module.exports = {
    // Controller function to create a new hotel
    createHotel: async (req, res) => {
        try {
            const newHotel = await Hotel.create(req.body);
            res.status(201).json(newHotel);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to get all hotels
    getAllHotels: async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to get a single hotel by ID
    getHotelById: async (req, res) => {
        try {
            const hotel = await Hotel.findById(req.params.id);
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json(hotel);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to update a hotel by ID
    updateHotelById: async (req, res) => {
        try {
            const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json(hotel);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to delete a hotel by ID
    deleteHotelById: async (req, res) => {
        try {
            const hotel = await Hotel.findByIdAndDelete(req.params.id);
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json({ message: 'Hotel deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
