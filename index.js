const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express()

app
.set('view engine', hbs)
.set('views', path.join(__dirname, 'views'))
.use(express.static('public'))


app.get('/', (request, response) => {
    response.render('countdown-events.hbs')
})

app.listen(process.env.PORT)