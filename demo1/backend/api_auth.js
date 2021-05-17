const express = require("express")
const router = express.Router()

router.post("/login", (req, res)=>{
    res.json({result: "login ok", content: req.body})
})

router.post("/register", (req, res)=>{
    res.json({result: "register ok", content: req.body})
})

module.exports = router;