const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.post("/login", (req, res) => {
  res.json({ result: "login ok", content: req.body });
});

router.post("/register", async (req, res) => {
  try {
    const doc = await Users.create(req.body);
    
    res.json({ result: "register ok", detail: doc });
  } catch (e) {
    res.json({ result: "register nok", detail: e });
  }
});

module.exports = router;
