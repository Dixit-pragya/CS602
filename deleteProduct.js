const productDB = require('../productDB.js');
const Product = productDB.getModel();


module.exports = async(req, res, next) => {

    let id = req.params.id;

    let product = await Product.findById(id); //Find the product by id

    if (!product) {
        res.render('404');
    } else {
        res.render('deleteProduct', { //deleteProduct page is rendered with current values
            title: "Delete Product Details?",
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