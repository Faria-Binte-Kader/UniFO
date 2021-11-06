import "./EditDeptInfo.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function EditDeptInfo(props) {
  const { data } = props.location;
  const maildata = localStorage.getItem('usermail');
  let history = useHistory();
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [programs, setPrograms] = useState("");

  useEffect(() => {
    getDepartmentInfo();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  }

  const getDepartmentInfo = () => {
      setName(data[0].Name)
    Axios.post('http://localhost:3001/departmentdetails', {
        Email: maildata, Name: data[0].Name
      }).then((response) => {
        setAbout(response.data[0].About);
        setPrograms(response.data[0].Programs);
      })
  };

  const UpdateDepartmentInfo = () => {
    Axios.post('http://localhost:3001/editdeptinfo', {
      Name: name, About: about, Programs: programs, email: maildata
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div className="editdeptbackgroundcontainer">
      <Col className="editdeptprofilecontainer" style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>{name}</h1>
        <Form onSubmit={(e) => {
          handleSubmit(e);
          UpdateDepartmentInfo();
          history.push({
            pathname: '/departmentdetails',
            data: data
          });
        }}>
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
              Update
            </Button>
          </Row>
        </Form>
      </Col>
    </div>
  );
}

export default EditDeptInfo