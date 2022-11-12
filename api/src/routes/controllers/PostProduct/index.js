const { Product } = require('../../../db');

module.exports = {
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