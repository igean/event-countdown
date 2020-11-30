const {Pool} = require('pg')
const bcrypt = require('bcrypt')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect().then(
    pool.query(`SELECT email, password FROM users WHERE email='crislanemiranda@gmail.com'`).then(results => {console.log(results.rows)})
)