const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const cors = require('cors')
const app=express()
const port = process.env.PORT || 3001
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user            : 'root',
    host            : 'localhost',
    password        : "",
    database        : 'UniFO'
 })
 

app.post("/user", (req, res) => {
    const Email = req.body.email;

    db.query("SELECT users.name, users.Email, student_info.Father, student_info.Mother,student_info.Gender, student_info.DOB, student_info.Blood, student_info.District, student_info.Address FROM users, student_info WHERE users.Email=student_info.Email AND users.Email=(?)",
    [Email], (error, results) => {
        if (error)  {res.send({err: err})}
            res.send(results);
        
    });
});

app.post("/", (req, res) => {
    const Name = req.body.username;
    const Type = req.body.usertype;
    const Password = req.body.password;
    const Email = req.body.email;

    db.query("INSERT INTO users (name,type,password,email) VALUES (?,?,?,?)",
    [Name,Type,Password,Email], (error, results) => {
        if (error)  return console.log(error.message);
    });
});

app.post("/login", (req, res) => {
    const Password = req.body.password;
    const Email = req.body.email;

    db.query("SELECT email, password, type FROM users WHERE email = (?) AND password = (?)",
    [Email,Password], (error, results) => {
        if (error)  {res.send({err: err})}
            if(results.length>0)
            {res.send(results)}
            else {res.send({message: "Wrong username/password combination!"})}
       
    });
});

app.get("/", (req, res) => {
    db.query("SELECT * FROM users", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.post("/editstudentinfo", (req, res) => {
    const Mother = req.body.Mother;
    const Father = req.body.Father;
    const Email = req.body.email;

    db.query("UPDATE student_info SET Father=(?), Mother=(?) WHERE Email=(?)",
    [Father,Mother,Email], (error, results) => {
        if (error)  return console.log(error.message);
    });
});

app.post("/uniList", (req, res) => {
    db.query("SELECT * FROM all_universities", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.get("/uniList", (req, res) => {
    db.query("SELECT * FROM all_universities", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

var allUniversityList = "All University";
app.use(express.static(allUniversityList));

app.listen(port, () =>{
    console.log("running on port 3001");
});

