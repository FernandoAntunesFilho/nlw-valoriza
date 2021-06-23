const express = require("express");
const router = express.Router();
const userCreateController = require('./controllers/userCreateController');

router.get("/", (req, res) => {
  res.send("Server no ar");
});

router.post("/user", userCreateController);

module.exports = router;
