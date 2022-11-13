const { Buyer } = require('../../../db');

module.exports = {
    listBuyers: async () => {
        const buyers = await Buyer.findAll();
        return buyers;
    },
    postBuyer: async (name, phoneNum, email, password, addres) => {
        const creatBuyer = Buyer.create({
            name: name,
            phoneNum: phoneNum,
            email: email,
            password: password,
            addres: addres,
                });
    },
    findBuyer: async (id) => {
        let Found = await Buyer.findOne({ where: { id: id } });
        console.log(Found);
        return await Found;
    }
}