const express = require('express');
const path = require('path')

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
});

app.listen(process.env.PORT)