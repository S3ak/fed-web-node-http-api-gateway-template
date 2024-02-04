const express = require("express");
const { resolve } = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3010;
const db = new sqlite3.Database("./bin/pocketbase_db/pb_data/data.db");

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  db.run(
    `INSERT INTO users(username, email, password) VALUES(?, ?)`,
    [username, email, password],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.send(`User with ID: ${this.lastID} was created successfully.`);
    }
  );
});

app.get("/products", (req, res) => {
  db.all(`SELECT * FROM products`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.send(rows);
  });
});

app.post("/products", (req, res) => {
  console.log(req.body);
  const { name } = req.query;

  db.run(`INSERT INTO products(name) VALUES(?)`, [name], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.send(`Product with ID: ${this.lastID} was created successfully.`);
  });
});

app.get("/machines", (req, res) => {
  res.send("Machines");
});

app.get("/transactions", (req, res) => {
  res.send("Transactions");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
