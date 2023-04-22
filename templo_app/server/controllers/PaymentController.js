const Payment = require("../models/Payment");

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single payment by ID
const getPaymentById = async (req, res) => {
  const id = req.params.id;
  try {
    const payment = await Payment.findByPk(id);
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ message: `Payment with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new payment
const createPayment = async (req, res) => {
  const { amount, paymentDate, paymentMethod } = req.body;
  try {
    const payment = await Payment.create({
      amount,
      paymentDate,
      paymentMethod,
    });
    res.json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing payment by ID
const updatePayment = async (req, res) => {
  const id = req.params.id;
  const { amount, paymentDate, paymentMethod } = req.body;
  try {
    const payment = await Payment.findByPk(id);
    if (payment) {
      await payment.update({
        amount,
        paymentDate,
        paymentMethod,
      });
      res.json(payment);
    } else {
      res.status(404).json({ message: `Payment with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a payment by ID
const deletePayment = async (req, res) => {
  const id = req.params.id;
  try {
    const payment = await Payment.findByPk(id);
    if (payment) {
      await payment.destroy();
      res.json({ message: `Payment with ID ${id} deleted` });
    } else {
      res.status(404).json({ message: `Payment with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
