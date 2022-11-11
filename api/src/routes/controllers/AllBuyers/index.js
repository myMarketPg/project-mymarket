const { Buyer } = require('../../../db');

module.exports = {
    listBuyers: async () => {
        const buyers = await Buyer.findAll();
        return buyers;
    }
}