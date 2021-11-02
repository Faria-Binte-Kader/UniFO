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
 
app.post("/users", (req, res) => {
    /*const Uname = req.body.uname;
    const Name = req.body.name;
    const Mail = req.body.mail;
    const Phone = req.body.phone;
    const Father = req.body.father;
    const Mother = req.body.mother;
    const Gender = req.body.gender;
    const Dob = req.body.mdob;
    const Blood = req.body.blood;
    const Address = req.body.address;*/
    const Uname = req.body.username;
    const Mail = req.body.email;
    const Phone = "";
    const Father = "";
    const Mother = "";
    const Gender = "";
    const Dob = "";
    const Blood = "";
    const Address = "";

    db.query("INSERT INTO users(Uname,Name,Mail,Phone,Father,Mother,Gender,Dob,Blood,Address) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [Uname,Name,Mail,Phone,Father,Mother,Gender,Dob,Blood,Address], (error, results) => {
        if (error)  return console.log(error.message);
        //res.send(results);
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
        //res.send(results);
    });
});

app.post("/login", (req, res) => {
    const Password = req.body.password;
    const Email = req.body.email;

    db.query("SELECT email, password FROM users WHERE email = (?) AND password = (?)",
    [Email,Password], (error, results) => {
        if (error)  {res.send({err: err})}
            if(results.length>0)
            {res.send(results)}
            else {res.send({message: "Wrong username/password combination!"})}
        //res.send(results);
    });
});

app.get("/", (req, res) => {
    db.query("SELECT * FROM users", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.listen(port, () =>{
    console.log("running on port 3001");
})