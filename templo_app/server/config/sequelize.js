const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];

const sequelize = new Sequelize(
  `${config.dialect}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`
);

const db = {
  sequelize,
  Sequelize,
};

db.sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = db;
