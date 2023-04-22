const Professor = require("../models/Professor");

// Get all professors
const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.findAll();
    res.json(professors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single professor by ID
const getProfessorById = async (req, res) => {
  const id = req.params.id;
  try {
    const professor = await Professor.findByPk(id);
    if (professor) {
      res.json(professor);
    } else {
      res.status(404).json({ message: `Professor with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new professor
const createProfessor = async (req, res) => {
  const { firstName, lastName, phoneNumber, email } = req.body;
  try {
    const professor = await Professor.create({
      firstName,
      lastName,
      phoneNumber,
      email,
    });
    res.json(professor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing professor by ID
const updateProfessorById = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, phoneNumber, email } = req.body;
  try {
    const professor = await Professor.findByPk(id);
    if (professor) {
      await professor.update({
        firstName,
        lastName,
        phoneNumber,
        email,
      });
      res.json(professor);
    } else {
      res.status(404).json({ message: `Professor with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a professor by ID
const deleteProfessor = async (req, res) => {
  const id = req.params.id;
  try {
    const professor = await Professor.findByPk(id);
    if (professor) {
      await professor.destroy();
      res.json({ message: `Professor with ID ${id} deleted` });
    } else {
      res.status(404).json({ message: `Professor with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Add a payment modality to a professor
const addPaymentModality = async (req, res) => {
  const professorId = req.params.id;
  const { name, value } = req.body;
  try {
    const professor = await Professor.findByPk(professorId);
    if (professor) {
      const paymentModality = await professor.createPaymentModality({
        name,
        value,
      });
      res.json(paymentModality);
    } else {
      res.status(404).json({ message: `Professor with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProfessors,
  getProfessorById,
  createProfessor,
  updateProfessorById,
  deleteProfessor,
  addPaymentModality,
};
