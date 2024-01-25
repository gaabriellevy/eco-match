const express = require('express');
const Routes = express.Router();

const usuarioController = require('./controllers/usuarioController');
const produtoController = require('./controllers/produtoController');

Routes.get('/usuarios', usuarioController.index);
Routes.get('/usuarios/:cpf', usuarioController.show);
Routes.post('/usuarios', usuarioController.store);
Routes.put('/usuarios/:cpf', usuarioController.update);
Routes.delete('/usuarios/:cpf', usuarioController.destroy);

Routes.get('/produtos', produtoController.index);
Routes.get('/produtos/:id', produtoController.show);
Routes.post('/produtos', produtoController.store);

module.exports = Routes;