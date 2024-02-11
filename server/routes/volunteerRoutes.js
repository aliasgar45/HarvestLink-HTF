const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController'); // Importing the volunteer controller


// Route to create a new volunteer
router.post('/', volunteerController.createVolunteer);

// Route to get all volunteers
router.get('/', volunteerController.getAllVolunteers);

// Route to get a single volunteer by ID
router.get('/:id', volunteerController.getVolunteerById);

// Route to update a volunteer by ID
router.put('/:id', volunteerController.updateVolunteerById);

// Route to delete a volunteer by ID
router.delete('/:id', volunteerController.deleteVolunteerById);

module.exports = router;
