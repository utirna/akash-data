var express = require("express");
var router = express.Router();
const middleware = require("./middleware");
const users = require("../app/Controller/UserController");

/* GET home page. */
router.get("/get-user-list", middleware.poolConnection, users.getUserList);
router.delete("/remove-user/:id", middleware.poolConnection, users.removeUser);

module.exports = router;
