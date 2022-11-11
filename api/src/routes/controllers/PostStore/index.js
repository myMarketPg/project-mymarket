const { Store } = require('../../../db');

module.exports = {
    postStore: async (banner, logo, phoneNumber, email, adress) => {
        const creatStore = Store.create({
            banner: banner,
            logo: logo,
            phoneNumber: phoneNumber,
            email: email,
            adress: adress
        });
    }
};