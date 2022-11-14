const { Order } = require('../../../db');

module.exports = {
    listOrders: async () => {
        const orders = await Order.findAll();
        return orders;
    },
    postOrder: async (date, totalAmount, state) => {
        const createOrder = await Order.create({
            date: date,
            totalAmount: totalAmount,
            state: state
        });        
    }
};