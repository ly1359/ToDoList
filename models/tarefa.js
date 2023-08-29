const tarefa = (sequelize, DataType) => {
    const Tarefa = sequelize.define('Tarefa', {
        tarefaNome: {
            type: DataType.STRING
        }, 
        status: {
            type: DataType.STRING
        },
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        tableName: 'tarefa'
    })

    return Tarefa
}

module.exports = tarefa