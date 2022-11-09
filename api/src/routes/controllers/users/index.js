const { User } = require('../../../db');

module.exports = {
    listUsers: async () => {
        const users = await User.findAll();
        return users;
    }
}