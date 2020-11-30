const {Pool} = require('pg')
const bcrypt = require('bcrypt')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect()
const register = (req, res) => {
    if (req.body.pass !== req.body.r_pass) {
        return res.send('cadastro')
    }

    pool.query(`SELECT * FROM users WHERE email='${req.body.email}'`).then(
        results => {
            if (results.rows.length > 0) {
                return res.send('Este email já está cadatrado')
            }
        })

        bcrypt.hash(req.body.pass, 10, (err, hash) => {

        if (err) {
            return res.status(400).send('Erro no cadastro')
        }
            
        req.body.pass = hash
                        
        pool.query(`
            INSERT INTO users (name, email, password)   VALUES (
                '${req.body.name}',
                '${req.body.email}',
                '${req.body.pass}'
            )
        `)
        return res.render('registrado')
    })
}

const login = (req, res) => {
    const email = req.body.email
    const pass = req.body.pass

    pool.query(`SELECT email, password FROM users WHERE email='${email}'`).then(results => {
        if (results.rows.length < 1) {
            return res.send('Usuário não encontrado')
        }else {
            bcrypt.compare(pass,results.rows[0].password).then(r => {
                if (r == true) {
                    return res.send('autenticado')
                } else {
                    return res.send('senha incorreta')
                }
            })
        }})
}

module.exports = {register, login}