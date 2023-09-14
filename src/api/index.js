const express = require('express')
const router = express.Router()

const tarefasRouter = require('./tarefas')
const usuarioRouter = require('./usuario')


router.get('/', (req, res) => {
    res.render('index');
})

router.get('/paginadecadastro', (req, res) => {
    res.render('cadastro');
});

router.use('/tarefas', tarefasRouter)
router.use('/usuario', usuarioRouter)

module.exports = router;