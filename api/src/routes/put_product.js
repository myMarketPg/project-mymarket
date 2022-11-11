const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllProducts');

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
        controllers.modifyProduct(changeProduct);
        res.status(200).send(product)
    } catch(error) {
        res.status(404).send({error: 'Producto no cambiado'})
    }
})