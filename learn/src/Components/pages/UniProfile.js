import "./UniProfile.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function UniProfile(props) {
  const { data } = props.location;
   
    useEffect(() => {
    
      }, []);


      return (
        <div className="uniinfo">
            <div>
            <h1>Uni profile</h1>
            </div>
        </div>
      );
}

export default UniProfile