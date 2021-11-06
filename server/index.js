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

app.post("/uniuser", (req, res) => {
    const Email = req.body.email;

    db.query("SELECT users.name, users.Email, university_info.Name, university_info.Website, university_info.Location, university_info.General, university_info.Duration, university_info.Tuition, university_info.Scholarship, university_info.Admissiondate, university_info.Type FROM users, university_info WHERE users.Email=university_info.Email AND users.Email=(?)",
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
    const Name = req.body.Name;
    const Mother = req.body.Mother;
    const Father = req.body.Father;
    const Email = req.body.email;
    const Gender = req.body.Gender;
    const Dob = req.body.Dob;
    const Blood = req.body.Blood;
    const District = req.body.District;
    const Address = req.body.Address;

    db.query("UPDATE student_info SET Name=(?), Father=(?), Mother=(?), Gender=(?), DOB=(?), Blood=(?), District=(?), Address=(?) WHERE Email=(?)",
    [Name,Father,Mother,Gender,Dob,Blood,District,Address,Email], (error, results) => {
        if (error)  return console.log(error.message);
    });

    db.query("UPDATE users SET Name=(?) WHERE Email=(?)",
    [Name,Email], (error, results) => {
        if (error)  return console.log(error.message);
    });
});

app.post("/edituniinfo", (req, res) => {
    const Name = req.body.Name;
    const Email = req.body.email;
    const Location = req.body.Location;
    const Website = req.body.Website;
    const General = req.body.General;
    const Duration = req.body.Duration;
    const Tuition = req.body.Tuition;
    const Scholarship = req.body.Scholarship;
    const Admissiondate = req.body.Admissiondate;
    const Type = req.body.Type;

    db.query("UPDATE university_info SET Name=(?), Location=(?), Website=(?), General=(?), Duration=(?), Tuition=(?), Scholarship=(?), Admissiondate=(?), Type=(?) WHERE Email=(?)",
    [Name,Location,Website,General,Duration,Tuition,Scholarship,Admissiondate,Type,Email], (error, results) => {
        if (error)  return console.log(error.message);
    });

    db.query("UPDATE users SET Name=(?) WHERE Email=(?)",
    [Name,Email], (error, results) => {
        if (error)  return console.log(error.message);
    });
});

app.post("/editdeptinfo", (req, res) => {
    const Name = req.body.Name;
    const Email = req.body.email;
    const About = req.body.About;
    const Programs = req.body.Programs;

    db.query("UPDATE department_info SET About=(?), Programs=(?) WHERE Email=(?) AND Name=(?)",
    [About,Programs,Email,Name], (error, results) => {
        if (error)  return console.log(error.message);
    });
});

app.post("/uniList", (req, res) => {
    db.query("SELECT * FROM university_info", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.post("/uniList", (req, res) => {
    db.query("SELECT * FROM university_info", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.post("/departmentinfo", (req, res) => {
    const Email = req.body.email;

    db.query("SELECT users.Name, users.Email, department_info.Email, department_info.Name, department_info.University, department_info.About, department_info.Programs FROM users, department_info WHERE users.Email=department_info.Email AND users.Email=(?)",
    [Email], (error, results) => {
        if (error)  {res.send({err: err})}
            res.send(results);
        
    });
});

app.post("/departmentdetails", (req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;

    db.query("SELECT * FROM department_info WHERE Name=(?) AND Email=(?)",
    [Name, Email], (error, results) => {
        if (error)  {res.send({err: err})}
            res.send(results);
        
    });
});

app.post("/quickaccess", (req, res) => {
    db.query("SELECT * FROM university_info ORDER BY name LIMIT 4", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.post("/sortdown", (req, res) => {
    db.query("SELECT * FROM university_info ORDER BY name", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.post("/sortup", (req, res) => {
    db.query("SELECT * FROM university_info ORDER BY name DESC", (error, results) => {
        if (error)  return console.error(error.message);
        res.send(results);
    })
});

app.post("/uniListSearchName", (req, res) => {
    const Name = req.body.Name;
    db.query("SELECT * FROM university_info WHERE Name LIKE '%" + Name + "%' ORDER BY Name ASC",
        [Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});


app.post("/uniListSearchLocation", (req, res) => {
    const Location = req.body.Location;
    db.query("SELECT * FROM university_info WHERE Location=(?) ORDER BY Name ASC",
        [Location], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchNameLocation", (req, res) => {
    const Location = req.body.Location;
    const Name = req.body.Name;
    db.query("SELECT * FROM university_info WHERE Location=(?) AND Name LIKE '%" + Name + "%' ORDER BY Name ASC",
        [Location,Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchType", (req, res) => {
    const Type = req.body.Type;
    db.query("SELECT * FROM university_info WHERE Type=(?) ORDER BY Name ASC",
        [Type], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchNameType", (req, res) => {
    const Type = req.body.Type;
    const Name = req.body.Name;
    db.query("SELECT * FROM university_info WHERE Type=(?) AND Name LIKE '%" + Name + "%' ORDER BY Name ASC",
        [Type,Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchLocationType", (req, res) => {
    const Type = req.body.Type;
    const Location = req.body.Location;
    db.query("SELECT * FROM university_info WHERE Type=(?) AND Location=(?) ORDER BY Name ASC",
        [Type,Location], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchNameLocationType", (req, res) => {
    const Name = req.body.Name;
    const Type = req.body.Type;
    const Location = req.body.Location;
    db.query("SELECT * FROM university_info WHERE Type=(?) AND Location=(?) AND Name LIKE '%" + Name + "%' ORDER BY Name ASC",
        [Type,Location,Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

//for DESC Search
app.post("/uniListSearchNameUp", (req, res) => {
    const Name = req.body.Name;
    db.query("SELECT * FROM university_info WHERE Name LIKE '%" + Name + "%' ORDER BY Name DESC",
        [Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});


app.post("/uniListSearchLocationUp", (req, res) => {
    const Location = req.body.Location;
    db.query("SELECT * FROM university_info WHERE Location=(?) ORDER BY Name DESC",
        [Location], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchNameLocationUp", (req, res) => {
    const Location = req.body.Location;
    const Name = req.body.Name;
    db.query("SELECT * FROM university_info WHERE Location=(?) AND Name LIKE '%" + Name + "%' ORDER BY Name DESC",
        [Location,Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchTypeUp", (req, res) => {
    const Type = req.body.Type;
    db.query("SELECT * FROM university_info WHERE Type=(?) ORDER BY Name DESC",
        [Type], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchNameTypeUp", (req, res) => {
    const Type = req.body.Type;
    const Name = req.body.Name;
    db.query("SELECT * FROM university_info WHERE Type=(?) AND Name LIKE '%" + Name + "%' ORDER BY Name DESC",
        [Type,Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchLocationTypeUp", (req, res) => {
    const Type = req.body.Type;
    const Location = req.body.Location;
    db.query("SELECT * FROM university_info WHERE Type=(?) AND Location=(?) ORDER BY Name DESC",
        [Type,Location], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/uniListSearchNameLocationTypeUp", (req, res) => {
    const Name = req.body.Name;
    const Type = req.body.Type;
    const Location = req.body.Location;
    db.query("SELECT * FROM university_info WHERE Type=(?) AND Location=(?) AND Name LIKE '%" + Name + "%' ORDER BY Name DESC",
        [Type,Location,Name], (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/notices", (req, res) => {
    const email = req.body.Email;
    const title = req.body.Title;
    const details = req.body.Details;

    db.query("INSERT INTO notices (UniMail, Title, Details) VALUES (?,?,?)",
    [email, title, details], (error, results) => {
        if (error)  return console.log(error.message);
    });
});

app.post("/uniprofilescreen", (req, res) => {
    const Email = req.body.Email;

    db.query("SELECT * FROM university_info WHERE Email=(?)",
        [Email], (error, results) => {
            if (error) { res.send({ err: err }) }
            res.send(results);

        });
});

app.post("/getNotices", (req, res) => {
    db.query("SELECT notices.UniMail, notices.Title, notices.ID, notices.Details, university_info.Name, university_info.imageURL FROM notices, university_info WHERE notices.UniMail=university_info.Email",
        (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

app.post("/noticedetails", (req, res) => {
    const nid = req.body.id;
    db.query("SELECT * FROM notices WHERE ID=(?)",[nid],
        (error, results) => {
            if (error) return console.error(error.message);
            res.send(results);
        })
});

var allUniversityList = "All University";
app.use(express.static(allUniversityList));

app.listen(port, () =>{
    console.log("running on port 3001");
});

