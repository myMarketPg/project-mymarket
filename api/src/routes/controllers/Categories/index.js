const { Category, Product } = require('../../../db');

module.exports = {
    listCategories: async (name) => {
        if (name) {
            const categories = await Category.findAll({include: Product}, {where: {categories: name}});
            return categories;
        }
        const categories = await Category.findAll();
        return categories;
    },
    postCategory: async (name) => {
        const category = await Category.create({
            name: name
        });
    }
}