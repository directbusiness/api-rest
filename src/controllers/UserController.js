const knexdb = require('../database/dbConfig')

module.exports = {
    async listUsers(req, res) {
        const result = await knexdb('users');
        return res.json(result);
    }
}