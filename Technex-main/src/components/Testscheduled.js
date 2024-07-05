import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { dashContext } from '../userContext';

import { faBook, faHourglassStart, faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testscheduled = () => {
  const { userstate } = useContext(dashContext);
  const [test, setTest] = useState([]);
  console.log(userstate.email)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/get_test/${userstate.email}`);
        if (Array.isArray(response.data)) {
          setTest(response.data);
        } else {
          setTest([]); // Initialize as an empty array if response.data is not an array
        }
      } catch (error) {
        console.error('Error fetching test data:', error);
      }
    };

    fetchData();
  }, [userstate.email]);

  return (
    <div>
      <NavBar />
      <h1 style={{ marginTop: '50px', paddingLeft: '80px' }}>Look up what you got,</h1>
      {test.length === 0 ? (
        <div style={{ marginLeft: '80px', marginTop: '20px' }}>No tests are scheduled.</div>
      ) : (
        test.map((item) => (
          <div key={item.test_id} className='test-container'>
            <div className='test-form' style={{ display: 'flex', columnGap: '20px', lineHeight: '30px', marginBottom: '10px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#28679E', display: 'flex', alignItems: 'center', borderRadius: '7px', justifyContent: 'center' }}>
                <FontAwesomeIcon icon={faBook} style={{ fontSize: '23px', color: 'white' }}></FontAwesomeIcon>
              </div>
              <div>
                <h1 style={{ overflow: 'hidden', marginTop: '10px', fontWeight: '500', textTransform: 'uppercase' }}>{item.test_name}</h1>
                <h5 style={{ marginTop: '15px', fontSize: '18px' }}>Test ID: <span style={{ fontWeight: '400', }}>{item.test_id}</span></h5>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', marginLeft: "70px", marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: '#28679E' }}></FontAwesomeIcon>
              <h5 style={{fontSize: '15px'}}>Date: <span style={{ fontWeight: '400' }}>{new Date(item.start_t).toLocaleDateString("en-US")} - {new Date(item.end_t).toLocaleDateString("en-US")}</span></h5>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px', marginLeft: "70px" }}>
              <FontAwesomeIcon icon={faHourglassStart} style={{ color: '#28679E' }}></FontAwesomeIcon>
              <h5 style={{fontSize: '15px'}}>Duration: <span style={{ fontWeight: '400' }}>{item.duration}mins</span></h5>
            </div>
            <Link className='test-link' to={`/instruction/${item.test_id}`}>
              <button className='test-link-button' style={{ marginTop: '20px', marginLeft: '65px' }}>Take Test</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Testscheduled;
