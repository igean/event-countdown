const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

const name = 'Gean Araujo'
const pass = 'password'

pool.connect().then(
    pool => {
        if (pool.query(`
            SELECT * FROM users WHERE name='${name}' AND password='${pass}'
        `)) {
            console.log('Conectado com sucesso')
        } else {
            console.log('Nome ou senha incorreta')
        }
    }
)