const db = require('../models');
const PontoColeta = db.PontoColeta;

const listarPontosColeta = async (req, res) => {
  try {
    const pontosColeta = await PontoColeta.findAll();
    res.json(pontosColeta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar pontos de coleta.' });
  }
};

const criarPontoColeta = async (req, res) => {
  try {
    const { nome, endereco } = req.body;
    const novoPontoColeta = await PontoColeta.create({ nome, endereco });
    res.status(201).json(novoPontoColeta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar ponto de coleta.' });
  }
};

module.exports = {
  listarPontosColeta,
  criarPontoColeta,
};
