const knexdb = require("../database/dbConfig")

module.exports = {
    async listPosts(req, res, next) {
        const result = await knexdb('posts');
        return res.json(result);
    },

    async listPostID(req, res, next) {
        const id = req.params.id;

        const result = knexdb('posts').where('id', id);

        if (id != result) {
            return res.json(`Não localizamos o ID: ${id} informado em nossa base de dados!`)
        } else {
            return res.json(result);
        }
    }
}