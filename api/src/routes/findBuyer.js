const express = require('express');
const router = express.Router();
const controllers = require('./controllers/FindBuyer');

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const buyer = await controllers.findBuyer(id);
        res.status(200).send(buyer);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;