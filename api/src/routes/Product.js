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
        res.status(404).send('Hubo un problema', error)
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
    if(!changeProduct.name) {
        delete changeProduct.name
    }
    if(!changeProduct.price) {
        delete changeProduct.price
    }
    if(!changeProduct.stock) {
        delete changeProduct.stock
    }
    if(!changeProduct.category) {
        delete changeProduct.category
    }
    if(!changeProduct.image) {
        delete changeProduct.image
    }
    if(!changeProduct.description) {
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
        
        
        return res.status(200).send("Producto Añadido")
    } catch(error) {
        res.status(404).send('Hubo un problema', error)
    }
});

module.exports = router;