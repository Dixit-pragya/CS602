const productDB = require('../productDB.js');
const Product = productDB.getModel();

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
    res.render('shoppingCart', { title: 'Shopping Cart', data: results });
};