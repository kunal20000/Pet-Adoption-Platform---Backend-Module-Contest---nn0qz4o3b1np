const express = require('express');
const router = express.Router();
const adoptionController = require('../controllers/adoptionController');

// Submit an adoption application
router.post('/apply/:petId', adoptionController.applyForAdoption);

// Get adoption applications for a user
router.get('/applications/:userId', adoptionController.getUserApplications);

module.exports = router;
