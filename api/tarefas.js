const express = require('express')
const router = express.Router()
const { tarefa } = require('../models')

router.get('/', async (req, res) => {
    const tarefas = await tarefa.findAll();
    res.render('tarefas', { tarefas });
}) 

router.post('/adiciona', async (req, res) => {
    try{ 

        const { tarefaNome, status } = req.body;
        await tarefa.create({ tarefaNome, status });
        res.send('Tarefa adicionada');
    }catch (erro){
        console.log(erro);
        res.status(500).send('Um erro ocorreu quando adicionava a tarefa');
    }
})

router.put('/altera-status/:id', async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    await tarefa.update({ status }, { where: { id } });
    res.json({ message: 'Tarefa Atualizada' });
});

router.delete('/delete-tarefa/:id', async (req, res) => {
    const id = req.params.id;
    await tarefa.destroy({ where: { id }});
    res.json({ message: 'Tarefa removida'});
})

module.exports = router