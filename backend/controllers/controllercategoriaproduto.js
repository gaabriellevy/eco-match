const { Categoria } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const items = await Categoria.findAll();
            res.json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao listar categorias de produtos.' });
        }
    },

    async show(req, res) {
        try {
            const item = await Categoria.findByPk(req.params.id);

            if (item) {
                return res.json(item);
            } else {
                return res.status(404).json();
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao encontrar categoria.' });
        }
    },

    async store(req, res) {
        try {
            const { nome, descricao } = req.body;
            const novaCategoria = await Categoria.create({ nome, descricao });
            res.status(201).json(novaCategoria);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar categoria.' });
        }
    }
};
