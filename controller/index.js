// Import the express library
const express = require("express");
// Import the path library
const path = require("path");
// Import the body-parser library
const bodyParser = require("body-parser");
// Create an express router
const route = express.Router();
// Import the User and Product models
const { User, Product } = require("../model");
// Create instances of the User and Product models
const user = new User();
const product = new Product();

// Set up the route for the homepage
// This route matches either the root URL or /DigitalDawn
// It sends the index.html file located in the view directory
route.get("^/$|/DigitalDawn", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

// Set up the routes for the user endpoints
// Login route
route.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});
// Fetch all users route
route.get("/users", (req, res) => {
  user.fetchUsers(req, res);
});
// Update user route
route.put("/user/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});
// Create user route
route.post("/register", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});
// Delete user route
route.delete("/user/:id", (req, res) => {
  user.deleteUser(req, res);
});

// Set up the routes for the product endpoints
// Fetch all products route
route.get("/products", (req, res) => {
  product.fetchProducts(req, res);
});
// Fetch single product route
route.get("/product/:id", (req, res) => {
  product.fetchProduct(req, res);
});
// Create product route
route.post("/product", bodyParser.json(), (req, res) => {
  product.addProduct(req, res);
});
// Update product route
route.put("/product/:id", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});
// Delete product route
route.delete("/product/:id", (req, res) => {
  product.deleteProduct(req, res);
});

// Export the router
module.exports = route;
