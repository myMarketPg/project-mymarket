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
    const { name, image, description,model, brand, price, stock, category } = req.body;
    if( !name || !image || !description || !price || !stock || !model || !brand) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.postProduct(name, image, description,model, brand, price, stock, category);
        res.status(200).send('Producto añadido');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, image, description,model, brand, price, stock, category } = req.body;

    let changeProduct = {
        id,
        name, 
        image, 
        stock, 
        description,
        model,
        brand, 
        price, 
        featured,
        category
    }
    try {
        let message = await controllers.modifyProduct(changeProduct);
        return res.status(200).json(message);
    } catch(error) {
        res.status(404).send({error: 'Producto no cambiado'});
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