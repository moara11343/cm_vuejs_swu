const express = require("express")
const app = express()


app.get("/login", (req, res)=>{
    res.json({result: "login ok"})
})

app.get("/register", (req, res)=>{
    res.json({result: "register ok"})
})

app.listen(3000, ()=>{
    console.log("server is ready..")
})