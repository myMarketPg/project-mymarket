const { Router } = require('express');
// Importación de todos los routers;
<<<<<<< HEAD

const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
const sellerMiddleware = require('./Seller');
const adminMiddleware = require('./Admin');
=======
const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
>>>>>>> Dev
const router = Router();

// Configuración de los routers
router.use('/buyers', buyerMiddleware);
<<<<<<< HEAD
router.use('/products', productMiddleware);
router.use('/seller', sellerMiddleware);
router.use('/admin', adminMiddleware);
=======
router.use('/product', productMiddleware);
>>>>>>> Dev


module.exports = router;