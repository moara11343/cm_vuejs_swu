const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.post("/login", (req, res) => {
  res.json({ result: "login ok", content: req.body });
});

router.post("/register", (req, res) => {
  Users.create(req.body, (error, doc) => {
    res.json({ result: "register ok", detail: doc });
  });
});

module.exports = router;
