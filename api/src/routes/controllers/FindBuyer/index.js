const { Buyer } = require('../../../db');

module.exports = {
    findBuyer: async (id) => {
        let Found = await Buyer.findOne({ where: { id: id } });
        console.log(Found);
        return await Found;
    }
};