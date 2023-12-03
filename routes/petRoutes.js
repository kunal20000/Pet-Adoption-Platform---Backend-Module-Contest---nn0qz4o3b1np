const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

//Post a new pet
router.post('/newpet', petController.createPet);

// Get all pets
router.get('/', petController.getAllPets);

// Get details of a specific pet
router.get('/:petId', petController.getPetById);

module.exports = router;
