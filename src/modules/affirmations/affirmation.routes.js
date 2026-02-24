const express = require("express");
const router = express.Router();
const service = require("./affirmation.service");

router.get("/", (req, res) => {
  const { category } = req.query;
  const data = service.getAll(category);
  res.json(data);
});

router.get("/random", (req, res) => {
  const data = service.getRandom();
  res.json(data);
});

module.exports = router;
