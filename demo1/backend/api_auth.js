const express = require("express")
const router = express.Router()

router.get("/login", (req, res)=>{
    res.json({result: "login ok"})
})

router.post("/register", (req, res)=>{
    res.json({result: "register ok"})
})

module.exports = router;