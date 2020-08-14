const productDB = require('../productDB.js');
const Product = productDB.getModel();


module.exports = async(req, res, next) => {

    // Fill in the code

    let id = req.body.id;

    let product = await Product.findById(id); //Find the employee by id
    if (!product) {
        res.render('404');
    } else {
        await product.remove((err) => { //Delete Product name and quantity from the database
            if (err)
                console.log("Error updating: %s ", err);
            res.redirect('/products'); //list of product page is rendered
        });


    }
};