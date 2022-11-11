const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllProducts');

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