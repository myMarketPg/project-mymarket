const { Admin } = require('../../../db');

module.exports = {
    postAdmin: async (userName, password) => {
        const creatAdmin = Admin.create({
            userName: userName,
            password: password
        });
    }
};