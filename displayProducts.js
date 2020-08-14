const productDB = require('../productDB.js');
const Product = productDB.getModel();


// display products

module.exports = async(req, res, next) => {

    let products = await Product.find({});

    let results = products.map(prod => {
        return {
            id: prod._id,
            productName: prod.productName,
            productDesc: prod.productDesc,
            quantity: prod.quantity,
            price: prod.price
        };
    });

    res.render('displayProducts', { title: "List of Products", data: results });

};