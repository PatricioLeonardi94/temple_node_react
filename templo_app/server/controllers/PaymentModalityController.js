const PaymentModality = require("../models/PaymentModality");

// Get all payment modalities for a professor
const getPaymentModalities = async (req, res) => {
  const professorId = req.params.id;
  try {
    const paymentModalities = await PaymentModality.findAll({
      where: { professorId },
    });
    res.json(paymentModalities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new payment modality for a professor
const createPaymentModality = async (req, res) => {
  const professorId = req.params.id;
  const { name, price } = req.body;
  try {
    const paymentModality = await PaymentModality.create({
      name,
      price,
      professorId,
    });
    res.json(paymentModality);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing payment modality for a professor
const updatePaymentModality = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  try {
    const paymentModality = await PaymentModality.findByPk(id);
    if (paymentModality) {
      await paymentModality.update({ name, price });
      res.json(paymentModality);
    } else {
      res
        .status(404)
        .json({ message: `Payment modality with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a payment modality for a professor
const deletePaymentModality = async (req, res) => {
  const id = req.params.id;
  try {
    const paymentModality = await PaymentModality.findByPk(id);
    if (paymentModality) {
      await paymentModality.destroy();
      res.json({ message: `Payment modality with ID ${id} deleted` });
    } else {
      res
        .status(404)
        .json({ message: `Payment modality with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getPaymentModalities,
  createPaymentModality,
  updatePaymentModality,
  deletePaymentModality,
};
