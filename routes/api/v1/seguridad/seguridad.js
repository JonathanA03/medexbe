const express = require("express");
const router = express.Router();

router.post("/signin", async (req, res) => {
  res.status(502).json({ msg: "Not Implemented" });
});

router.post("/login", async (req, res) => {
  res.status(502).json({ msg: "Not Implemented" });
});

module.exports = router;
