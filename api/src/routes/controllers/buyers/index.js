const { Buyer } = require('../../../db');

module.exports = {
    listUsers: async () => {
        const buyers = await Buyer.findAll();
        return buyers;
    }
}