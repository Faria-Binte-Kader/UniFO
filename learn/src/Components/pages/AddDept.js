import "./AddDept.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function AddDept(props) {
  const { data } = props.location;
  const maildata = localStorage.getItem('usermail');
  const namedata = localStorage.getItem('username');
  let history = useHistory();
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [programs, setPrograms] = useState("");
  const [university, setUniversity] = useState("");

  useEffect(() => {
    
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  }

  const AddDepartmentInfo = () => {
    Axios.post('http://localhost:3001/adddeptinfo', {
      Name: name, About: about, Programs: programs, University: namedata, email: maildata
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div className="adddeptbackgroundcontainer">
      <Col className="adddeptprofilecontainer" style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>Add Department</h1>
        <Form onSubmit={(e) => {
          handleSubmit(e);
          AddDepartmentInfo();
          history.push({
            pathname: '/edituniinfo',
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

          <Form.Group controlId="about">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>About</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="programs">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Programs</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Programs"
                value={programs}
                onChange={(e) => setPrograms(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Row style={{ marginLeft: "150px" }}>
            <Button type="submit" style={{ height: "36px", width: "400px", backgroundColor: "white", fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", backgroundColor: "#E7E2E2" }}>
              Add
            </Button>
          </Row>
        </Form>
      </Col>
    </div>
  );
}

export default AddDept