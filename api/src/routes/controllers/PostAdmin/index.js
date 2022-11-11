const { Admin } = require('../../../db');

module.exports = {
    postAdmin: async (name, password) => {
        const creatAdmin = Admin.create({
            name: name,
            password: password
        });
    }
};