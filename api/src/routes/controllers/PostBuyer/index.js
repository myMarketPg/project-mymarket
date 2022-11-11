const { Buyer } = require('../../../db');

module.exports = {
    postBuyer: async (name, phoneNum, email, password, addres) => {
        const creatBuyer = Buyer.create({
            name: name,
            phoneNum: phoneNum,
            email: email,
            password: password,
            addres: addres,
                });
    }
};