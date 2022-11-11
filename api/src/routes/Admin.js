const express = require('express');
const router = express.Router();
const controllers = require('./controllers/AllAdmins');

router.get('/', async(req, res) => {
    try {
        const admins = await controllers.listAdmins();
        res.status(200).json({admins: admins});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;