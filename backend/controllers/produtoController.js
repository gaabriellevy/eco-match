const { Produto } = require('../models');

module.exports = {
    async index (req, res) {
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao listar produtos.' });
        }
    },

    async store (req, res) {
        try {
            const { nome, descricao, preco } = req.body;
            const novoProduto = await Produto.create({ nome, descricao, preco });
            res.status(201).json(novoProduto);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar produto.' });
        }
    }
}