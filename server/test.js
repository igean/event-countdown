const {Pool} = require('pg')
const bcrypt = require('bcrypt')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect().then(
    pool.query(`SELECT email, password FROM users WHERE email='crislanemiranda2301@gmail.com'`).then(results => {
        if (results.rows.length < 1) {
            console.log('Usuário não encontrado')
        }else {
            console.log(results.rows.password)
        }}) 
)