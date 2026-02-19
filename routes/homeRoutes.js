const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const wrapAsync = require("../utils/wrapAsync.js");
const authController = require('../controllers/authController.js');

router.get("/", homeController.renderHomePage);

router.get("/attributions", homeController.renderAttributionsPage);


module.exports = router;