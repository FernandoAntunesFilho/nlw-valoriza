const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server no ar");
});

module.exports = router;
