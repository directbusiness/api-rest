const knexdb = require("../database/dbConfig");
const { tryCatch } = require('../errors');

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
            const { title, content } = req.body;

            const result = await knexdb('posts').where('title', title);

            if (title == result) {
                return res.json({
                    mensagem: `Ja existe post com este titulo: ${result}`
                })
            } else {
                await knexdb('posts').insert({ title, content });
                return res.json({ mensagem: `Novo post coom titulo ${title}, cadastrado com sucesso!` })
            }

        } catch (error) {
            next(error);
        }
    },

    async updatePostID(req, res, next) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;

            const result = await knexdb('posts').where('id', id);
            if (result == id) {
                await knexdb('posts').update({ title, content }).where({ id });
                return res.json({
                    mensagem: `Post atualizado com os novos dados: ${id}, ${title}, ${content}`
                })
            } else {

            }

        } catch (error) {
            next(error)
        }
    },

    async deletePostID(req, res, next) {
        try {
            const id = req.params;

            const result = await knexdb('posts').where('id', id);

            if (result == id) {
                await knexdb('posts').where({ id }).delete();
                return res.json({
                    mensagem: `O post com ID: ${id} deletado com sucesso`
                })
            } else {
                return res.json({
                    mensagem: `Não foi encontrado POSTS com ID: ${id}`
                })
            }

        } catch (error) {
            next(error)
        }
    }
}