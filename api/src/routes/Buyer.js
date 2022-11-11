const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllBuyers');

router.get('/', async (req, res, next) => {
    try {
        const buyers = await controllers.listBuyers();
        res.status(200).json({buyers: buyers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router;