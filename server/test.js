const {Pool} = require('pg')
const bcrypt = require('bcrypt')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect().then(
    bcrypt.hash('23012020', 10, (err, hash) => {
    pool.query(`UPDATE users SET password = '${hash}' WHERE id=5;`)
    }))