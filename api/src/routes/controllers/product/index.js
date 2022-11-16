const { Product, Variant, Category } = require('../../../db');

module.exports = {
    listProducts: async () => {
        const products = await Product.findAll({include: [{model: Variant}, {model: Category}]});
        const allProducts = [];
        for (let i = 0; i < products.length; i++) {
            let product = {
                id: products[i].id,
                name: products[i].name,
                image: products[i].image,
                stock: products[i].stock,
                description: products[i].description,
                price: products[i].price,
                featured: products[i].featured,
                variants: products[i].variants.map(e => e.name),
                category: products[i].category.name
            }
            allProducts.push(product);
        }
        return allProducts;
    },
    postProduct: async (name, image, stock, description, price, featured, variants, category) => {
        const product = await Product.create({
            name: name,
            image: image,
            stock: stock,
            description: description,
            price: price,
            featured: featured
        });        
        const array = variants.map((variant) => Variant.create({id: variant.id, name: variant.name}));
        const array2 = category.map((category) => Category.create({id: category.id, name: category.name}));
        await Promise.all(array, array2);
        const variantsDB = await Variant.findAll();
        const categoriesDB = await Category.findAll();
        for (let i = 0; i < variantsDB.length; i++) {
            await product.addVariant(variantsDB[i].id);
        }
        for (let i = 0; i < categoriesDB.length; i++) {
            await categoriesDB[i].addProduct(product.id);
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
        const array = object.variants;
        for (let i = 0; i < array.length; i++) {
            await Variant.update({name: array[i].name}, {where: {id: array[i].id}});
        }        
        const categories = object.category;
        for (let i = 0; i < categories.length; i++) {
            await Category.update({name: categories[i].name}, {where: {id: categories[i].id}});
        }
        return `Producto modificado correctamente`;
    }
};