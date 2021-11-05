import "./UserProfile.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from 'react-router-dom';

function UserProfile(props) {
 // const { data } = props.location;
 const data=  localStorage.getItem('usermail');
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [district, setDistrict] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [blood, setBlood] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getStudentInfo();
  }, []);


  const getStudentInfo = () => {
    Axios.post('http://localhost:3001/user', {
      email: data
    }).then((response) => {
      setName(response.data[0].name);
      setMail(response.data[0].Email);
      setDistrict(response.data[0].District);
      setFather(response.data[0].Father);
      setMother(response.data[0].Mother);
      setGender(response.data[0].Gender);
      setDob(response.data[0].DOB);
      setBlood(response.data[0].Blood);
      setAddress(response.data[0].Address);
    })
  };

  return (
    <div className="backgroundcontainer">
      <Col className="profilecontainer" style={{alignItems: "center"}}>
        <h1 style={{fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px"}}>Profile</h1>
            <Col>
              <Row>
                <h3 style={{fontSize: 24, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px"}}>{name}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", color: "#222F6E"}}><Link>{mail}</Link></h3>
              </Row>
              <Row>
                <br></br>
                <p style={{fontSize: 18, fontFamily: "Times New Roman"}}>______________________________________________________________________</p>
              </Row>
              <Row>
                <p style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Father's Name</p>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{father}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Mother's Name</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{mother}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>District</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{district}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Gender</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{gender}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Date of Birth</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{dob}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Blood Type</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{blood}</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Address</h3>
              </Row>
              <Row>
                <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{address}</h3>
              </Row>
              <Row>
                <p style={{fontSize: 18, fontFamily: "Times New Roman"}}>______________________________________________________________________</p>
                <br></br>
              </Row>
            </Col>
        <h3 style={{fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", color: "#222F6E"}}><Link to={{ pathname: "/editstudentinfo", data: data }}><u>Edit Profile</u></Link></h3>
      </Col>
    </div>
  );
}

export default UserProfile