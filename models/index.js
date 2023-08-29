const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Tarefa = require('./tarefa')

const tarefa = Tarefa(sequelize, Sequelize)

const db = {
    tarefa,
    sequelize
}

module.exports = db