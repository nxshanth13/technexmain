import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"


import './App.css'
import NavBar from './components/NavBar'

const Profile = () => {
  return (
    <>
        <NavBar />
        <div className='profileMain'>
            <div className='profileTop'>
                <h1>Hello Adam!</h1>
                <p>Your training information is updated here.<br />Upcoming and previous exam dates are listed here.</p>
                <div className='profileAbsolute'>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        <h3 style={{}}>Adam</h3>
                        <h5 style={{fontWeight:'400',color:'gray'}}>CSE</h5>
                    </div>
                    <hr style={{width:'100%'}} />
                    <h4 style={{color:'gray'}}>Attended Test : <span style={{fontWeight:'400'}}>10</span></h4>
                </div>
            </div>
            <div className='profileMiddle'>
                <h2>Previous Test</h2>
                <div>
                    <div className='profileExamDetails'>
                        <h2 style={{fontSize:'20px'}}>Accenture Test</h2>
                        <div>
                            <h4>Date:<span>13/04/2024</span></h4>
                            <h4>Time:<span>18:00</span></h4>
                        </div>
                    </div>
                    <div className='profileCircle'>
                        <h1>100</h1>
                        <h6>Marks Secured</h6>
                    </div>
                    <p>Detailed Analysis &#8594;</p>
                </div>
            </div>
            <div className='profileBottom'>
                <h2>History</h2>
                
            </div>
        </div>
    </>
  )
}

export default Profile