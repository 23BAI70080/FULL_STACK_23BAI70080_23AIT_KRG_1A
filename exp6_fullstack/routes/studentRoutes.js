const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to create a student (POST)
router.post('/add', studentController.createStudent);

// Route to view students (GET)
router.get('/', studentController.getStudents);

module.exports = router;