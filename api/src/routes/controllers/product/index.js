const { Product, Variant } = require('../../../db');


module.exports = {
    listProducts: async () => {
        const products = await Product.findAll({include: Variant});
        return products;
    },
    postProduct: async (name, image, stock, description, price, featured, variants) => {
        const product = await Product.create({
            name: name,
            image: image,
            stock: stock,
            description: description,
            price: price,
            featured: featured
        });
        const array = variants.map((variant) => Variant.create({id: variant.id, name: variant.name}));
        await Promise.all(array);
        const variantsDB = await Variant.findAll();
        for (let i = 0; i < variantsDB.length; i++) {
            await product.addVariant(variantsDB[i].id);
        }        
    }
};