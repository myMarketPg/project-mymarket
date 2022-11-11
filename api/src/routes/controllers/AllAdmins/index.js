const { Admin } = require('../../../db');

module.exports = {
    listAdmins: async () => {
        const admins = await Admin.findAll();
        return admins;
    }
}