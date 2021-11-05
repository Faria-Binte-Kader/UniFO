import React from 'react'
import './HomeStudent.css'
import { Link, useHistory  } from 'react-router-dom';
import { useEffect, useState } from "react";



function HomeStudent() {
    let history = useHistory();
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  function logOut()
  {  
    localStorage.removeItem('usermail');
    localStorage.removeItem('usertype');
      history.push({
        pathname: '/login', 
      });
  }
   

    return (
        <>
        <div className='StudentHomeContainer'>
        <div className="headerstudent">
        <div className="leftsidestudent">
        <span ><Link to={{ pathname: "/editstudentinfo"}}>Edit Profile</Link></span><br/><br/>
        <span ><Link to={{ pathname: "/userprofile"}}>Profile</Link></span><br/><br/>
        <span > <button onClick={toggleModal} className="btn-modal">
        Log Out
      </button></span>
        </div>
        <div className="rightsidestudent">
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Log Out</h2>
            <p>
              Are you sure you want to log out?
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <button className="no-modal" onClick={toggleModal}>
              NO
            </button>
            <button className="yes-modal" onClick={logOut}>
              YES
            </button>
          </div>
        </div>
      )}
        </div>
        </div>
    </div>
    </>
    )
}

export default HomeStudent