const { Usuario } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async show(req, res) {

        try {
            const item = await Usuario.findByPk(req.params.cpf);

            if (item) {
                return res.json(item);
            }else {
                return res.status(404).json();
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const item = await Usuario.findOne({ where: { email: email, senha: senha } });


            if (item) {
                return res.send({login: 'success', userData: item});
            }else {
                return res.send({login: 'failed'});
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async store(req, res) {
        try {
            const { nome, email, cpf, senha, endereco } = req.body;

            cpfSemFormatacao = cpf.replace(/[.-]/g, '');

            const novoUsuario = await Usuario.create({ nome, email, cpf: cpfSemFormatacao, senha, endereco });
            return res.json(novoUsuario);
        } catch (error) {
            console.error(error);

            if (error.name == "SequelizeUniqueConstraintError") {
                return res.status(400).json({ error: 'CPF já cadastrado.' });
            } else if (error.name == "SequelizeValidationError") {
                return res.status(400).json({ error: error.errors.map(err => ({ field: err.path, message: err.message })) });
            } else {
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if(error.name == "SequelizeValidationError") {
                return res.status(500).json({ error: error.message });
            }else {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    },

    async update(req, res) {
        try {
            const { nome, email, cpf, senha, endereco } = req.body;

            await Usuario.update({
                nome: nome,
                email: email,
                cpf: cpf,
                senha: senha,
                endereco: endereco
            },
            {
                where:{ cpf: req.params.cpf }
            })

            return res.status(204).send()
        }catch(error) {
            console.error(error)
            
            if(error.name == "SequelizeValidationError") {
                return res.status(500).json({ error: error.message });
            }else {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    },

    async destroy(req, res) {
        try {
            const usuarioEncontrado = await Usuario.findByPk(req.params.cpf);

            if(!usuarioEncontrado){
                return res.status(404).json();
            }

            await usuarioEncontrado.destroy();
            return res.json()
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}