const express = require('express')
const routers = require('./src/api')
const { sequelize } = require('./src/models')
const path = require(`path`)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', routers)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync().then(() => {
})


app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



Object.keys(sequelize).forEach(modelName => {
    if(sequelize[modelName].associate) {
        sequelize[modelName].associate(sequelize);
    }
});

app.listen(3000, () => {
})

