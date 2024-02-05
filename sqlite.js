require("dotenv").config();

const { resolve } = require("path");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./bin/pocketbase_db/pb_data/data.db");

function selectAllProductsFromSQLite(cb) {
  db.all(`SELECT * FROM products`, [], (err, rows) => {
    if (err) {
      return cb.status(500).json({ error: err.message });
    }
    cb.send(rows);
  });
}

function createProductinProductsSQLite(cb, name) {
  db.run(`INSERT INTO products(name) VALUES(?)`, [name], function (err) {
    if (err) {
      return cb.status(500).json({ error: err.message });
    }
    cb.send(`Product with ID: ${this.lastID} was created successfully.`);
  });
}

function createUserinSQLite(cb, username, email, password) {
  db.run(
    `INSERT INTO users(username, email, password) VALUES(?, ?)`,
    [username, email, password],
    function (err) {
      if (err) {
        return cb.status(500).json({ error: err.message });
      }
      cb.send(`User with ID: ${this.lastID} was created successfully.`);
    }
  );
}

module.exports = {
  selectAllProductsFromSQLite,
  createProductinProductsSQLite,
  createUserinSQLite,
};
