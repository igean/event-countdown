const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect().then(
    pool.query(`
            SELECT * FROM users WHERE  name='Gean Araujo' AND password='password';
        `).then(res => {console.log(res.rows)})
)