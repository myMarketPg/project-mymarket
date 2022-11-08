const { Router } = require('express');
// Importación de todos los routers;
const userMiddleware = require('./User');
const router = Router();

// Configuración de los routers
router.use('/users', userMiddleware);

module.exports = router;