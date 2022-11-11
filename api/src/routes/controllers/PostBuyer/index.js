const { Buyer } = require('../../../db');

module.exports = {
    postBuyer: async (name, password) => {
        const creatBuyer = Buyer.create({
            name: name,
            password: password
        });
    }
};