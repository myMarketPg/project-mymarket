const { Seller } = require('../../../db');

module.exports = {
    postSeller: async (name, email, password) => {
        const creatSeller = Seller.create({
            name: name,
            email: email,
            password: password
        });
    }
};