const knexdb = require("../database/dbConfig")

module.exports = {
    async listPosts(req, res, next) {
        try {
            const result = await knexdb('posts');

            if (result == '') {
                return res.json({ mensagem: "Não foi encontrado nenhum registro!" })
            } else {
                return res.json(result);
            }

        } catch (error) {
            next(error)
        }
    },

    async listPostID(req, res, next) {
        try {
            const id = req.params.id;
            const result = await knexdb('posts').where('id', id);

            if (result == '') {
                return res.json({ mensagem: ` Não encontramos nenhum resultado com o ID: ${id}` })
            } else {
                return res.json(result);
            }

        } catch (error) {
            next(error);
        }
    }
}