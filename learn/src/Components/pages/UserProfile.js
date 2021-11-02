import "./UserProfile.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function UserProfile() {
    let { uname } = useParams();
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [father, setFather] = useState("");
    const [mother, setMother] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [blood, setBlood] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3001/users').then((response) => {
        setName(response.data.name);
        setMail(response.data.mail);
        setPhone(response.data.phone);
        setFather(response.data.father);
        setMother(response.data.mother);
        setGender(response.data.gender);
        setDob(response.data.dob);
        setBlood(response.data.blood);
        setAddress(response.data.address);
        });
      }, []);

      return (
        <div className="users">
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <h3>{name}</h3>
            <h3>{mail}</h3>
            <h3>{phone}</h3>
            <h3>Father's Name: {father}</h3>
            <h3>Mother's Name: {mother}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Date of Birth: {dob}</h3>
            <h3>Blood Type: {blood}</h3>
            <h3>Address: {address}</h3>
            </div>
        </div>
      );
}

export default UserProfile