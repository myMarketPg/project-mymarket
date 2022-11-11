const { Product } = require('../../../db');

module.exports = {
    postProduct: async (name, price, stock, category, image, description, rating) => {
        const createProduct = Product.create({
            name,
            price,
            stock,
            category,
            image,
            rating,
            description
        });
    }
};