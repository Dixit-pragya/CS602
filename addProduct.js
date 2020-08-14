const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = (req, res, next) => {
    //addProductpage is rendered
    res.render('addProduct', { title: "Add a product" });

};