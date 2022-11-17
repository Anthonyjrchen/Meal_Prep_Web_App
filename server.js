const express = require("express");
const path = require("path");
var mysql = require('mysql');
const { createConnection } = require("net");
const app = express();
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'aggybear',
    database : 'mpwa_db'
});

db.connect(() => {
    console.log('Connected SQL!');
});

let post = {username: 'testUser2', password: 'testPassword2'};
db.query('INSERT INTO user_info SET ?', post);

// app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/dashboard", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dashboard.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));