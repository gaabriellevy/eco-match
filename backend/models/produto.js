'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produto extends Model {}

    Produto.init({
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

    }, {
        sequelize,
        modelName: 'Produto'
    });

    return Produto;
};
