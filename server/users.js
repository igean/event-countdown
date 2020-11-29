const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const register = (req, res) => {
    pool.connect().then(
        pool => {
            pool.query(`
                INSERT INTO users (name, email, password) VALUES (
                    '${req.body.name}',
                    '${req.body.email}',
                    '${req.body.password}'
                )
            `)
        }
    ).then(
        res.render('registrado')
    ).catch(error => {
        console.log(error)
    })
}

module.exports = app => app.use('/', register)