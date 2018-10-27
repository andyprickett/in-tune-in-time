const express = require("express");
const router = express.Router();

const tempoController = require("../controllers/tempoController");

router.get("/tempos", tempoController.index);

module.exports = router;