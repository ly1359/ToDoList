const express = require('express')
const routers = require('./src/api')
const { sequelize } = require('./src/models')
const path = require(`path`)

const app = express()
app.use(express.json())
app.use('/', routers)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync().then(() => {
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

Object.keys(sequelize).forEach(modelName => {
    if(sequelize[modelName].associate) {
        sequelize[modelName].associate(sequelize);
    }
});

app.listen(3000, () => {
})