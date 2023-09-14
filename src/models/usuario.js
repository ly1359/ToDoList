const usuario = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        usuario_nome:{
            type: DataTypes.STRING
        }, 
        usuario_senha: {
            type :DataTypes.STRING(60),
            allowNull: false
        },
        usuario_email: {
            type: DataTypes.STRING,
            allowNul: false,
            validate: {
                isEmail: true
            }
        } 
    }, {
        tableName: 'usuarios'
    });
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Tarefa, {
            foreignKey: 'usuarioId', 
            as: 'tarefas',
        });
    };
    return Usuario
}

module.exports = usuario