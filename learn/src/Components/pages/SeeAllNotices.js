import '../../App.css';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter, Link, useHistory, Route } from 'react-router-dom';
import CardItem from '../CardItem'
import './UniList.css'


function SeeAllNotices() {
    const [listOfNotices, setNotices] = useState([]);
    useEffect(() => {
        getNotices();
    }, []);

    const getNotices = () => {
        Axios.post('http://localhost:3001/getNotices', {
        }).then((response) => {
            setNotices(response.data);
            //console(response.data);
        })
      };
      
   
    return (
  <>
  <div>
  <h1>All Notice Updates</h1>
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
  </>
    )
}

export default SeeAllNotices