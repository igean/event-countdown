const { hash } = require('bcrypt')
const {Pool} = require('pg')
bcrypt = require('bcrypt')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const register = (req, res) => {
    bcrypt.hash(req.body.pass, 10, (err, hash) => {

        req.body.pass = hash

        pool.connect().then(async pool => {
            
                pool.query(`
                INSERT INTO users (name, email, password)   VALUES (
                    '${req.body.name}',
                    '${req.body.email}',
                    '${req.body.pass}'
                )
            `)

            return res.render('registrado')
        })
    })
}

module.exports = register