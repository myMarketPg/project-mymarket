const { User, Store, Seller } = require('../../../db');

module.exports = {
    addStore: async (name, description, rating, img, idSeller) => {
        const result = await Store.findAll({where: {name: name}});
        if (result) {
            throw new Error(`The store was already in the database`);
        }
        const store = await Store.create({name, description, rating, img});
        const seller = await Seller.findByPk(idSeller);
        store.addSeller(seller);
        return `Store successfully created`;
    },
    listStores: async (name) => {
        if (name) {
            const store = await Store.findAll({where: {name: name}});
            return store;
        }
        const stores = await Store.findAll();
        return stores;
    }
}