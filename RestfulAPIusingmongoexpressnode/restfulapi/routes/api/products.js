const express = require("express");
let router= express.Router();


//get products

router.get("/", async (req,res)=>{
    return res.send(["AMD Ryzen 3900x", "Intel i9 9900k"])
});


module.exports= router;