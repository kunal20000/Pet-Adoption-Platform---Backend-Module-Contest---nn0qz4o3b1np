const mongoose = require('mongoose');

// TODO: Define the pet schema with appropriate data types and validation
const petSchema = new mongoose.Schema({
  // TODO: Define the 'name' field with type String and required validation
  name:{
    type: String,
    required; true,
  },
  // TODO: Define the 'species' field with type String and required validation
  species:{
    type: String,
    required; true,
  },
  // TODO: Define the 'age' field with type String and required validation
  age:{
    type: String,
    required: true,
  },
  // TODO: Define the 'description' field with type String and required validation
  description:{
     type: String,
    required: true,
  },
  // TODO: Define the 'adoptionStatus' field with type String, enum['available', 'pending', 'adopted'], and default value
  adoptionStatus:{
     type: String,
     enum: ['available', 'pending', 'adopted'],
     default: 'available',
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
