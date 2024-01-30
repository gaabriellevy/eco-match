const { CategoriaProduto } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const categoriasProdutos = await CategoriaProduto.findAll();
            res.json(categoriasProdutos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao listar categorias de produtos.' });
        }
    },

    async show(req, res) {
        try {
            const categoriaProduto = await CategoriaProduto.findByPk(req.params.id);

            if (categoriaProduto) {
                return res.json(categoriaProduto);
            } else {
                return res.status(404).json();
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao encontrar categoria de produto.' });
        }
    },

    async store(req, res) {
        try {
            const { nome, descricao } = req.body;
            const novaCategoriaProduto = await CategoriaProduto.create({ nome, descricao });
            res.status(201).json(novaCategoriaProduto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar categoria de produto.' });
        }
    }
};
