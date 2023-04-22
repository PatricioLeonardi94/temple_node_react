const { sequelize, Sequelize } = require("../config/sequelize");

const Student = require("./Student");
const Professor = require("./Professor");
const Lesson = require("./Lesson");
const PaymentModality = require("./PaymentModality");
const Payment = require("./Payment");

Student.belongsToMany(Lesson, { through: "StudentLesson" });
Lesson.belongsToMany(Student, { through: "StudentLesson" });

Professor.hasMany(Lesson);
Lesson.belongsTo(Professor);

Professor.hasMany(PaymentModality);
PaymentModality.belongsTo(Professor);

PaymentModality.hasMany(Payment);
Payment.belongsTo(PaymentModality);

Lesson.hasMany(Payment);
Payment.belongsTo(Lesson);

module.exports = {
  Student,
  Professor,
  Lesson,
  PaymentModality,
  Payment,
  sequelize,
};
