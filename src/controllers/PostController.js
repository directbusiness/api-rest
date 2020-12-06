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
    },

    async createPost(req, res, next) {
        try {
            const title = req.body;

            const result = await knexdb('posts').where('title', title);

            if (title == result) {
                return res.json({
                    mensagem: `Ja existe post com este titulo: ${result}`
                })
            } else {
                await knexdb('posts').insert();
                return res.json({ mensagem: `Novo post coom titulo ${title}, cadastrado com sucesso!` })
            }

        } catch (error) {
            next(error);
        }
    }
}