const Student = require('../models/Student');

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    // After creating, we usually return the data or redirect
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all students and render the view
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    // Instead of just JSON, let's render the EJS view required by the lab
    res.render('list', { students: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};