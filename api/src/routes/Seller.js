const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllSellers');

router.get('/', async(req, res) => {
    try {
        const sellers = await controllers.listSellers();
        res.status(200).json({sellers: sellers});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;