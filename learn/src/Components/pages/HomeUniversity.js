import React from 'react'
import './HomeUniversity.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";



function HomeUniversity() {
    const [title, setTitle] = useState("");
    const [details, setDeatils] = useState("");

    const handleSubmit = e => {
        e.preventDefault();   
    }
    return (
        <div className='UniHomeContainer'>
            <div className="header">
            <div className="leftside">
            <span ><Link to={{ pathname: "/edituniinfo"}}>Edit Profile</Link></span><br/><br/>
            <span ><Link to={{ pathname: "/uniprofile"}}>Profile</Link></span><br/><br/>
            <span ><Link to={{ pathname: "/uniprofile"}}>My Posts</Link></span>
            </div>
            <div className="rightside">
            <form className='postform' id='postform' onSubmit={(e)=>{
              handleSubmit(e); }}>
             <h1>
                 Post notices here!
             </h1>
             <div className='postinputs'>
                 <input id='title' type='text' 
                     name='title' 
                     className='postinput'
                     value={title}
                     placeholder='Enter a title for the post'
                     onChange={(e)=>{
                        const selectedState = e.target.value;
                        setTitle(selectedState);
                    }}></input>
             </div>
             <div className='postinputs'>
             <textarea rows="10" cols="100"className='postdetails'
             name="details" form="postform" value={details} placeholder="Enter detailes here"  onChange={(e)=>{
            const selectedState = e.target.value;
            setDeatils(selectedState);
        }}></textarea>
        </div>
             <button className='postbtn'>POST</button>
       </form>
            </div>
            </div>
            <div className="unibody"></div>
        </div>
    )
}

export default HomeUniversity