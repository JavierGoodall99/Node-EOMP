// Import the express library
const express = require('express');

// Import the route controller
const route = require('./controller');

// Import the CORS library
const cors = require('cors');

// Set the server port
const port = parseInt(process.env.PORT) || 4000;

// Create a new express app
const app = express();

// Import the error handling middleware
const {errorHandling} = require('./middleware/errorHandling');

// Add a CORS header to all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});

// Mount the route controller on the app
app.use(route);

// Mount the middleware stack on the app
app.use(
  cors(),
  express.json(),
  express.urlencoded({extended: false}),
  require('cookie-parser')()
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Mount the error handling middleware on the app
app.use(errorHandling);
