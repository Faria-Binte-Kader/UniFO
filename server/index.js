const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const app=express()
const port = process.env.PORT || 3001
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const db = mysql.createConnection({
   host            : 'localhost',
   user            : 'root',
   password        : "",
   database        : 'UniFO'
})

app.get("/", (req, res) => {
    const query = "SELECT * FROM test";
    db.query(query, (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.listen(port, () =>{
    console.log("running on port 3001");
})