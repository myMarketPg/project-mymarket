const { Order } = require('../../../db');

module.exports = {
    listOrders: async () => {
        const orders = await Order.findAll();
        return orders;
    }
};