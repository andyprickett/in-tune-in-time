const express = require("express");
const router = express.Router();

const keyController = require("../controllers/keyController");

router.get("/keys", keyController.index);

module.exports = router;