const express = require('express')
const router = express.Router()
const { tarefa } = require('../models')

router.get('/tarefas', async (req, res) => {
    const usuarioId = req.session.usuarioId;
   
    const tarefas = await tarefa.findAll({ where: { usuarioId } });
    res.render('tarefas', { tarefas }
    );
    res.render('tarefas', { tarefas });
}) 

router.post('/adiciona', async (req, res) => {
    try{ 
        const usuarioId = req.session.usuarioId;
        const { tarefaNome, status } = req.body;
        await tarefa.create({ tarefaNome, status, usuarioId });
        res.send('Tarefa adicionada');
    }catch (erro){
        console.log(erro);
        res.status(500).send('Um erro ocorreu quando adicionava a tarefa');
    }
})

router.put('/altera-status/:id', async (req, res) => {
    const id = req.params.id;
    const usuarioId = req.session.usuarioId;
    const { status } = req.body;
    await tarefa.update({ status }, { where: { id, usuarioId } });
    res.json({ message: 'Tarefa Atualizada' });
});

router.delete('/delete-tarefa/:id', async (req, res) => {
    const id = req.params.id;
    const usuarioId = req.session.usuarioId;
    await tarefa.destroy({ where: { id, usuarioId }});
    res.json({ message: 'Tarefa removida'});
})

module.exports = router