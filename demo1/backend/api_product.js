const express = require("express")
const router = express.Router()
const Products = require("./models/product_schema");

router.get("/product", (req,res)=>{
    
    res.json({result:"product"})    
})

module.exports = router;