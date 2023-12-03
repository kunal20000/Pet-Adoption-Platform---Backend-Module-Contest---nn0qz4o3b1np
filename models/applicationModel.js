const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // TODO: Define the 'applicantName' field with type String and required validation
  applicantName:{
    type: String,
    required: true,
  },
  // TODO: Define the 'applicantEmail' field with type String and required validation
  applicantEmail:{
    type: String,
    required: true,
  },
  // TODO: Define the 'pet' field with type mongoose.Schema.Types.ObjectId, ref to pet, and required validation
  pet:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true,
  },
  // TODO: Define the 'status' field with type String, enum ['pending', 'approved', 'rejected'], and default value
  status:{
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
