const express = require('express')

const tarefasRouter = require('./tarefas')

const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/tarefas')
})

router.use('/tarefas', tarefasRouter)

module.exports = router