const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/PaymentController");

// Get all payments
router.get("/payments", PaymentController.getAllPayments);

// Get a single payment by ID
router.get("/payments/:id", PaymentController.getPaymentById);

// Create a new payment
router.post("/payments", PaymentController.createPayment);

// Update an existing payment by ID
router.put("/payments/:id", PaymentController.updatePayment);

// Delete a payment by ID
router.delete("/payments/:id", PaymentController.deletePayment);

module.exports = router;
