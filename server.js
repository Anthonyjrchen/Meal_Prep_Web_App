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

// app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.set("view engine", "ejs");

// HTML FILES
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/dashboard", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dashboard.html"));
});
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "contact.html"));
});

// PHP FILES
app.get("/contact.php", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "contact.php"));
});

// CSS FILES
app.get("/index-styles", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "css", "index-styles.css"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));