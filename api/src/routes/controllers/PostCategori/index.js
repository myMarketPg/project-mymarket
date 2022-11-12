const { Categori } = require('../../../db');

module.exports = {
    postCategori: async (name) => {
        const creatCategori = Categori.create({
            name: name
        });
    }
};