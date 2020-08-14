var express = require('express');
var router = express.Router();

// other modules
var mainPage = require("./mainPage");
var displayProducts = require("./displayProducts");
var addProduct = require("./addProduct");
var saveProduct = require("./saveProduct");
var editProduct = require("./editProduct");
var saveAfterEditProduct = require("./saveAfterEditProduct");
var deleteProduct = require("./deleteProduct");
var deleteProductAfterConfirm = require("./deleteProductAfterConfirm");
var shoppingCart = require("./shoppingCart");

// router specs
router.get('/', function(req, res, next) {
    res.redirect('/mainPage');
});


router.get('/mainpage', mainPage);

router.get('/products', displayProducts);

router.get('/shoppingCart', shoppingCart);

router.get('/products/add', addProduct);
router.post('/products/add', saveProduct);

router.get('/products/edit/:id', editProduct);
router.post('/products/edit/', saveAfterEditProduct);

router.get('/products/delete/:id', deleteProduct);
router.post('/products/delete', deleteProductAfterConfirm);

module.exports = router;