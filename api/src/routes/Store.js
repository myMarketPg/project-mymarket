const express = require('express');
const router = express.Router();
const controllers = require('./controllers/stores');

router.get('/', async (req, res, next) => {
    const stores = await controllers.listStores();
    return res.status(200).json({stores: stores});
});

router.post('/', async (req, res, next) => {
    try {
        const { name, description, rating, img, idSeller } = req.body;
        const store = await controllers.addStore(name, description, rating, img, idSeller);
        return res.status(200).json({store: store});
    } catch (error) {
        next();
    }    
});

router.get('/:name', async () => {
    try {
        const { name } = req.params;
        const store = await controllers.listStores(name);
        return res.status(200).json({store: store});
    } catch (error) {
        next(error);
    }
});

module.exports = router;