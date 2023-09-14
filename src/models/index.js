const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Tarefa = require('./tarefa')
const Usuario = require('./usuario')

const tarefa = Tarefa(sequelize, Sequelize)
const usuario = Usuario(sequelize, Sequelize)

usuario.hasMany(tarefa, {as: 'Tarefas', foreignKey: 'usuarioId'});

tarefa.belongsTo(usuario, {as: 'Usuario', foreigKey: 'usuarioId'});

const db = {
    tarefa,
    usuario,
    sequelize
}

module.exports = db