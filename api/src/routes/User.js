const express = require('express');
const router = express.Router();
const controllers = require('./controllers/users');

router.get('/', async (req, res, next) => {
    const users = await controllers.listUsers();
    return res.status(200).json({users: users});
});

module.exports = router;