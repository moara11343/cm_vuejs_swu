const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  // destructuring || unpack
  const { username, password } = req.body;
  const doc = await Users.findOne({ username });
  res.json(doc);
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const doc = await Users.create(req.body);
    res.json({ result: "register ok", detail: doc });
  } catch (e) {
    res.json({ result: "register nok", detail: e });
  }
});

module.exports = router;
