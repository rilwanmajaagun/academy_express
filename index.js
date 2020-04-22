const express = require("express");                        // npm install express, then import express
const academy = require("./route");   
const tester = require("./test")                   // creating a route called academy
const bodyParser = require("body-parser");               //  npm install body-parser, then import body-parser


let app = express();                                     // creating an object out of the express class.

let port = 8080;                                         // create variable to store your port
app.use(bodyParser.json());                              // this is a config and the body-parser is use to convert the input the client is sending
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port,()=>{
    console.log("Application Listening on port 8080");
});                                                         // making the object to listen to a particular port. 
app.get('/',(req, res)=>{
    return  res.status(200).json({
        message:"Welcome to simple express server"
    });                                                        // config the base route
});
app.use("/test", tester)
app.use("/academy", academy);                                    // extending our route using express router. 

module.exports = app                                             //exporting index.js