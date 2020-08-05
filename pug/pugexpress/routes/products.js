var express = require('express');
var router = express.Router();
var Product = require("../models/product");

router.get('/', async function(req, res, next) {
    let products = await Product.find();
   // console.log(products);
    res.render("products/list",{ title:"Products in Database", products:products});
});

router.get('/add', async function(req, res, next) {
  
  res.render("products/add");
});
router.post('/add', async function(req, res, next) {
   let product= new Product(req.body);
   await product.save();
    res.redirect("/products");  
});


module.exports = router;
