const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to In Tune, In Time");
});

module.exports = router;