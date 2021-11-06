import React from 'react'
import './NoticeDetails.css'
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import CardItem from '../CardItem'
import { useEffect, useState } from "react";
import Axios from "axios";


function NoticeDetails() {
  const noticeid = localStorage.getItem('noticeID');
  const [unimail, setUniMail] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const getNoticeDetails = () => {
    Axios.post('http://localhost:3001/noticedetails', {
      id: noticeid,
    }).then((response) => {
      setUniMail(response.data[0].UniMail);
      setTitle(response.data[0].Title);
      setDetails(response.data[0].Details);
    }
    )
  }

  useEffect(() => {
    getNoticeDetails();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="backgroundcontainer">
      <Col className="profilecontainer" style={{ alignItems: "center" }}>
        <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>{title}</h1>
        <h1 style={{ fontSize: 16, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{unimail}</h1>
        <Col>
          <Row>
            <br></br>
            <p style={{ fontSize: 18, fontFamily: "Times New Roman" }}>______________________________________________________________________</p>
          </Row>
          <Row>
            <p style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>Details</p>
          </Row>
          <Row>
            <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>{details}</h3>
          </Row>
        </Col>
      </Col>
    </div>
  );

}

export default NoticeDetails;
