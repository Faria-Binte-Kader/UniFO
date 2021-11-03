import '../../App.css';
import Cards_UniList from "../Cards_UniList";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import CardItem from '../CardItem'
import './UniList.css'

function UniList() {
    const [listOfUniversity, setUniversity] = useState([]);
    const [click, setClick] = useState(false);
    const HandleClick = () => {
        setClick(!click);
     if(click===false)
    { 
        getAllUniversitySortDown();
    }
    else
   {
        getAllUniversitySortUp();
   }}

    useEffect(() => {
        getAllUniversity();
    }, []);

    const getAllUniversity = () => {
        Axios.post('http://localhost:3001/uniList', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };
    const getAllUniversitySortDown = () => {
        Axios.post('http://localhost:3001/sortdown', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };
    const getAllUniversitySortUp = () => {
        Axios.post('http://localhost:3001/sortup', {
        }).then((response) => {
            setUniversity(response.data);
            //console(response.data);
        })
    };

    return (
        <div className="UniList">
            <h1>All Universities</h1>
        <div className='sortbtn' onClick={HandleClick}>
            <p>SORT</p>
            <i className={click ? 'fas fa-sort-up' : 'fas fa-sort-down'}/>
        </div>
            {listOfUniversity.map((values, key) => {
                return (
                    <div className='cards__container_university'>
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

export default UniList