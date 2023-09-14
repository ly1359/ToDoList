require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'listadetarefas',
    username: 'postgres',
    password: '654321'
}

// dialect: process.env.DB_DIALECT,
// host: process.env.DB_HOST,
// port: process.env.DB_PORT,
// database: process.env.DB_NAME,
// username: process.env.DB_USER,
// password: process.env.DB_PASS