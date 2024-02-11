const User = require('../models/userModel');

module.exports = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a specific user by ID
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new user
    createUser: async (req, res) => {
        const { name, email, password, role, phone_number } = req.body;
        const newUser = new User({
            name,
            email,
            password,
            role,
            phone_number
        });

        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update a user by ID
    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            Object.assign(user, req.body);
            const updatedUser = await user.save();
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a user by ID
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            await user.remove();
            res.json({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Login user
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            if (user.password !== password) {
                return res.status(401).json({ message: 'Incorrect password' });
            }
            res.json({ message: 'Login successful', user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getCustomerByEmail: async (req, res) => {
        try {
            const email = req.params.email;
            const customer = await User.findOne({ email });

            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }

            res.status(200).json({ message: 'Customer found', customer });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
