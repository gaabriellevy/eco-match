'use strict';
const { Model } = require('sequelize');
const Usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
    class PontoColeta extends Model {}

    PontoColeta.init({
        endereco: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cep: {
            type: DataTypes.INTEGER(8),
            allowNull: false,
        },
        cpf_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'PontoColeta',
    });

    PontoColeta.belongsTo(Usuario, {foreignKey: 'cpf_usuario'});

    return PontoColeta;
};