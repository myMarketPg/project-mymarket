const e = require('express');
const { Product, Variant, Category, Order } = require('../../../db');

module.exports = {
    listProducts: async () => {
        const products = await Product.findAll({include: [{model: Variant}, {model: Category}, {model: Order}]});
        // const orders = await Order.findAll();        
        const allProducts = [];
        for (let i = 0; i < products.length; i++) {
            let sales = products[i].orders.filter(e => e.state === 'successfull' && e.totalAmount);
            let product = {
                id: products[i].id,
                name: products[i].name,
                image: products[i].image,
                description: products[i].description,
                price: products[i].price,
                active: products[i].active,
                stock: products[i].variants.map(e => { return {amount: e.amount, name: e.name} }),
                categories: products[i].category,
                sales: sales.map(e => e.totalAmount)[0]
            }
            allProducts.push(product);
        }
        return allProducts;
    },
    postProduct: async (name, image, description, price, active, variants, category) => {
        const product = await Product.create({
            name: name,
            image: image,            
            description: description,
            price: price,
            active: active
        });        
        const array = variants.map((variant) => Variant.create({id: variant.id, name: variant.name, amount: variant.amount}));
        await Promise.all(array);
        const variantsDB = await Variant.findAll();        
        for (let i = 0; i < variantsDB.length; i++) {
            await product.addVariant(variantsDB[i].id);
        }
        const newCategory = await Category.findByPk(category.id);
        newCategory.addProduct(product.id);
        return `Producto creado exitosamente`;
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