import "./EditUniInfo.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function EditUniInfo(props) {
  //const { data } = props.location;
  const data = localStorage.getItem('usermail');
  let history = useHistory();
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

  //const type=  localStorage.getItem('usertype');

  useEffect(() => {
    getUniversityInfo();
    getAllDepartment();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  }


  const getUniversityInfo = () => {
    Axios.post('http://localhost:3001/uniuser', {
      email: data
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

  const UpdateUniversityInfo = () => {
    Axios.post('http://localhost:3001/edituniinfo', {
      Name: name, Location: location, Website: website, General: general, Duration: duration, Tuition: tuition, Scholarship: scholarship, Admissiondate: admissiondate, Type: type, email: data
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div className="editunibackgroundcontainer">
      <Col className="edituniprofilecontainer" style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>Edit Profile</h1>
        <Form onSubmit={(e) => {
          handleSubmit(e);
          UpdateUniversityInfo();
          history.push({
            pathname: '/uniprofile',
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

          <Form.Group controlId="location">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Location</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="website">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Website</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="general">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>General</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter General Information"
                value={general}
                onChange={(e) => setGeneral(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="duration">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Duration</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="tuition">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Tuition</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Tuition"
                value={tuition}
                onChange={(e) => setTuition(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="admissiondate">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Admission date</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Admission Date"
                value={admissiondate}
                onChange={(e) => setAdmissiondate(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="type">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Type</Form.Label>
            </Row>
            <Row>
              <Form.Control style={{ fontSize: 14, fontFamily: "Times New Roman", height: "30px", width: "700px", backgroundColor: "#E7E2E2" }}
                type="text"
                placeholder="Enter Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group controlId="departmentlist">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "black" }}>Department List</Form.Label>
            </Row>
            <Row>
              <h3 style={{ fontSize: 12, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "#222F6E" }}><span ><Link to={{ pathname: "/adddeptinfo" }}>Add Department</Link></span></h3>
            </Row>
            <Row>
              {listOfDepartment.map((values, key) => {
                return (
                  <Row>
                    <h3 style={{fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color: "#222F6E"}}><Link to={{ pathname: "/editdeptinfo", data: [{Name: values.Name, University: values.University, About: values.About, Programs: values.Programs}]}}>{values.Name}</Link></h3>
                  </Row>
                )
              })}
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

export default EditUniInfo