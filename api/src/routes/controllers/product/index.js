const e = require('express');
const { Product, Variant, Category, Order } = require('../../../db');

module.exports = {
    listProducts: async () => {
        const products = await Product.findAll({include: [{model: Category}, {model: Order}]});
        // const orders = await Order.findAll();        
        const allProducts = [];
        for (let i = 0; i < products.length; i++) {
            // let sales = products[i].orders.filter(e => e.state === 'successfull' && e.totalAmount);
            let product = {
                id: products[i].id,
                name: products[i].name,
                image: products[i].image,
                model: products[i].model,
                brand: products[i].brand,
                description: products[i].description,
                price: products[i].price,
                active: products[i].active,
                stock: products[i].stock,
                categories: products[i].category.name,

            }
            allProducts.push(product);
        }
        return allProducts;
    },
    postProduct: async (name, image, description,model, brand, price, stock, category) => {
        const product = await Product.create({
            name: name,
            image: image,            
            description: description,
            model: model,
            brand: brand,
            price: price,
            stock: stock,
        });
        await Category.findOrCreate({where: {name: category}});
        const newCategory = await Category.findAll({where: {name: category}});
        newCategory.forEach(async (e) => await e.addProduct(product.id));
        return newCategory;
    },
    modifyProduct: async (object) => {
        let product = await Product.findByPk(object.id);        
        product = await Product.update({            
            name: object.name,
            image: object.image,
            stock: object.stock,
            description: object.description,
            model: object.model,
            brand: object.brand,
            price: object.price,
        }, {where: {id: object.id}});       
        const categories = object.category;
        for (let i = 0; i < categories.length; i++) {
            await Category.update({name: categories[i].name}, {where: {id: categories[i].id}});
        }
        return `Producto modificado correctamente`;
    },
    postData: async (array) => {        
        array.map(element => Product.create({name: element.name, 
            image: element.image, 
            stock: element.stock, 
            description: element.description, 
            model: element.model, 
            brand: element.brand, 
            price: element.price}));        
        Promise.all(array);
        return `successfully`;
    }
};