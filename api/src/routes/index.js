const { Router } = require('express');
// Importación de todos los routers;

const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
const sellerMiddleware = require('./Seller');
const adminMiddleware = require('./Admin');
const router = Router();

// Configuración de los routers
router.use('/buyers', buyerMiddleware);
router.use('/products', productMiddleware);
router.use('/seller', sellerMiddleware);
router.use('/admin', adminMiddleware);


module.exports = router;