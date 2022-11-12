const { Categori } = require('../../../db');

module.exports = {
    listCategories: async () => {
        const categories = await Categori.findAll();
        return categories;
    },
    postCategori: async (name) => {
        const creatCategori = Categori.create({
            name: name
        });
    }
}