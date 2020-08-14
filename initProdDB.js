const ProductDB = require('./productDB.js');

const Product = ProductDB.getModel();

(async() => {

    await Product.deleteMany({});

    let product1 = new Product({
        productName: 'Blue Dress',
        productDesc: 'Blue Dress Women',
        quantity: '20',
        price: 110.99

    });

    let product2 = new Product({
        productName: 'White Dress',
        productDesc: 'White Dress Women',
        quantity: '100',
        price: 90
    });

    let product3 = new Product({
        productName: 'Black Dress',
        productDesc: 'Black Dress Women',
        quantity: '30',
        price: 26.09
    });


    await Promise.all([
        product1.save(),
        product2.save(),
        product3.save()
    ]);

    let currentProducts = await Product.find({});

    console.log(currentProducts);

    process.exit();


})();