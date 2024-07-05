import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function NavBar() {

    const navigate=useNavigate()

    const [isLog, setIsLog] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(()=>{
        const User = JSON.parse(localStorage.getItem('user'))
        if (User !== null) {
            if (User.loggedin === true) {
                setIsLog(true)
            }
            if (User.admin === true) {
                setIsAdmin(true)
            }
        }
    },[])

    const handleLogout = () => {
        setIsLog(false)
        setIsAdmin(false)
        localStorage.removeItem('user')
        navigate("/")
    }

    return (
        <nav className='navBar'>
            <img src={Logo} alt="" />
            <div className="navMid">
                <h5><a href='/'>Home</a></h5>
                <h5><a href="#prevquest">Prev-Quest</a></h5>
                <h5><a href="#mockexams">Mock-Exam</a></h5>
                <h5><a href="#resources">Resources</a></h5>
            </div>
            <div className='navRight'>
                {isLog === true ? (
                    isAdmin === true ? (
                        <>
                            <button onClick={handleLogout}>Logout</button>
                            <Link to='/admin'>Admin Panel</Link>
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogout}>Logout</button>
                            <Link to='/userprofile'>Your profile</Link>
                        </>
                    )
                ) : (
                    <>
                        <button><Link to='/signup'>Signup</Link></button>
                        <Link to='/login'>Login</Link>
                    </>
                )}
            </div>
        </nav>
    )
}