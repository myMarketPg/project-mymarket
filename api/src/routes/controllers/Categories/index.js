const { Category, Product } = require('../../../db');

module.exports = {
    listCategories: async (name) => {
        if (name) {
            const categories = await Category.findOne({where: {name: name}, include: Product});
            return categories;
        }
        const categories = await Category.findAll({include: Product}, {where: {category: name}});
        return categories;
    },
    postCategory: async (name) => {
        const category = await Category.create({
            name: name
        });
    },
    deleteCategory: async (id) => {
        if (!id) {
            throw new Error(`Category was not found in the database`);
        }
        await Category.destroy({where: {id: id}});
        return `The category was successfully deleted`;
    }
}