const express = require("express");
const router = express.Router();
const userCreateController = require('./controllers/userCreateController');
const tagCreateController = require('./controllers/tagCreateController');
const userAuthenticateController = require('./controllers/userAuthenticateController');
const complimentCreateController = require('./controllers/complimentCreateController');
const ensureAdmin = require('./middlewares/ensureAdmin');
const ensureAuthentication = require('./middlewares/ensureAuthentication');

router.get("/", (req, res) => {
  res.send("Server no ar");
});

router.post("/user", userCreateController);
router.post("/tag", ensureAuthentication, ensureAdmin, tagCreateController);
router.post("/login", userAuthenticateController);
router.post("/compliment", ensureAuthentication, complimentCreateController);

module.exports = router;
