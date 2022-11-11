const { Router } = require('express');
// Importación de todos los routers;
const findBuyerMiddleware = require('./findBuyer');
const buyerMiddleware = require('./Buyer');
const postBuyerMiddleware = require('./post_Buyer');
const productMiddleware = require('./Product');
const postProductMiddleware = require('./post_product');
const putProductMiddleware = require('./put_product');
const deleteProductMiddleware = require('./delete_product');
const categoriMiddleware = require('./Categori');
const postCategoriMiddleware = require('./post_categori');
const adminMiddleware = require('./Admin');
const postAdminMiddleware = require('./post_admin');
const storeMiddleware = require('./Store');
const postStoreMiddleware = require('./post_store');
const putStoresMiddleware = require('./put_stores'); 
const orderMiddleware = require('./Order');

const router = Router();

// Configuración de los routers
router.use('/findBuyer', findBuyerMiddleware);
router.use('/buyers', buyerMiddleware);
router.use('/buyers', postBuyerMiddleware);
router.use('/product', productMiddleware);
router.use('/product', postProductMiddleware);
router.use('/product', deleteProductMiddleware);
router.use('/product', putProductMiddleware);
router.use('/categori', categoriMiddleware);
router.use('/categori', postCategoriMiddleware);
router.use('/admin', adminMiddleware);
router.use('/admin', postAdminMiddleware);
router.use('/store', storeMiddleware);
router.use('/store', postStoreMiddleware);
router.use('/store', putStoresMiddleware);
router.use('/order', orderMiddleware);


module.exports = router;