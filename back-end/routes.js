const express = require("express");
const router = express.Router();
const userCreateController = require('./controllers/userCreateController');
const tagCreateController = require('./controllers/tagCreateController');

router.get("/", (req, res) => {
  res.send("Server no ar");
});

router.post("/user", userCreateController);
router.post("/tag", tagCreateController);

module.exports = router;
