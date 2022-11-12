const { Router } = require('express');
// Importación de todos los routers;

const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
const sellerMiddleware = require('./Seller');
const adminMiddleware = require('./Admin');
const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
const router = Router();

// Configuración de los routers
router.use('/buyers', buyerMiddleware);
router.use('/products', productMiddleware);



module.exports = router;