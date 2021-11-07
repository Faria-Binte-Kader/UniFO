import React from 'react'
import CardItem from './CardItem'
import img from '../assets/iutimage.PNG';
import img2 from '../assets/buetimage.PNG';
import img3 from '../assets/dufrontpage.PNG';
import img4 from '../assets/sustfrontpage.PNG';
import './Cards.css'
import Axios from "axios";
import { useEffect, useState } from "react";

function Cards() {
    const [listOfUniversity, setUniversity] = useState([]);
    const [listOfNotices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDeatils] = useState("");
    useEffect(() => {
        getNotices();
        getQuickAccess();
    }, []);

    const getQuickAccess = () => {
        Axios.post('http://localhost:3001/quickaccess', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };
    const getNotices = () => {
        Axios.post('http://localhost:3001/getNotices', {
        }).then((response) => {
          setNotices(response.data);
          //console(response.data);
        })
      };

    return (
        <div className="cards">
            <h1>Recent Updates</h1>
            <div className="upperside">
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
            </div>)})}
            </div>
            <h1>Quick Access</h1>
            <div className="lowerside">
            {listOfUniversity.map((values, key) => {
                return (
                    <div className='cards__container_uni'>
                      <div className='cards__wrapper'>
                           <ul className='cards__items_uni'>
                                    <CardItem
                                        src={values.imageURL}
                                        text={values.Name}
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

export default Cards
