const { Router } = require('express');
// Importación de todos los routers;
const userMiddleware = require('./User');
const productMiddleware = require('./Product')
const router = Router();

// Configuración de los routers
router.use('/users', userMiddleware);

router.use('/product', productMiddleware);


module.exports = router;