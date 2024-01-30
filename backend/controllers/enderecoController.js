const { Endereco } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const enderecos = await Endereco.findAll();
            res.json(enderecos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao listar endereços.' });
        }
    },

    async show(req, res) {
        try {
            const endereco = await Endereco.findByPk(req.params.id);

            if (endereco) {
                return res.json(endereco);
            } else {
                return res.status(404).json();
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao encontrar endereço.' });
        }
    },

    async store(req, res) {
        try {
            const { rua, numero, cidade, estado } = req.body;
            const novoEndereco = await Endereco.create({ rua, numero, cidade, estado });
            res.status(201).json(novoEndereco);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar endereço.' });
        }
    }
}
