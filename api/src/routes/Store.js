const express = require('express');
const router = express.Router();
const controllers = require('./controllers/stores');

router.get('/', async (req, res, next) => {
    const stores = await controllers.listStores();
    return res.status(200).json({stores: stores});
});

<<<<<<< HEAD
router.post('/', async (req, res, next) => {
    try {
        const { name, description, rating, img, idSeller } = req.body;
        const store = await controllers.addStore(name, description, rating, img, idSeller);
        return res.status(200).json({store: store});
    } catch (error) {
        next();
    }    
});
=======

>>>>>>> dev

module.exports = router;