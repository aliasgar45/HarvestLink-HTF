const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/:id', userController.getUserById);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update a user by ID
router.put('/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

// Route to login a user
router.post('/login', userController.loginUser);

router.get('/email/:email', userController.getCustomerByEmail);

module.exports = router;
