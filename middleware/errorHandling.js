// Define a function called "handleErrors" that takes four parameters: err, req, res, and next
function errorHandling(err, req, res, next) {
    // Check if there's an error object passed to the function
    if (err) {
      // If there is, set the HTTP response status code to the status code of the error object, or 500 if it doesn't exist
      const status = err.status || 500;
  
      // Create an error message
      const errorMessage = "There was an error.";
  
      // Create an error response object that includes the status code and the error message
      const errorResponse = { status: status, err: errorMessage };
  
      // Send the error response as a JSON object in the HTTP response
      res.status(status).json(errorResponse);
    }
  
    // Pass control to the next middleware in the chain
    next();
  }
  
  // Export the "handleErrors" function so it can be used in other parts of the application
  module.exports = { errorHandling };