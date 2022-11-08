const express = require('express');
const router = express.Router();
const controllers = require('./controllers/stores');

router.get('/', async (req, res, next) => {
    const stores = await controllers.listStores();
    return res.status(200).json({stores: stores});
});

module.exports = router;