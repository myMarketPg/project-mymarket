const { Order, Product } = require('../../../db');

module.exports = {
    listOrders: async () => {
        const orders = await Order.findAll({include: Product});
        return orders;
    },
    postOrder: async (date, totalAmount, state, productId) => {
        const newOrder = await Order.create({
            date: date,
            totalAmount: totalAmount,
            state: state
        });
        await newOrder.addProduct(productId);
    }
};