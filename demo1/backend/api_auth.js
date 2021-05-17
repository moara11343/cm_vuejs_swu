const express = require("express")
const router = express.Router()

router.get("/login", (req, res)=>{
    res.json({result: "login ok"})
})

router.get("/register", (req, res)=>{
    res.json({result: "register ok"})
})

module.exports = router;