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

router.post('/', async(req, res) => {
    const {date, totalAmount, state} = req.body;
    if(!date|| !totalAmount || !state) {
        res.status(400).json({info: 'falta ingresar un dato'})
    }
    try {
        controllers.posOrder(date, totalAmount, state);
        res.status(200).send('Comprador agregado');
    } catch (error) {
        alert('Hubo un problema', error);
    }
});

router.put('/product/:id', (req, res) => {
    const {id} = req.params;
    const { date, totalAmount, state } = req.body;

    let changeOrder = {
        id: parseInt(id),
        date,
        totalAmount,
        state
    }

    if(!changeProduct.date) {
        delete changeProduct.date
    }
    if(!changeProduct.totalAmount) {
        delete changeProduct.totalAmount
    }
    if(!changeProduct.state) {
        delete changeProduct.state
    }
    
    try {
        let order =
        controllers.listOrders().modifyProduct(changeOrder);
        res.status(200).send(order)
    } catch(error) {
        res.status(404).send({error: 'Orden no cambiada'})
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const allOrders = await controllers.listOrders();
    try {
        if(id) {
            const deleteOrder = allOrders.filter(order => order.id === id);
            deleteOrder.length ?
            res.status(200).send('Orden eliminada') :
            res.status(404).send('Error al eliminar la orden')
        }
    } catch(error) {
        res.status(404).send(error.message);
    }
});



module.exports = router;