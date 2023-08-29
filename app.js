const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')
const path = require(`path`)

const app = express()
app.use(express.json())
app.use('/', routers)
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync().then(() => {
    console.log("Database connected")
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000, () => {
    console.log('App online!!')
})