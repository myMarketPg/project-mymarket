const express = require('express');
const router = express.Router();
const controllers = require('./controllers/users');

router.get('/', async (req, res, next) => {
    return res.status(200).json({message: 'Route user'});
});

module.exports = router;