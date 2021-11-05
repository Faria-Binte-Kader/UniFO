import '../../App.js';
import './Departmentdetails.css'
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Departmentdetails(props) {
  const { data } = props.location;
  let history = useHistory();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [deptemail, setDeptmail] = useState("");
  const [deptname, setDeptname] = useState("");
  const [deptuni, setDeptuni] = useState("");
  const [deptabout, setDeptabout] = useState("");
  const [deptprog, setDeptprog] = useState("");

  useEffect(() => {
    
    }, []);

    const handleSubmit = e => {
      e.preventDefault();   
  }

  return (
    <div className="backgroundcontainer">
    <Col className="profilecontainer" style={{alignItems: "center"}}>
      <h1 style={{fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px"}}>{data[0].Name}</h1>
      <h1 style={{fontSize: 16, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{data[0].University}</h1>
          <Col>
            <Row>
              <br></br>
              <p style={{fontSize: 18, fontFamily: "Times New Roman"}}>______________________________________________________________________</p>
            </Row>
            <Row>
              <p style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>About</p>
            </Row>
            <Row>
              <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{data[0].About}</h3>
            </Row>
            <Row>
              <h3 style={{fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px"}}>Programs</h3>
            </Row>
            <Row>
              <h3 style={{fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px"}}>{data[0].Programs}</h3>
            </Row>
            <Row>
              <p style={{fontSize: 18, fontFamily: "Times New Roman"}}>______________________________________________________________________</p>
              <br></br>
            </Row>
          </Col>
    </Col>
  </div>
    );
}

export default Departmentdetails