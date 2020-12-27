const knexdb = require('../database/dbConfig');
const tryErrors = require('../errors');

module.exports = {

    async listCompany(re, res, next) {
        try {
            const result = await knexdb('company').select('*');

            if (result == '') {
                return res.json({ message: "Não há companhia cadastrada" })
            } else {
                return res.json(result);
            }

        } catch (error) {
            next(tryErrors)
        }
    },

    async createCompany(req, res, next) {
        try {
            const { company_name, comercial_name } = req.bady;

            const result = await knexdb('company').insert().where({ company_name, comercial_name });
            if (company_name || comercial_name == result) {
                return res.json({ message: `${result}, Companhia ja cadastrada` })
            } else {
                return res.json({ message: `Companhia ${comercial_name} ${company_name}, , cadastrada com sucesso` })
            }

        } catch (error) {
            next(tryErrors)
        }
    }
}