const { Categori } = require('../../../db');

module.exports = {
    listCategories: async () => {
        const categories = await Categori.findAll();
        return categories;
    }
}