const Volunteer = require('../models/VolunteerModel'); // Importing the Volunteer model

module.exports = {
    // Controller function to create a new volunteer
    createVolunteer: async (req, res) => {
        try {
            const newVolunteer = await Volunteer.create(req.body);
            res.status(201).json(newVolunteer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to get all volunteers
    getAllVolunteers: async (req, res) => {
        try {
            const volunteers = await Volunteer.find();
            res.status(200).json(volunteers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to get a single volunteer by ID
    getVolunteerById: async (req, res) => {
        try {
            const volunteer = await Volunteer.findById(req.params.id);
            if (!volunteer) {
                return res.status(404).json({ message: 'Volunteer not found' });
            }
            res.status(200).json(volunteer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to update a volunteer by ID
    updateVolunteerById: async (req, res) => {
        try {
            const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!volunteer) {
                return res.status(404).json({ message: 'Volunteer not found' });
            }
            res.status(200).json(volunteer);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Controller function to delete a volunteer by ID
    deleteVolunteerById: async (req, res) => {
        try {
            const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
            if (!volunteer) {
                return res.status(404).json({ message: 'Volunteer not found' });
            }
            res.status(200).json({ message: 'Volunteer deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
