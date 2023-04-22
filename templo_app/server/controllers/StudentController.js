const Student = require("../models/Student");

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single student by ID
const getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: `Student with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  try {
    const student = await Student.create({
      firstName,
      lastName,
      email,
      phone,
    });
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing student by ID
const updateStudent = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, phone } = req.body;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.update({
        firstName,
        lastName,
        email,
        phone,
      });
      res.json(student);
    } else {
      res.status(404).json({ message: `Student with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findByPk(id);
    if (student) {
      await student.destroy();
      res.json({ message: `Student with ID ${id} deleted` });
    } else {
      res.status(404).json({ message: `Student with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
