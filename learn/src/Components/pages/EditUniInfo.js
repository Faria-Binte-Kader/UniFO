import "./EditUniInfo.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function EditUniInfo(props) {
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
      );
}

export default EditUniInfo