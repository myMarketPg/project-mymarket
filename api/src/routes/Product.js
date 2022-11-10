const express = require('express');
const router = express.Router();
const controllers = require('./controllers/product');
const { Product, Store } = require('../db')

router.get('/', async (req, res, next) => {
    const products = await controllers.listProducts();
    return res.status(200).json({products: products});
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const allProducts = await controllers.listProducts();
    try {
        if(id) {
            const productId = allProducts.filter(e => e.id == id);
            productId.length ?
            res.status(200).json(productId) :
            res.status(404).send('Producto no encontrado')
        }
    } catch(error) {
        alert('Hubo un problema', error)
    }
});

router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, stock, category, image, description} = req.body;

    let changeProduct = {
        id: parseInt(id),
        name,
        price,
        stock,
        category,
        image,
        description
    }
    if(!product.name) {
        delete changeProduct.name
    }
    if(!product.price) {
        delete changeProduct.price
    }
    if(!product.stock) {
        delete changeProduct.stock
    }
    if(!product.category) {
        delete changeProduct.category
    }
    if(!product.image) {
        delete changeProduct.image
    }
    if(!product.description) {
        delete changeProduct.description
    }

    try {
        const product = 
        controllers.modifyProduct(changeProduct);
        delete product;
        res.status(200).send(product)
    } catch(error) {
        res.status(404).send({error: 'Error al editar producto'})
    }
});


router.post('/', async (req, res) => {
    const { name, price, stock, category, image, description, store } = req.body;
    if(!name || !price || !stock || !category || !image || !description) {
        return res.status(400).json({info: 'Falta ingresar un dato'})
    }

    try {
        const createProduct = Product.create({
            name,
            price,
            stock,
            category,
            image,
            description
        })
        const stores = await Store.findAll({
            where: {name: store}
        })
        createProduct.addStore(stores);
        return res.status(200).send('Producto Añadido')
    } catch(error) {
        alert('Hubo un problema', error)
    }
    
});

module.exports = router;