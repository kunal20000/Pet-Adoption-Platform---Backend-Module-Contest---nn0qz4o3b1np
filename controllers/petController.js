const Pet = require('../models/petModel');

exports.createPet = async (req, res) => {
  try {
    // TODO: Extract pet details from the request body
    // TODO: Create a new pet instance
    // TODO: Save the new pet to the database
    // TODO: Respond with the newly created pet
  } catch (error) {
    // Handle errors, such as validation errors or database issues
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

exports.getAllPets = async (req, res) => {
  try {
    // TODO: Fetch all pets from the database
    // TODO: Respond with the list of pets
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPetById = async (req, res) => {
  const { petId } = req.params;

  try {
    // TODO: Find the pet by ID in the database
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
