const { Router } = require('express');
// Importación de todos los routers;
const findBuyerMiddleware = require('./findBuyer');
const buyerMiddleware = require('./Buyer');
const postBuyerMiddleware = require('./post_Buyer');
const productMiddleware = require('./Product');
const postProductMiddleware = require('./post_product');
const putProductMiddleware = require('./put_product');
const deleteProductMiddleware = require('./delete_product');
const sellerMiddleware = require('./Seller');
const postSellerMiddleware = require('./post_Seller');
const adminMiddleware = require('./Admin');
const postAdminMiddleware = require('./post_admin');
const router = Router();

// Configuración de los routers
router.use('/findBuyer', findBuyerMiddleware);
router.use('/buyer', buyerMiddleware);
router.use('/buyer', postBuyerMiddleware);
router.use('/product', productMiddleware);
router.use('/product', postProductMiddleware);
router.use('/product', deleteProductMiddleware);
router.use('/product', putProductMiddleware);
router.use('/seller', sellerMiddleware);
router.use('/seller', postSellerMiddleware);
router.use('/admin', adminMiddleware);
router.use('/admin', postAdminMiddleware);


module.exports = router;