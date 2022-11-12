const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllCategories');

router.get('/', async(req, res) => {
    try {
        const categories = await controllers.listCategories();
        res.status(200).json({categories: categories});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;