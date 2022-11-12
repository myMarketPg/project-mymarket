const { Router } = require('express');
// Importación de todos los routers;
const buyerMiddleware = require('./Buyer');
const productMiddleware = require('./Product');
const router = Router();

// Configuración de los routers
router.use('/buyers', buyerMiddleware);
router.use('/product', productMiddleware);


module.exports = router;