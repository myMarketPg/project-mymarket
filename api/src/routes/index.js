const { Router } = require('express');
// Importación de todos los routers;

const adminMiddleware = require('./Admin');
const buyerMiddleware = require('./Buyer');
const categoryMiddleware = require('./Category');
const orderMiddleware = require('./Order');
const productMiddleware = require('./Product');
const storeMiddleware = require('./Store');
const checkoutMiddleware = require('./Chckout')
// const sellerMiddleware = require('./Seller');
const router = Router();

// Configuración de los routers
router.use('/admin', adminMiddleware);
router.use('/buyers', buyerMiddleware);
router.use('/category', categoryMiddleware);
router.use('/order', orderMiddleware);
router.use('/products', productMiddleware);
router.use('/store', storeMiddleware);
router.use('/checkout', checkoutMiddleware);
// router.use('/seller', sellerMiddleware);

module.exports = router;