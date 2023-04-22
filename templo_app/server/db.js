const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DBNAME}`
); // Example for postgres


const connectToDb - async()=>{
  
}

const db = {};

db.sequelize = sequelize;
db.app = require("./models.js")(sequelize, Sequelize);

module.exports = db;

// const pool = new Pool({
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   port: process.env.DBPORT,
//   database: ,
// });
