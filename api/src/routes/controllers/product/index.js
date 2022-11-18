const e = require("express");
const { Product, Category, Order } = require("../../../db");
const cloudinary = require("../../../utils/cloudinary");

module.exports = {
    listProducts: async () => {
        const products = await Product.findAll({
            include: [{ model: Category }, { model: Order }],
        });        
        const allProducts = [];
        for (let i = 0; i < products.length; i++) {            
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
                categories: products[i].category,
            };
            allProducts.push(product);
        }
        return allProducts;
    },
    postProduct: async (req, res, next) => {
        const {name, image, description, model, brand, price, stock, category} = req.body;
        try{
        const result = await cloudinary.uploader.upload(image, {
            folder: Products,
        }); 
        const product = await Product.create({
            name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            description,
            model,
            brand,
            price,
            stock,
            category
        });
        res.status(200).json({
            succes: true,
            product
        })
    } catch (error) {
        console.log(error)
    }
    },
    modifyProduct: async (object) => {
        let product = await Product.findByPk(object.id);
        product = await Product.update(
            {
                name: object.name,
                image: object.image,
                stock: object.stock,
                description: object.description,
                model: object.model,
                brand: object.brand,
                price: object.price,
            },
            { where: { id: object.id } }
        );
        const categories = object.category;
        for (let i = 0; i < categories.length; i++) {
            await Category.update(
                { name: categories[i].name },
                { where: { id: categories[i].id } }
            );
        }
        return `Producto modificado correctamente`;
    },
    postData: async (array) => {
        let array2 = array;
        array.map(e => {
            Product.create({
                name: e.name,
                description: e.description,
                stock: e.stock,
                image: e.image,
                model: e.model,
                brand: e.brand,
                price: e.price
            });            
        });
        array2.map(e => {
            Category.findOrCreate({where: {name: e.category}});            
        });
        Promise.all(array, array2);
        for (let i = 0; i < array.length; i++) {
            let newCategory = await Category.findOne({where: {name: array[i].category}});
            let newProduct = await Product.findOne({where: {name: array[i].name}});
            newCategory.addProduct(newProduct.id);
            console.log(newCategory, newProduct);
        }
        return `successfully`;
    }
};