require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { resolve } = require("path");
const {
  selectAllProductsFromSQLite,
  createUserinSQLite,
  createProductinProductsSQLite,
} = require("./sqlite");

const app = express();
const port = 3010;

app.use(express.static("static"), bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  createUserinSQLite(res, username, email, password);
});

app.get("/products", (req, res) => {
  selectAllProductsFromSQLite(res);
});

app.post("/products", (req, res) => {
  const { productName, productPrice } = req.body;

  createProductinProductsSQLite(res, productName);
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
