const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");
const Lesson = require("./Lesson");
const Professor = require("./Professor");
const PaymentModality = require("./PaymentModality");

class Payment extends Model {}

Payment.init(
  {
    // attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    paymentTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Payment",
  }
);

// associations
Payment.belongsTo(Lesson);
Payment.belongsTo(Professor);
Payment.belongsTo(PaymentModality);

module.exports = Payment;
