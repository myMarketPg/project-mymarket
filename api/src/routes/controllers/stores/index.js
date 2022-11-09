const { User, Store } = require('../../../db');

module.exports = {
    listStores: async () => {
        const stores = await Store.findAll();
        return stores;
    }
}