const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, unique: true },
  grades: [{
    subject: String,
    score: Number
  }]
});

module.exports = mongoose.model('Student', studentSchema);