const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const private = require("./private/token.json");

// Start connection with PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
pool.connect();

// Register user
const register = (req, res) => {
  if (req.body.pass !== req.body.r_pass) {
    return res.send("cadastro");
  }

  // Check if user alredy exists
  pool
    .query(`SELECT * FROM users WHERE email='${req.body.email}'`)
    .then((results) => {
      if (results.rows.length > 0) {
        return res.send("Este email já está cadatrado");
      }
    });

  // Hash password
  bcrypt.hash(req.body.pass, 10, (err, hash) => {
    if (err) {
      return res.status(400).send("Erro no cadastro");
    }
    req.body.pass = hash;

    // Insert new user to database
    pool.query(`
            INSERT INTO users (name, email, password)   VALUES (
                '${req.body.name}',
                '${req.body.email}',
                '${req.body.pass}'
            )
        `);

    return res.render("login");
  });
};

// Login user
const login = (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  // Check if user really exists
  pool.query(`SELECT * FROM users WHERE email='${email}'`).then((results) => {
    if (results.rows.length < 1) {
      return res.send("Usuário não encontrado");
    } else {
      // Check if password is correct
      bcrypt.compare(pass, results.rows[0].password).then((r) => {
        if (r == true) {
          return res.render("teste");
        } else {
          return res.send("senha incorreta");
        }
      });
    }
  });
};

module.exports = { register, login };