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

    useEffect(() => {
        getQuickAccess();
    }, []);

    const getQuickAccess = () => {
        Axios.post('http://localhost:3001/quickaccess', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };

    return (
        <div className="cards">
            <h1>Recent Updates</h1>
            <div className='cards__container'>
         <div className='cards__wrapper'>
          <ul className='cards__items'>
                  <CardItem 
                  src={img}
                  text="IUT Mars Rover team among the top ten teams in European Rover Challenge (ERC) remote competition 2021"
                  label='News'
                  path='/unilist'/>
                  <CardItem 
                  src={img2}
                  text="BUET postpones admission tests for 2020-21 academic session"
                  label='News'
                  path='/unilist'/>
                   </ul> 
            </div>
            </div>
            <h1>Quick Access</h1>
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
    )
}

export default Cards
