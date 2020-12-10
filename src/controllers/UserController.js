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

            const result = await knexdb('users').where('user', user)

            if (result == user) {
                return res.json({
                    mensagem: `${user} ja existe!`
                })

            } else {
                await knexdb('users').insert({ user, password });
                return res.json({ mensagem: `Usuário " ${user} " cadastrado com sucesso!` })
            }
        } catch (error) {
            next(error)
        }
    },

    async updateUserID(req, res, next) {
        try {
            const { user, password } = req.body;
            const { id } = req.params;

            const result = await knexdb('users').where('id', id);

            if (result == id) {
                await knexdb('users').update({ user, password }).where({ id });
                return res.json({
                    mensagem: `O usuario: ${user}, com ID: ${id} foi atualizado com sucesso!`
                })
            } else {
                return res.json({
                    mensagem: `Não localizamos usuario com os dados informados`
                })
            }


        } catch (error) {
            next(error)
        }
    },

    async deleteUserID(req, res, next) {
        try {
            const { id } = req.params;
            const result = await knexdb('users').where('id', id);

            if (result == id) {
                await knexdb('users').where({ id }).delete();
                return res.json({
                    mensagem: `Usuarios com ID: ${id} deletado com sucesso!`
                })
            } else {
                return res.json({
                    mensagem: `Não foi encontrado usuario com ID: ${id}. Tente outro ID`
                })
            }

        } catch (error) {
            next(error)
        }
    }


}