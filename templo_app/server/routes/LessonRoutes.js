const express = require("express");
const LessonController = require("../controllers/LessonController");

const router = express.Router();

router.get("/lessons", LessonController.getAllLessons);
router.get("/lessons/:id", LessonController.getLessonById);
router.post("/lessons", LessonController.createLesson);
router.put("/lessons/:id", LessonController.updateLesson);
router.delete("/lessons/:id", LessonController.deleteLesson);

module.exports = router;
