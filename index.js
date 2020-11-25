const express = require('express');
const path = require('path')

const app = express()

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

.listen(process.env.PORT)