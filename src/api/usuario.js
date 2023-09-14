const express = require('express')
const router = express.Router()
const { usuario } = require('../models')
const bcrypt = require ('bcrypt');

router.post('/login', async (req, res) => {
    const { usuario_nome, usuario_senha} = req.body;
    try{
        const user =  await usuario.findOne({where: {usuario_nome } });
        if(!user) {
            return res.status(404).json({error: 'Usuario nao encontrado'})
        }
        const match = await bcrypt.compare(usuario_senha, user.usuario_senha);
        if(!match) {
            return res.status(401).json({ error:'Senha invalida'});
        }

        req.session.usuarioId = user.id; 
        res.redirect('/tarefas/');
    }catch (err) {
        return res.status(500).json({error: 'Ocorreu um erro ao fazer login'});
    }
});

router.post('/cadastro', async (req, res) => {
    let {usuario_nome, usuario_senha, usuario_email } = req.body;

    usuario_nome = usuario_nome.trim();
    usuario_senha = usuario_senha.trim();
    usuario_email = usuario_email.trim();

    if (!usuario_nome || !usuario_senha || !usuario_email) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
        const existeUser = await usuario.findOne({ where: { usuario_nome }});
        if(existeUser) {
            return res.status(400).json({ error: 'Usuario ja existe'});
        }
        const novoUser = await usuario.create({
            usuario_nome,
            usuario_senha: await bcrypt.hash(usuario_senha, 10), 
            usuario_email
        });

        res.redirect('/');
    } catch (err) {
        return res.status(500).json({erro :'Erro no cadastro do usuário.'});
    }

});

module.exports = router