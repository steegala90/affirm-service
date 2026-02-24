const express = require("express");
const cors = require("cors");

const affirmationRoutes = require("./modules/affirmations/affirmation.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Affirm Service API 🚀" });
});

app.use("/affirmations", affirmationRoutes);

module.exports = app;
