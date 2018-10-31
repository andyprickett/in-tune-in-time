const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController");

router.get("/notes", noteController.index);
router.get("/notes/:id", noteController.show);

module.exports = router;