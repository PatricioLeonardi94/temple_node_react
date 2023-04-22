const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/sequelize");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes
const studentRoutes = require("./routes/StudentRoutes");
const professorRoutes = require("./routes/ProfessorRoutes");
const lessonRoutes = require("./routes/LessonRoutes");
const paymentModalityRoutes = require("./routes/PaymentModalityRoutes");
const paymentRoutes = require("./routes/PaymentRoutes");

// Use routes
app.use("/api/", studentRoutes);
app.use("/api/", professorRoutes);
app.use("/api/", lessonRoutes);
app.use("/api/", paymentModalityRoutes);
app.use("/api/", paymentRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Connect to database
db.sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
