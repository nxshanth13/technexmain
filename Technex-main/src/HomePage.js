import React, { useContext } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Main from './assets/main.png'
import Top from './assets/top.png'
import Vector from './assets/vect.png'
import Bottom from './assets/bottom.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrosshairs, faBook, faAtom, faCheck, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import { dashContext } from './userContext';



export default function HomePage() {
    const { userstate } = useContext(dashContext);

    return (
        <>
            <NavBar />
            <div className='landingSection' id='home'>
                <img className='mainImages topImage' src={Top} alt='top' />
                <img className='mainImages bottomImage' src={Bottom} alt='bottom' />
                <div className='landing_left'>
                    <h1>Unlock Your Potential: Elevate Your Skills with Our Comprehensive Test Portal</h1>
                    <h4>Fuel Your Success: Empower Your Academic Journey with Our Tailored Exam Preparation Portal, Designed for Students Striving for Excellence!</h4>
                </div>
                <div className='landing_right'>
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/boy-giving-online-exam-9562032-7786304.png' alt='main' />
                </div>
            </div>
            <div className='previousqnSection' id='prevquest'>
                <div className='previousTop'>
                    <div className='previousTitle'>
                        <h2>Crack the Code</h2>
                        <h5>Mastering Interview Patterns and Acing Your Way to Success with Our Comprehensive Resources.</h5>
                    </div>
                    <button>Explore</button>
                </div>
                <div className='previousBottom'>
                    <div className='previousCards'>
                        <FontAwesomeIcon className='iconsMain' icon={faCrosshairs} />
                        <h3>GATE</h3>
                        <div className='previousPoints'>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Previous Year Papers</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Solutions</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Free</h5>
                            </div>
                        </div>
                    </div>
                    <div className='previousCards'>
                        <FontAwesomeIcon className='iconsMain' icon={faBook} />
                        <h3>APTITUDE</h3>
                        <div className='previousPoints'>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Previous Year Papers</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Solutions</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Free</h5>
                            </div>
                        </div>
                    </div>
                    <div className='previousCards'>
                        <FontAwesomeIcon className='iconsMain' icon={faAtom} />
                        <h3>CORE</h3>
                        <div className='previousPoints'>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Previous Year Papers</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Solutions</h5>
                            </div>
                            <div>
                                <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                                <h5>Free</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='examSection' id='mockexams'>
                <div className='previousTop'>
                    <div className='previousTitle'>
                        <h2>Featured Exams</h2>
                        <h5>Unlock success: Featured Exams, pinnacle paths to excellence!</h5>
                    </div>
                    <button>All Exams</button>
                </div>
                <div className='examBottom'>
                    <div className='examCards'>
                        <img src='https://as2.ftcdn.net/v2/jpg/05/75/35/99/1000_F_575359939_bWBjWA1v2sRvpQVn7RtftaeopuffpqJF.jpg'></img>
                        <h4>By <b>-TechNex</b></h4>
                        <h2>Tech Quotient</h2>
                        <div className='cardDiv1'>
                            <FontAwesomeIcon className='cardIcon' icon={faGraduationCap} />
                            <h6>Tech, Aptitude, Verbal mock</h6>
                        </div>
                        <hr />
                        <div className='cardDiv2'>
                            {userstate.email != "" ? (
                                <>
                                    <span style={{ color: 'green', fontSize: '14px', fontWeight: '600' }}>Test has been assigned!</span>
                                    <h4><Link style={{ textDecoration: 'none', color: 'black' }} to='/schedule' >View Test</Link></h4>
                                </>
                            ) : (
                                <span style={{ color: 'red', fontSize: '14px', fontWeight: '600' }}>Please Login to view test</span>
                            )
                            }
                        </div>
                    </div>
                    <div className='examCards'>
                        <img src='https://idreamcareer.com/wp-content/uploads/2020/11/aptitude-test.webp'></img>
                        <h4>By <b>-TechNex</b></h4>
                        <h2>Aptitude Exam</h2>
                        <div className='cardDiv1'>
                            <FontAwesomeIcon className='cardIcon' icon={faGraduationCap} />
                            <h6>Mock Exams,Quiz,MCQ's</h6>
                        </div>
                        <hr />
                        <div className='cardDiv2'>
                            <h3>0 Exams</h3>
                            <h4><Link style={{ textDecoration: 'none', color: 'black' }} to='/unschedule'>Take Test</Link></h4>
                        </div>
                    </div>
                    <div className='examCards'>
                        <img src='https://www.verbalreasoningtest.org/images/streamlinehq-education-online-exams-tests-education-os.svg'></img>
                        <h4>By <b>-TechNex</b></h4>
                        <h2>Verbal Assessment</h2>
                        <div className='cardDiv1'>
                            <FontAwesomeIcon className='cardIcon' icon={faGraduationCap} />
                            <h6>8+ departments covered</h6>
                        </div>
                        <hr />
                        <div className='cardDiv2'>
                            <h3 style={{ color: 'red' }}>On the way</h3>
                            <h4><Link style={{ textDecoration: 'none', color: 'black' }} to='/schedule' >Take Test</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='growskillSection' id='resoures'>
                <div className='growskillLeft'>
                    <img src={Vector} />
                </div>
                <div className='growskillRight'>
                    <h2>Ascend with CIT-QUEST Resources: A beacon for your academic journey..</h2>
                    <p>Elevate your learning journey with the bountiful resources provided by CIT-QUEST.
                        From expert insights to comprehensive study materials, discover a roadmap to academic excellence at your fingertips.</p>
                    <div className='previousPoints'>
                        <div>
                            <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                            <h5>Mock Exams</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                            <h5>Previous Year Papers</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                            <h5>Solutions</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon className='checkPoints' icon={faCheck} />
                            <h5>Free Resources</h5>
                        </div>
                    </div>
                    <button><Link style={{ color: 'white', textDecoration: 'none' }} to='/resources'>Explore our resources</Link></button>
                </div>
            </div>
            <Footer />
        </>
    );
}
