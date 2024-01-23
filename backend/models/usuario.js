'use strict';
const { Model } = require('sequelize');
const { cpf } = require('cpf-cnpj-validator');

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {}

    Usuario.init({
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                isCPF: function (value) {
                    if (!cpf.isValid(value)) {
                        throw new Error('O campo de CPF deve conter um CPF válido.');
                    }
                }
            }
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'O campo de e-mail deve conter um endereço de e-mail válido.'
                }
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isStrongPassword: {
                    args: [{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0 }],
                    msg: 'A senha deve conter no mínimo 8 caracteres, pelo menos 1 letra minúscula, 1 letra maiúscula e 1 número.'
                }
            }
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        primaryKey: 'cpf',
        modelName: 'Usuario'
    });

    return Usuario;
};