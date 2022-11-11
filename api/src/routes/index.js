const { Router } = require('express');
// Importación de todos los routers;
const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
const sellerMiddleware = require('./Seller');
const postSellerMiddleware = require('./post_Seller');
const adminMiddleware = require('./Admin');
const postAdminMiddleware = require('./post_admin');
const router = Router();

// Configuración de los routers
router.use('/buyers', buyerMiddleware);
router.use('/product', productMiddleware);
router.use('/seller', sellerMiddleware);
router.use('/seller', postSellerMiddleware);
router.use('/admin', adminMiddleware);
router.use('/admin', postAdminMiddleware);


module.exports = router;