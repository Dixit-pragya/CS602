const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async(req, res, next) => {

    // Fill in the code
    let product = new Product({
        productName: req.body.pname,
        productDesc: req.body.pdesc,
        quantity: req.body.quantity,
        price: req.body.price
    });
    await product.save(); //add new product name and quantity in the database

    res.redirect('/products'); //the list of the products is rendered 
};