const { User, Store } = require('../../../db');

module.exports = {
    listStores: async () => {
        const stores = await Store.findAll();
        return stores;
    },
    postStore: async (banner, logo, phoneNumber, email, adress) => {
        const creatStore = Store.create({
            banner: banner,
            logo: logo,
            phoneNumber: phoneNumber,
            email: email,
            adress: adress
        });
    }
}