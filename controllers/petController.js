const Pet = require('../models/petModel');

exports.createPet = async (req, res) => {
  try {
     // Extract pet details from the request body
    const { name, species, age, description, adoptionStatus } = req.body;

    // Create a new pet instance
    const newPet = new Pet({
      name,
      species,
      age,
      description,
      adoptionStatus,
    });

    // Save the new pet to the database
    const savedPet = await newPet.save();

    // Respond with the newly created pet
    res.status(201).json(savedPet);
    
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
  
     const allPets = await Pet.find();

    // Respond with the list of pets
    res.status(200).json(allPets);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPetById = async (req, res) => {
  const { petId } = req.params;

  try {
    // TODO: Find the pet by ID in the database
     const pet = await Pet.findById(petId);

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    // Respond with the pet details
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
