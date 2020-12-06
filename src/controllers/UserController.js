const knexdb = require('../database/dbConfig');
const { tryCatch } = require('../errors');

module.exports = {
    async listUsers(req, res, next) {
        try {
            const result = await knexdb('users');
            return res.json(result);

        } catch (error) {
            next(error)
        }
    },

    async listUserID(req, res, next) {
        try {
            const id = req.params.id;
            const result = await knexdb('users').where('id', id);

            if (result == '') {
                return res.json(`Não encontramos resultado com o ID: ${id}`);
            } else {
                return res.json(result);
            }

        } catch (error) {
            next(error);
        }
    },

    async createUser(req, res, next) {
        try {
            const { user, password } = req.body;

            const result = await knexdb('users').where('user', user, 'password', password)

            if (user, password == result) {
                return res.json({ mensagem: "usuario ja existem em nossa base de dados" })
            } else {
                await knexdb('users').insert();
                return res.json(result)
            }
        } catch (error) {
            next(error)
        }
    }


}