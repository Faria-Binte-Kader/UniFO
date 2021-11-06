import "./EditUniInfo.css";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function EditUniInfo(props) {
  //const { data } = props.location;
  const data=  localStorage.getItem('usermail');
  const type=  localStorage.getItem('usertype');
  let history = useHistory();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [website, setWebsite] = useState("");
  const [district, setDistrict] = useState("");
  const [general, setGeneral] = useState("");
  const [duration, setDuration] = useState("");
  const [tuition, setTuition] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [admissiondate, setAdmissiondate] = useState("");
  const [listOfDepartment, setDepartmentlist] = useState([]);

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
      setDistrict(response.data[0].District);
      setWebsite(response.data[0].Website);
      setGeneral(response.data[0].General);
      setDuration(response.data[0].Duration);
      setTuition(response.data[0].Tuition);
      setScholarship(response.data[0].Scholarship);
      setAdmissiondate(response.data[0].Admissiondate);
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
      Name: name, District: district, Website: website, General: general, Duration: duration, Tuition: tuition, Scholarship: scholarship, Admissiondate: admissiondate, email: data
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
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>Name</Form.Label>
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
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>District</Form.Label>
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

          <Form.Group controlId="website">
            <Row>
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>Website</Form.Label>
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
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>General</Form.Label>
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
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>Duration</Form.Label>
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
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>Tuition</Form.Label>
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
              <Form.Label style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: "10px", marginLeft: "10px", color:"black" }}>Admission date</Form.Label>
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

          <Row style={{ marginLeft: "150px" }}>
            <Button type="submit" style={{ height: "36px", width: "400px", backgroundColor: "white", fontSize: 16, fontFamily: "Times New Roman", fontWeight: "bold", backgroundColor: "#E7E2E2" }}>
              Update
            </Button>
          </Row>
        </Form>
      </Col>
    </div>
  );
  /*
  const data=  localStorage.getItem('usermail');
  const type=  localStorage.getItem('usertype');
   
    useEffect(() => {
    
      }, []);


      return (
        <div className="edit-uni-info">
            <div>
            <h1>Edit Uni Info</h1>
            </div>
        </div>
      );*/
}

export default EditUniInfo