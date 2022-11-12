const express = require('express');
const router = express.Router();
const controllers = require('./controllers/Order');


router.get('/', async (req, res, next) => {
    const orders = await controllers.listOrders();
    return res.status(200).json({orders: orders});
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const AllOrders = await controllers.listOrders();
    try {
        if(id) {
            const orderId = AllOrders.filter(e => e.id === id);
            productId.length ?
            res.status(200).json(orderId) :
            res.status(404).send('Orden no encontrada')
        }
    } catch(error) {
        res.status(404).send(error.message)
    }
});




module.exports = router;