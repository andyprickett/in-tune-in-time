const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController");

router.get("/notes", noteController.index);

module.exports = router;