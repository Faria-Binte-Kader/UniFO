import "./UniProfileScreen.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function UniProfileScreen(props) {
  let history = useHistory();
  const data = localStorage.getItem('uniEmailUniList');
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [general, setGeneral] = useState("");
  const [duration, setDuration] = useState("");
  const [tuition, setTuition] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [admissiondate, setAdmissiondate] = useState("");
  const [type, setType] = useState("");
  const [listOfDepartment, setDepartmentlist] = useState([]);

  useEffect(() => {
    getUniversityInfo();
    getAllDepartment();
  }, []);

  const getUniversityInfo = () => {
    Axios.post('http://localhost:3001/uniprofilescreen', {
      Email: data
    }).then((response) => {
      setName(response.data[0].Name);
      setMail(response.data[0].Email);
      setLocation(response.data[0].Location);
      setWebsite(response.data[0].Website);
      setGeneral(response.data[0].General);
      setDuration(response.data[0].Duration);
      setTuition(response.data[0].Tuition);
      setScholarship(response.data[0].Scholarship);
      setAdmissiondate(response.data[0].Admissiondate);
      setType(response.data[0].Type);
    })
  };

  const getAllDepartment = () => {
    Axios.post('http://localhost:3001/departmentinfo', {
      email: data
    }).then((response) => {
      setDepartmentlist(response.data);
    })
  };

  return (
    <div className="backgroundcontainer">
      <Col className="profilecontainer" style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>{name}</h1>
        <h1 style={{ fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", color: "#222F6E" }}><Link>{website}</Link></h1>
        <h1 style={{ fontSize: 16, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{location}</h1>
        <Col>
          <Row>
            <br></br>
            <p style={{ fontSize: 18, fontFamily: "Times New Roman" }}>______________________________________________________________________</p>
          </Row>
          <Row>
            <p style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>General</p>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{general}</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Duration</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{duration}</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Tuition</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{tuition}</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Scholarship</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{scholarship}</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Admission Date</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{admissiondate}</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Type</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{type}</h3>
          </Row>
          <Row>
            <h3 style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Department List</h3>
          </Row>
          <Row>
            {listOfDepartment.map((values, key) => {
              return (
                <h3 style={{ fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", color: "#222F6E" }}><Link to={{ pathname: "/departmentdetails", data: [{ Name: values.Name, University: values.University, About: values.About, Programs: values.Programs }] }}>{values.Name}</Link></h3>
              )
            })}
          </Row>
          <Row>
            <p style={{ fontSize: 18, fontFamily: "Times New Roman" }}>______________________________________________________________________</p>
            <br></br>
          </Row>
        </Col>
      </Col>
    </div>
  );

}

export default UniProfileScreen