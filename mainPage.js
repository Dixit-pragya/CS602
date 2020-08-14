const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = (req, res, next) => {
    //mainPage is rendered
    res.render('mainPage', { title: "Click Option" });

};