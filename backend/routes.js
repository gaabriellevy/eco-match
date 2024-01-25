const express = require('express');
const Routes = express.Router();

const usuarioController = require('./controllers/usuarioController');

Routes.get('/usuarios', usuarioController.index);
Routes.get('/usuarios/:cpf', usuarioController.show);
Routes.post('/usuarios', usuarioController.store);
Routes.put('/usuarios/:cpf', usuarioController.update);
Routes.delete('/usuarios/:cpf', usuarioController.destroy);

module.exports = Routes;