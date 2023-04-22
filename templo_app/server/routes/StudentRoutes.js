const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// GET all students
router.get("/students", studentController.getAllStudents);

// GET a single student by ID
router.get("/students/:id", studentController.getStudentById);

// CREATE a new student
router.post("/students", studentController.createStudent);

// UPDATE an existing student by ID
router.put("/students/:id", studentController.updateStudent);

// DELETE a student by ID
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
