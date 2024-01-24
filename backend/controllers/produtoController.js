const db = require('../models');
const Produto = db.Produto;

const listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar produtos.' });
    }
};

const criarProduto = async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;
        const novoProduto = await Produto.create({ nome, descricao, preco });
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar produto.' });
    }
};

module.exports = {
    listarProdutos,
    criarProduto,
};
