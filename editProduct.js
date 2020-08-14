const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async(req, res, next) => {

    // Fill in the code
    let id = req.params.id;

    let product = await Product.findById(id); //Find the employee by id

    if (!product) {
        res.render('404');
    } else {
        res.render('editProduct', { //editProduct page is rendered with form populated with the current values
            title: "Edit a Product and Quantity",
            data: {
                id: product.id,
                productName: product.productName,
                productDesc: product.productDesc,
                quantity: product.quantity,
                price: product.price
            }
        });
    }

};