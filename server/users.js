const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.connect().then(pool => {
    pool.query(`
    INSERTO INTO users (name, email, password)
    VALUES (
        "Gean Araujo",
        "coder.gean@gmail.com",
        "password"
    );
`).then(pool =>  {
    pool.query(`
        SELECT * FROM users;
    `).then(pool => {
        console.log(pool)
    })
})
})