// DEPENDENCIES
var express = require("express");
var path = require("path");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "7kOA*d20lARH",
    database: "colors"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected");
  });

var PORT = 8080;

var app = express();

app.get("/", function(req, res){
    //connection.query()
    // SELECT * FROM USERCOLORS
    // WILL RETURN AN ARRAY OF OBJECTS
    // SEND IT BACK TO THE FRONT END - RES.JSON
})

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

