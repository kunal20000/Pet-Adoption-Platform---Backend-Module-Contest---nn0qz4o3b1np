const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // TODO: Define the 'applicantName' field with type String and required validation
  // TODO: Define the 'applicantEmail' field with type String and required validation
  // TODO: Define the 'pet' field with type mongoose.Schema.Types.ObjectId, ref to pet, and required validation
  // TODO: Define the 'status' field with type String, enum ['pending', 'approved', 'rejected'], and default value
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
