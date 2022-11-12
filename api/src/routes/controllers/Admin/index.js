const { Admin } = require('../../../db');

module.exports = {
    listAdmins: async () => {
        const admins = await Admin.findAll();
        return admins;
    },
    postAdmin: async (userName, password) => {
        const creatAdmin = Admin.create({
            userName: userName,
            password: password
        });
    }
}