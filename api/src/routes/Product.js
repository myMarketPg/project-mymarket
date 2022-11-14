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


router.post('/', async(req, res) => {
    const { name, image, stock, description, price, featured, variants } = req.body;
    if( !name || !image || !stock || !description || !price ) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postProduct(name, image, stock, description, price, featured, variants);
        res.status(200).send('Producto añadido');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put('/product/:id', (req, res) => {
    const {id} = req.params;
    const { name, price, stock, category, image, description, rating } = req.body;

    let changeProduct = {
        id: parseInt(id),
        name, 
        price, 
        stock, 
        category, 
        image, 
        description, 
        rating
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
    if(!changeProduct.rating) {
        delete changeProduct.rating
    }
    try {
        let product =
        controllers.listProducts().modifyProduct(changeProduct);
        res.status(200).send(product)
    } catch(error) {
        res.status(404).send({error: 'Producto no cambiado'})
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const allProducts = await controllers.listProducts();
    try {
        if(id) {
            const deleteProduct = allProducts.filter(product => product.id === id);
            deleteProduct.length ?
            res.status(200).send('Producto eliminado') :
            res.status(404).send('Error al eliminar producto')
        }
    } catch(error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;