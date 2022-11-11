const { Seller } = require('../../../db');

module.exports = {
    listSellers: async () => {
        const sellers = await Seller.findAll();
        return sellers;
    }
}