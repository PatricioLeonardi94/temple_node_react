const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");

const PaymentModality = sequelize.define("PaymentModality", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = PaymentModality;
