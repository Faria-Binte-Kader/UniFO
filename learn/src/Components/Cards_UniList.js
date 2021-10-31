import React from 'react'
import CardItem from './CardItem'
import img from '../assets/iutfrontpage.jpeg';
import img2 from '../assets/buetimage.PNG';
import img3 from '../assets/dufrontpage.PNG';
import img4 from '../assets/sustimage.jpeg';
import img5 from '../assets/juimage.jpg';
import img6 from '../assets/kuetimage.jpg';
import './Cards.css'

function Cards_UniList() {
    return (
        <div className="cards_uniList">
            <h1>University List</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img3}
                            text="University of Dhaka"
                            label='University_preview_card'
                            path='/unilist' />
                        <CardItem
                            src={img2}
                            text="Bangladesh University of Engineering and Technology"
                            label='University_preview_card'
                            path='/unilist' />
                        <CardItem
                            src={img}
                            text="Islamic University of Technology"
                            label='University_preview_card'
                            path='/unilist' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={img4}
                            text="Shahjalal University of Science and Technology"
                            label='University_preview_card'
                            path='/unilist' />
                        <CardItem
                            src={img5}
                            text="Jahangirnagar University"
                            label='University_preview_card'
                            path='/unilist' />
                        <CardItem
                            src={img6}
                            text="Khulna University of Engineering and Technology"
                            label='University_preview_card'
                            path='/unilist' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards_UniList
