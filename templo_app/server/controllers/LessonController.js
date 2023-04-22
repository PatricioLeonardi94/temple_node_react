const Lesson = require("../models/Lesson");

// Get all lessons
const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.json(lessons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single lesson by ID
const getLessonById = async (req, res) => {
  const id = req.params.id;
  try {
    const lesson = await Lesson.findByPk(id);
    if (lesson) {
      res.json(lesson);
    } else {
      res.status(404).json({ message: `Lesson with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new lesson
const createLesson = async (req, res) => {
  const { name, description, date, duration } = req.body;
  try {
    const lesson = await Lesson.create({
      name,
      description,
      date,
      duration,
    });
    res.json(lesson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing lesson by ID
const updateLesson = async (req, res) => {
  const id = req.params.id;
  const { name, description, date, duration } = req.body;
  try {
    const lesson = await Lesson.findByPk(id);
    if (lesson) {
      await lesson.update({
        name,
        description,
        date,
        duration,
      });
      res.json(lesson);
    } else {
      res.status(404).json({ message: `Lesson with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a lesson by ID
const deleteLesson = async (req, res) => {
  const id = req.params.id;
  try {
    const lesson = await Lesson.findByPk(id);
    if (lesson) {
      await lesson.destroy();
      res.json({ message: `Lesson with ID ${id} deleted` });
    } else {
      res.status(404).json({ message: `Lesson with ID ${id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
};
