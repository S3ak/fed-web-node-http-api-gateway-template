// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const { resolve } = require("path");

// Import functions from sqlite.js
const {
  selectAllProductsFromSQLite,
  createUserinSQLite,
  createProductinProductsSQLite,
} = require("./sqlite");

// Initialize Express app
const app = express();
const port = 3010;

// Middleware for serving static files and parsing JSON request bodies
app.use(express.static("static"), bodyParser.json());

/**
 * Root route that serves the index.html file
 */
app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

/**
 * Route for getting user data
 */
app.get("/users", (req, res) => {
  res.send("Users");
});

/**
 * Route for creating a new user
 */
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  createUserinSQLite(res, username, email, password);
});

/**
 * Route for getting all products
 */
app.get("/products", (req, res) => {
  selectAllProductsFromSQLite(res);
});

/**
 * Route for creating a new product
 */
app.post("/products", (req, res) => {
  const { productName, productPrice } = req.body;

  createProductinProductsSQLite(res, productName);
});

/**
 * Route for getting machine data
 */
app.get("/machines", (req, res) => {
  res.send("Machines");
});

/**
 * Route for getting transaction data
 */
app.get("/transactions", (req, res) => {
  res.send("Transactions");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
