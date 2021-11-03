import "./UserProfile.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from 'react-router-dom';

function UserProfile(props) {
  const { data } = props.location;
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


      const getStudentInfo = () =>{
        Axios.post('http://localhost:3001/user',{
              email: data}).then((response)=>{
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
        <div className="users">
           <span className='go-to-editinfo'><Link to={{ pathname: "/editstudentinfo", data: data }}>Edit Profile</Link></span>
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
            <h3>{district}</h3>
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