const { Category } = require('../../../db');

module.exports = {
    listCategories: async () => {
        const categories = await Category.findAll();
        return categories;
    },
    postCategory: async (name) => {
        const category = Category.create({
            name: name
        });
    }
}