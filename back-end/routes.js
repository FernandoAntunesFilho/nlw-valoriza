const express = require("express");
const router = express.Router();
const userCreateController = require('./controllers/userCreateController');
const tagCreateController = require('./controllers/tagCreateController');
const userAuthenticateController = require('./controllers/userAuthenticateController');
const complimentCreateController = require('./controllers/complimentCreateController');
const complimentReceiveController = require('./controllers/complimentReceiveController');
const complimentSendController = require('./controllers/complimentSendController');
const ensureAdmin = require('./middlewares/ensureAdmin');
const ensureAuthentication = require('./middlewares/ensureAuthentication');

router.get("/", (req, res) => {
  res.send("Server no ar");
});

router.post("/user", userCreateController);
router.post('/user/compliment/receive', ensureAuthentication, complimentReceiveController);
router.post('/user/compliment/send', ensureAuthentication, complimentSendController);
router.post("/tag", ensureAuthentication, ensureAdmin, tagCreateController);
router.post("/login", userAuthenticateController);
router.post("/compliment", ensureAuthentication, complimentCreateController);

module.exports = router;
