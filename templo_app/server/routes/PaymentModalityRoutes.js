const express = require("express");
const router = express.Router();
const PaymentModalityController = require("../controllers/PaymentModalityController");

// Add payment modality to a professor
router.post(
  "/professors/:id/payment-modalities",
  PaymentModalityController.createPaymentModality
);

// Get all payment modalities for a professor
router.get(
  "/professors/:id/payment-modalities",
  PaymentModalityController.getPaymentModalities
);

// Update a payment modality for a professor
router.put(
  "/professors/:id/payment-modalities/:paymentModalityId",
  PaymentModalityController.updatePaymentModality
);

// Delete a payment modality for a professor
router.delete(
  "/professors/:id/payment-modalities/:paymentModalityId",
  PaymentModalityController.deletePaymentModality
);

module.exports = router;
