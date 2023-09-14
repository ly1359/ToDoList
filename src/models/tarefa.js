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
    });
    Tarefa.associate = function(models) {
        Tarefa.belongsTo(models.Usuario, {
            foreignKey:'usuarioId',
            as : "usuario"
        });
    };

    return Tarefa
}

module.exports = tarefa