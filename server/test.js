const {Pool} = require('pg')
const bcrypt = require('bcrypt')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect().then(pool => {
    pool.query(`
        SELECT password FROM users WHERE id = 3;
    `).then(pass => {
        pool.query(`UPDATE users SET password='${bcrypt.hash(pass,10)}'`)
    }).then(
        pool.query(`
            SELECT * FROM users;
        `).then(pool => {console.log(pool)})
    )
})