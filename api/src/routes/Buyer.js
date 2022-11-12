const express = require('express');
const router = express.Router();
const controllers = require('./controllers/buyers');

router.get('/', async (req, res, next) => {
    const buyers = await controllers.listUsers();
    return res.status(200).json({buyers: buyers});
});

module.exports = router;