const { Router } = require('express');
// Importación de todos los routers;

const adminMiddleware = require('./Admin');
const buyerMiddleware = require('./Buyer');
const categoriMiddleware = require('./Categori');
const orderMiddleware = require('./Order');
const productMiddleware = require('./Product');
const storeMiddleware = require('./Store');
// const sellerMiddleware = require('./Seller');
const router = Router();

// Configuración de los routers
router.use('/admin', adminMiddleware);
router.use('/buyers', buyerMiddleware);
router.use('/categori', categoriMiddleware);
router.use('/order', orderMiddleware);
router.use('/products', productMiddleware);
router.use('/store', storeMiddleware);
// router.use('/seller', sellerMiddleware);

module.exports = router;