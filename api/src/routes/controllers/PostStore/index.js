const { Store } = require('../../../db');

module.exports = {
    postStore: async (name, image, description, rating) => {
        const creatStore = Store.create({
            name, 
            image, 
            description, 
            rating
        });
    }
};