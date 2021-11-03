import '../../App.css';
import Cards_UniList from "../Cards_UniList";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import CardItem from '../CardItem'

function UniList() {
    const [listOfUniversity, setUniversity] = useState([]);

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

    return (
        <div className="UniList">
            <h1>University List</h1>
            {listOfUniversity.map((values, key) => {
                return (
                    <div className='cards__container__university'>
                        <div className='cards__wrapper'>
                            <div className='cards__aligner'>
                                <ul className='cards__items'>
                                    <CardItem
                                        src={values.imageURL}
                                        text={values.Name}
                                        label='University_preview_card'
                                        path='/unilist' />
                                </ul>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UniList