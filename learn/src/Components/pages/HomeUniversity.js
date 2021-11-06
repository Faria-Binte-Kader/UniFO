import React from 'react'
import './HomeUniversity.css'
import { Link, useHistory  } from 'react-router-dom';
import CardItem from '../CardItem'
import img from '../../assets/iutimage.PNG';
import img2 from '../../assets/buetimage.PNG';
import { useEffect, useState } from "react";
import  Axios from "axios";



function HomeUniversity() {
    let history = useHistory();
    const [listOfNotices, setNotices] = useState([]);
    const [title, setTitle] = useState("");
    const [details, setDeatils] = useState("");
    const [modal, setModal] = useState(false);

    useEffect(() => {
      getNotices();
  }, []);


    const handleSubmit = e => {
        e.preventDefault();   
    }

    const toggleModal = () => {
        setModal(!modal);
      };

      const getNotices = () => {
        Axios.post('http://localhost:3001/getNotices', {
        }).then((response) => {
            setNotices(response.data);
            //console(response.data);
        })
    };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
      function logOut()
      {  
        localStorage.setItem('usertype','');
          history.push({
            pathname: '/login', 
          });
      }

      const postNotices = () =>{
        const data=  localStorage.getItem('usermail');
        Axios.post('http://localhost:3001/notices',{
            Email: data,
            Title: title,
             Details: details,}).then((response)=>{
                  console.log(response);
              })  
              setTitle("");
              setDeatils("");
              history.push({
                pathname: '/homeuniversity', 
              }); 
      };
    return (
        <div className='UniHomeContainer'>
            <div className="header">
            <div className="leftside">
            <span ><Link to={{ pathname: "/edituniinfo"}}>Edit Profile</Link></span><br/><br/>
            <span ><Link to={{ pathname: "/uniprofile"}}>Profile</Link></span><br/><br/>
            <span ><Link to={{ pathname: "/uniprofile"}}>My Posts</Link></span>
            <span > <button onClick={toggleModal} className="btn-modal">
             Log Out
            </button></span>
            </div>
            <div className="rightside">
            <form className='postform' id='postform' onSubmit={(e)=>{
              handleSubmit(e);
              postNotices(); }}>
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
            <div className="unibody">
            <h1>Recent Updates</h1>
            {listOfNotices.map((values, key) => {
                return (
                    <div className='cards__container_uni'>
                      <div className='cards__wrapper'>
                           <ul className='cards__items_uni'
                            onClick={() => {
                              localStorage.setItem('noticaTitle', values.Title);
                          }}>
                                    <CardItem
                                        src={values.imageURL}
                                        text={values.Title}
                                        label='University_preview_card'
                                        path='/unilist' />
                                </ul>
                            </div>
                     </div>
                )
            })}
            </div>
        </div>
    )
}

export default HomeUniversity