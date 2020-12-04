const knexdb = require('../database/dbConfig');

module.exports = {
    async listUsers(req, res) {
        const result = await knexdb('users');
        return res.json(result);
    },

    async listUserID(req, res, next) {
        const id = req.params.id;
        const result = await knexdb('users').where('id', id);

        if (id != result) {
            return res.json(`Não encontramos resultado com o ID: ${id}`);
        } else {
            return res.json(result);
        }
    }


}