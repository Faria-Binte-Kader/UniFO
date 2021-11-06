import "./EditStudentInfo.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function EditStudentInfo(props) {
  //const { data } = props.location;
  const data = localStorage.getItem('usermail');
  let history = useHistory();
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

  const handleSubmit = e => {
    e.preventDefault();
  }


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

  const UpdateStudentInfo = () => {
    Axios.post('http://localhost:3001/editstudentinfo', {
      Name: name, Father: father, Mother: mother, Gender: gender, Dob: dob, Blood: blood, District: district, Address: address, email: data
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div className="editbackgroundcontainer">
      <Col className="editprofilecontainer" style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>Edit Profile</h1>
        <Form onSubmit={(e) => {
          handleSubmit(e);
          UpdateStudentInfo();
          history.push({
            pathname: '/userprofile',
            data: data
          });
        }}>
          <Form.Group controlId="name">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Name</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="district">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>District</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="fathername">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Father's Name</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Father's Name"
                value={father}
                onChange={(e) => setFather(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="mothername">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Mother's Name</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Mother's Name"
                value={mother}
                onChange={(e) => setMother(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="gender">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Gender</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="dob">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Date of Birth</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="blood">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Blood Type</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Blood Type"
                value={blood}
                onChange={(e) => setBlood(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="address">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Address</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>
          <Row style={{ marginLeft: "150px" }}>
            <Button type="submit" style={{ height: "36px", width: "400px", backgroundColor: "white", fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", backgroundColor: "#E7E2E2" }}>
              Update
            </Button>
          </Row>
        </Form>
      </Col>
    </div>
  );
}

export default EditStudentInfo