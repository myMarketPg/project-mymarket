const { Product } = require('../../../db');


module.exports = {
    listProducts: async () => {
        const products = await Product.findAll();
        return products;
    },
    postProduct: async (name, image, stock, description, price, featured) => {
        const createProduct = Product.create({
            name: name,
            image: image,
            stock: stock,
            description: description,
            price: price,
            featured: featured
        });
    }
};