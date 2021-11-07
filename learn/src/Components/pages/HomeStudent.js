import React from 'react'
import './HomeStudent.css'
import CardItem from '../CardItem'
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import Axios from "axios";


function HomeStudent() {
  let history = useHistory();
  const [listOfNotices, setNotices] = useState([]);
  const [listOffavs, setFavs] = useState([]);
  const [modal, setModal] = useState(false);
  const mail=localStorage.getItem('usermail');

  useEffect(() => {
    console.log(mail);
    getNotices();
    getFavourite();
}, []);

const getFavourite = () => {
  Axios.post('http://localhost:3001/getfavourites', {
      Email: mail,
  }).then((response) => {
    setFavs(response.data);
    console.log(response.data);
  })
};

const getNotices = () => {
  Axios.post('http://localhost:3001/getNotices', {
  }).then((response) => {
      setNotices(response.data);
      //console(response.data);
  })
};

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  function logOut() {
    localStorage.setItem('usertype', '');
    history.push({
      pathname: '/login',
    });
  }


  return (
    <>
      <div className='StudentHomeContainer'>
        <div className="headerstudent">
          <div className="leftsidestudent">
            <span ><Link to={{ pathname: "/editstudentinfo" }}>Edit Profile</Link></span><br /><br />
            <span ><Link to={{ pathname: "/userprofile" }}>Profile</Link></span><br /><br />
            <span ><Link to={{ pathname: "/seeallnotices" }}>All notices</Link></span><br /><br />
            <span > <button onClick={toggleModal} className="btn-modal">
              Log Out
            </button></span>
          </div>
          <div className="rightsidestudent">
          <h1>Recent Updates</h1>
          <div className="ru">
          {listOfNotices.map((values, key) => {
          return (
            <div className='cards__container_uni'>
              <div className='cards__wrapper'>
                <ul className='cards__items_uni'
                  onClick={() => {
                    localStorage.setItem('noticeID', values.ID);
                  }}>
                  <CardItem
                    src={values.imageURL}
                    text={values.Title}
                    label='University_preview_card'
                    path='/noticedetails' />
                </ul>
              </div>
            </div>
          )
        })}
          </div>
        <h1>My University List</h1>
        <div className="mu">
        {listOffavs.map((values, key) => {
          return (
            <div className='cards__container_uni'>
              <div className='cards__wrapper'>
                <ul className='cards__items_uni'
                   onClick={() => {
                    localStorage.setItem('uniEmailUniList', values.UniMail);
                }}>
                <CardItem
                    src={values.imageURL}
                    text={values.UniName}
                    label='University_preview_card'
                    path='/uniprofilescreen'
                />
                </ul>
              </div>
            </div>
          )
        })}
        </div>
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