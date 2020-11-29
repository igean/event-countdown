const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const urlParser = bodyParser.urlencoded({extended: false})

const app = express()

const register = require('./server/users')

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

.post('/cadastro', urlParser, register)

app.listen(process.env.PORT)