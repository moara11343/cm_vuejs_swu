const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.post("/login", (req, res) => {
  res.json({ result: "login ok", content: req.body });
});

router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.json({ result: "register ok", content: [username, password] });
});

module.exports = router;
