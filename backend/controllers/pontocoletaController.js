const { PontoDeColeta } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const pontosDeColeta = await PontoDeColeta.findAll();
            res.json(pontosDeColeta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao listar pontos de coleta.' });
        }
    },

    async show(req, res) {
        try {
            const pontoDeColeta = await PontoDeColeta.findByPk(req.params.id);

            if (pontoDeColeta) {
                return res.json(pontoDeColeta);
            } else {
                return res.status(404).json();
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro ao encontrar ponto de coleta.' });
        }
    },

    async store(req, res) {
        try {
            const { nome, endereco, capacidade } = req.body;
            const novoPontoDeColeta = await PontoDeColeta.create({ nome, endereco, capacidade });
            res.status(201).json(novoPontoDeColeta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar ponto de coleta.' });
        }
    }
}

