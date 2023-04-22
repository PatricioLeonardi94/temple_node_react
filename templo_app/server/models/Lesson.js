const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");
const Professor = require("./Professor");
const Student = require("./Student");

const Lesson = sequelize.define("Lesson", {
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
  dayOfWeek: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// associations
Lesson.belongsTo(Professor);
Lesson.belongsToMany(Student, { through: "StudentLesson" });

module.exports = Lesson;
