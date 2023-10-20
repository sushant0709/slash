const { request } = require('http');
const express = require('express');
const {exec} = require('child_process');
var bodyParser=require("body-parser");
const mysql = require('mysql');
const app = express();
let cors = require("cors");
var fs = require('fs');
// const collect = require('collect.js');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nnd09082001*",
    database: "database - db",
    port: "3306"
});

connection.connect((err) =>{
    if(err){
        throw err;
    } else{
        console.log("Connection Successful!");
    }
});

activeUser = null;
app.use(cors());
app.use(bodyParser.json());


app.get("/activeUserGet", function (req,res) {
    // console.log(activeUser)
    res.send(String(activeUser))
    // console.log(`Sent Active user - ${activeUser} to the function.js file`)
})

user_database = []
app.get("/getUserData", function (req,res) {
    connection.query(`Select email_id, password, user_id from users`, function (err, results, fields) {
        for(let i = 0; i<results.length; i++){
            user_database.push([results[i].email_id, results[i].password, results[i].user_id])
        }
        // console.log("Sending the data from the database(users) to the login.js file")
        // console.log(user_database)
        res.send(user_database)
    })
    user_database = []
})


app.post("/SignUp", function (req, res) {
    let email = req.body.user_id;
    let password = req.body.password;
    connection.query(`Insert into users (password, email_id) values ('${password}', '${email}')`);
    // console.log(`${email} added ✔️`)
})

app.post("/activeUser", function (req, res) {
    let user_id = req.body.id;
    activeUser = user_id;
    // console.log(`user(${user_id}) fetched 👤`)
    // console.log(active_user)
})

// npmScriptRunner.js

app.post("/Redirect", function (req, res) {
  executeNpmStart();
  function executeNpmStart() {
    const options = {
      cwd: '/Users/nisargdoshi/Downloads/slash/slash-main/client', // Specify the folder where npm start should be executed
    };
    const childProcess = exec('npm start', options, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`npm start error: ${stderr}`);
        return;
      }
      console.log(`npm start output: ${stdout}`);
    });
  }
})


const port = process.env.port || 5000;
app.listen(port);

// console.log("App is listening on port " + port);

