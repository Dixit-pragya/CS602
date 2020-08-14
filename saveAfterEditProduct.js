const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async(req, res, next) => {

    // Fill in the code
    let id = req.body.id;

    let product = await Product.findById(id); //Find the product by id

    if (!product) {
        res.render('404');
    } else {
        product.id = req.body.id;
        product.productName = req.body.pname;
        product.productDesc = req.body.pdesc;
        product.quantity = req.body.quantity;
        product.price = req.body.price;
        await product.save((err) => { //Save the updated form values in the database
            if (err)
                console.log("Error updating: %s ", err);
            res.redirect('/products'); //the list of the product is rendered 
        });
    }

};