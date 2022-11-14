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
    },
    modifyProduct: async (object) => {
        let product = await Product.findByPk(object.id);        
        product = await Product.update({            
            name: object.name,
            image: object.image,
            stock: object.stock,
            description: object.description,
            price: object.price,
            featured: object.featured
        }, {where: {id: object.id}});
        return `Producto modificado correctamente`;
    }
};