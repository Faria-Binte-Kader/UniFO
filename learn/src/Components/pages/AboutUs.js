import React from "react";
import '../../App.css';
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AboutUs() {
    return (
        <div className="backgroundcontainer">
        <Col className="profilecontainer" style={{ alignItems: "center" }}>
          <h1 style={{ fontSize: 36, fontFamily: "Times New Roman", fontWeight: "bold", marginBottom: "10px" }}>About us</h1>
          <Col>
            <Row>
              <br></br>
              <p style={{ fontSize: 18, fontFamily: "Times New Roman" }}>______________________________________________________________________</p>
            </Row>
            <Row>
              <p style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>How to use</p>
            </Row>
            <Row>
              <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>This website was built for admission students to find out about their desired university from a single place. Search for your desired universities
              by going to the university list section. Type the name of the university. Enter the location or type of the varsity to filter your searchers.
              See the details by clicking on the cards. See all the news updated by the universities on the recent update section. You can 
              create an account by going to the login page. University admina should choose university-admin on the choose user type dropdown.
              This way they will be taken to insert various information about their universities. They will also be able to post notices. Users can
              also see and edit their profile and log out after they are done.</h3>
            </Row>
            <Row>
              <p style={{ fontSize: 18, fontFamily: "Times New Roman", fontWeight: "600", marginTop: "10px" }}>About autohrs</p>
            </Row>
            <Row>
              <h3 style={{ fontSize: 14, fontFamily: "Times New Roman", fontWeight: "400", marginTop: "10px" }}>This website is built by TasFarNuj with love and care. Feel
              free to mail any complaints at tasfarnuj@gmail.com. Happy surfing.</h3>
            </Row>
          </Col>
        </Col>
      </div>
    );
}