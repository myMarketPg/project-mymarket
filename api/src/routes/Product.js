const express = require('express');
const router = express.Router();
const controllers = require('./controllers/products');

router.get('/', async (req, res, next) => {
    const product = await controllers.listProducts();
    return res.status(200).json({product: product});
});

module.exports = router;