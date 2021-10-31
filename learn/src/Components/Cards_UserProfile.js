import React from 'react'
import img from '../assets/profilepicture.png';
import './Cards.css'

function Cards_UserProfile() {
    return (
        <div className="cards_unserprofile">
            <div className='cards__profilecontainer'>
                <div className='cards__profile'>
                <div className='cards__profileitem'>
                    <img style={{width:"160px",height:"160px",marginRight:"20px"}} src={img} alt="Img"/>
                    <p>
                        <h1>Faria Binte Kader</h1>
                        <br></br>
                        <p><u>faria@iut-dhaka.edu</u></p>
                        <p>+8801713948565</p>
                    </p>
                </div>
                <div className='cards__profileitem'>
                    <p>
                        <p><u>Edit Profile</u></p>
                        <br></br>
                        <p><u>Saved Items</u></p>
                        <br></br>
                        <p><u>Upload Files</u></p>
                        <br></br>
                        <p><u>Applied Universities</u></p>
                        <br></br>
                        <p><u>Settings</u></p>
                        <br></br>
                        <p><u>Logout</u></p>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cards_UserProfile
