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


router.post('/', async (req, res) => {
    const { name, price, stock, category, image, description, rating } = req.body;
    if(!name || !price || !stock || !category || !image || !description || !rating) {
        return res.status(400).json({info: 'Falta ingresar un dato'})
    }

    try {
        const createProduct = Product.create({
            name,
            price,
            stock,
            category,
            image,
            rating,
            description
        })
        
        
        return res.status(200).send("Producto Añadido")
    } catch(error) {
        res.status(404).send(error.message)
    }
});

module.exports = router;