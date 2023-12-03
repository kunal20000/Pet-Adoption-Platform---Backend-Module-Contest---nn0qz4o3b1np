const mongoose = require('mongoose');

// TODO: Define the pet schema with appropriate data types and validation
const petSchema = new mongoose.Schema({
  // TODO: Define the 'name' field with type String and required validation
  // TODO: Define the 'species' field with type String and required validation
  // TODO: Define the 'age' field with type String and required validation
  // TODO: Define the 'description' field with type String and required validation
  // TODO: Define the 'adoptionStatus' field with type String, enum['available', 'pending', 'adopted'], and default value
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
