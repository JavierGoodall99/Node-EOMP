// Database configuration
const db = require('../config');

// bcrypt module
const {hash, compare, hashSync } = require('bcrypt');

// Middleware for creating a token
const {createToken} = require('../middleware/AuthenticatedUser');


// User 
class User {
    // This method is responsible for authenticating a user
    login(req, res) {
      // Extract the email and password from the request body
      const { emailAdd, userPass } = req.body;
  
      // Construct a SQL query to select the user from the database
      const strQry = `
        SELECT firstName, lastName, gender, cellphoneNumber emailAdd, userPass, userRole, userProfile, joinDate
        FROM Users
        WHERE emailAdd = '${emailAdd}';
      `;
  
      // Execute the query and handle the result
      db.query(strQry, async (err, data) => {
        if (err) throw err;
        if ((!data.length) || (data == null)) {
          // If no user was found with the given email, return an error
          res.status(401).json({
            err: "The email address is incorrect"
          });
        } else {
          // If a user was found, compare the password hash with the one in the database
          await compare(userPass, data[0].userPass, (cErr, cResult) => {
            if (cErr) throw cErr;
            // If the passwords match, create a JWT token and save it as a cookie
            const jwToken = createToken({
              emailAdd,
              userPass
            });
            res.cookie('LegitUser', jwToken, {
              maxAge: 3600000,
              httpOnly: true
            })
            // Return a success message and the user data
            if (cResult) {
              res.status(200).json({
                msg: 'Logged in',
                jwToken,
                result: data[0]
              })
            } else {
              // If the passwords don't match, return an error
              res.status(401).json({
                err: 'You entered an invalid password or did not register. '
              })
            }
          })
        }
      })
    }
    // Retrieve all users
    fetchUsers(req, res) {
      // SQL query to select all users
      const strQry = `
          SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
          FROM Users;
      `;
  
      // Send the SQL query to the database to retrieve all users
      db.query(strQry, (err, data) => {
          if (err) {
              // If an error occurred while retrieving the users, throw the error
              throw err;
          } else {
              // If there are no errors, send the retrieved data to the client
              res.status(200).json({ results: data });
          }
      });
  }

    // Fetch user information from the database
    fetchUser(req, res) {
    // SQL query to select user information by ID
    const strQry = `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
        FROM Users
        WHERE userID = ?;
    `;
    // Execute the query with the user ID as a parameter
    db.query(strQry, [req.params.id], (err, data) => {
        if (err) {
            // If there's an error, throw an exception
            throw err;
        } else {
            // If successful, return the user information as a JSON object
            res.status(200).json({ results: data });
        }
    });
}

// Create a new user and save their information in the database
async createUser(req, res) {
    // Get user information from the request body
    let detail = req.body;
    // Hash the user's password using bcrypt with a cost factor of 15
    detail.userPass = await hash(detail.userPass, 15);
    // Set user information that will be used for authentication
    let user = {
        emailAdd: detail.emailAdd,
        userPass: detail.userPass
    };
    // SQL query to insert a new user into the database
    const strQry = `
        INSERT INTO Users
        SET ?;
    `;
    // Execute the query with user information as a parameter
    db.query(strQry, [detail], (err) => {
        if (err) {
            // If there's an error, return an error message
            res.status(401).json({ err });
        } else {
            // If successful, create a JSON Web Token and save it in a cookie with a duration of 1 hour
            const jwToken = createToken(user);
            res.cookie("LegitUser", jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            // Return a success message
            res.status(200).json({ msg: "A user record was saved." });
        }
    });
}
updateUser(req, res) {
    // Get the data from the request body
    let data = req.body;
    // If the user password is not null or undefined, hash the password
    if (data.userPass !== null || data.userPass !== undefined)
        data.userPass = hashSync(data.userPass, 15);
    // Set up the SQL query
    const strQry = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
    // Execute the query and update the user record with the given ID
    db.query(strQry, [data, req.params.id], (err) => {
        if (err) throw err;
        // Return a success message with status code 200
        res.status(200).json({ msg: "A row was affected" });
    })
}
    // This method deletes a user record from the database based on their ID
    deleteUser(req, res) {
    // SQL query to delete a user record based on their ID
    const strQry = 
    `
    DELETE FROM Users
    WHERE userID = ?;
    `;
    // Execute the query using the ID parameter passed in the request
    db.query(strQry,[req.params.id], 
        (err)=>{
        if(err) throw err;
        // Return a success message indicating that a record was removed from the database
        res.status(200).json( {msg: "A record was removed from a database"} );
    })    
}
}


// A class for handling product-related operations
class Product {
    // Fetch all products
    fetchProducts(req, res) {
        const strQry = `SELECT id, prodName, prodDescription, 
        levels, prodPrice, prodQuantity, imgURL
        FROM products;`;
        // Run the SQL query
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            // Return the query results
            res.status(200).json({results: results})
        });
    }
    // Fetch a specific product using the product id
    fetchProduct(req, res) {
        const strQry = `SELECT id, prodName, prodDescription, 
        levels, prodPrice, prodQuantity, imgURL
        FROM products
        WHERE id = ?;`;
        // Run the SQL query with a parameterized query
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            // Return the query results
            res.status(200).json({results: results})
        });
    }
    // Add a new product
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO Products
        SET ?;
        `;
        // Run the SQL query with the request body as the data
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    // Return an error if the query fails
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    // Return a success message if the query succeeds
                    res.status(200).json({msg: "Product saved"});
                }
            }
        );    

    }
    // Update an existing product using the product id
    updateProduct(req, res) {
        const strQry = 
        `
        UPDATE Products
        SET ?
        WHERE id = ?
        `;
        // Run the SQL query with the request body and product id as parameters
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    // Return an error if the query fails
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    // Return a success message if the query succeeds
                    res.status(200).json({msg: "Product updated"});
                }
            }
        );    

    }
    // Delete an existing product using the product id
    deleteProduct(req, res) {
        const strQry = 
        `
        DELETE FROM Products
        WHERE id = ?;
        `;
        // Run the SQL query with the product id as a parameter
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found."});
            // Return a success message if the query succeeds
            res.status(200).json({msg: "A product was deleted."});
        })
    }

}

// Export the user and product class
module.exports = {
    User, 
    Product
}
