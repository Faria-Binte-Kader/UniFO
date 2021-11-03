import "./EditStudentInfo.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function EditStudentInfo(props) {
  const { data } = props.location;
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

    const UpdateStudentInfo = () =>{
      Axios.post('http://localhost:3001/editstudentinfo',{
            Father: father, Mother: mother, email: data}).then((response)=>{
              console.log(response);
          })   
    };

      return (
        <div className="edit-student-info">
            <div>
            <form className='editform' onSubmit={(e)=>{
              handleSubmit(e);
              UpdateStudentInfo();
              history.push({
                pathname: '/userprofile',
                  data: data 
              });
              }}>
             <h1>
                Edit Student Information if necessary.
             </h1>
             <div className='editinputs'>
                 <label htmlFor='father-name'
                 className='form-label'>
                  Father's Name
                 </label>
                 <input id='father-name' type='text' 
                     name='father-name' 
                     className='editinput'
                     placeholder={father}
                     onChange={(e)=>{
                      const selectedState = e.target.value;
                      setFather(selectedState);
                  }}></input>
             </div>
             <div className='editinputs'>
                 <label htmlFor='mother-name'
                 className='form-label'>
                  Mother's Name
                 </label>
                 <input id='mother-name' type='text' 
                     name='mother-name' 
                     className='editinput'
                     placeholder={mother}
                     onChange={(e)=>{
                      const selectedState = e.target.value;
                      setMother(selectedState);
                  }}></input>
             </div>
             <button className='edit-btn'>SAVE</button>
           </form>
            </div>
        </div>

      );
}

export default EditStudentInfo