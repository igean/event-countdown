const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const urlParser = bodyParser.urlencoded({extended: false})

const app = express()

const controllers = require('./server/users')

app
.set('view engine', 'hbs')
.set('views', path.join(__dirname, 'views'))

.use(express.static(path.join(__dirname, 'static')))

.get('/', (req, res) => {
    return res.render('index')
})

.get('/cadastro', (req, res) => {
    return res.render('cadastro')
})

.get('/login', (req, res) => {
    return res.render('login')
})

.get('/teste', (req, res) => {
    res.render('teste')
})

.post('/cadastro', urlParser, controllers.register)

.post('/login', urlParser, controllers.login)

app.listen(process.env.PORT)