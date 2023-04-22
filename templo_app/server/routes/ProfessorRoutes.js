const express = require("express");
const router = express.Router();

const ProfessorController = require("../controllers/ProfessorController");

router.get("/professors", ProfessorController.getAllProfessors);
router.get("/professors/:id", ProfessorController.getProfessorById);
router.post("/professors", ProfessorController.createProfessor);
router.put("/professors/:id", ProfessorController.updateProfessorById);
router.delete("/professors/:id", ProfessorController.deleteProfessor);
router.post(
  "/professors/:id/payment-modalities",
  ProfessorController.addPaymentModality
);

module.exports = router;
