require("dotenv").config();
const { resolve } = require("path");
const pgp = require("pg-promise")(/* options */);

const db = pgp({
  host: "dpg-cn00hpicn0vc73arfngg-a.frankfurt-postgres.render.com",
  port: 5432,
  database: "staging_510n",
  user: "seak",
  password: "HLWiOrryKBsoPwAvjciJCIZHGBG6k5EI", // Put your password here
  ssl: { rejectUnauthorized: false },
});

function selectAllProductsFromPostgres(cb) {
  db.any("SELECT * FROM products")
    .then((data) => {
      cb.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      cb.status(500).json({ error: error.message });
    });
}

function insertProductIntoPostgres(cb, productName, productPrice) {
  db.any("INSERT INTO products(productName, productPrice) VALUES($1, $2)", [
    productName,
    productPrice,
  ])
    .then((result) => {
      cb.status(200).send(`Product was created successfully., ${result}`);
    })
    .catch((error) => {
      console.log(error);
      cb.status(500).json({ error: error.message });
    });
}

module.exports = {
  selectAllProductsFromSQLite,
  createProductinProductsSQLite,
  selectAllProductsFromPostgres,
};
