const Pet = require('../models/petModel');
const Application = require('../models/applicationModel');

// TODO: Implement logic to apply for pet adoption
exports.applyForAdoption = async (req, res) => {
  const { petId } = req.params;
  const { applicantName, applicantEmail } = req.body;

  try {
   // Find the pet by ID
    const pet = await Pet.findById(petId);

    // Check if the pet is available for adoption
    if (!pet || pet.adoptionStatus !== 'available') {
      return res.status(404).json({ message: 'Pet not available for adoption' });
    }

    // Create a new application instance
    const newApplication = new Application({
      applicantName,
      applicantEmail,
      pet: petId,
      status: 'pending', // Assuming you want to set the initial status as pending
    });

    // Save the new application to the database
    await newApplication.save();

    // Respond with the application submission message and details
    res.status(201).json({
      message: 'Application submitted successfully',
      application: newApplication,
    });
    
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// TODO: Implement logic to retrieve user applications
exports.getUserApplications = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch applications by user ID from the database
    const userApplications = await Application.find({ applicantEmail: userId });

    // Respond with the list of user applications
    res.status(200).json({ applications: userApplications });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
