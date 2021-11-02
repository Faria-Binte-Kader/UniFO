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
    [Email,Password,], (error, results) => {
        if (error)  {res.send({err: err})}
            if(results.length>0)
            {res.send(results)}
            else {res.send({message: "Wrong username/password combination!"})}
        //res.send(results);
    });
});


app.listen(port, () =>{
    console.log("running on port 3001");
})