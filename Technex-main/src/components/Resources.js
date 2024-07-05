import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';


const Resources = () => {
    const videos = [
        { id: 'rZ41y93P2Qo?si', description: 'Mastering DSA with Java: Kunal Kushwaha’s Ultimate Course' },
        { id: 'eIrMbAQSU34?si', description: 'Java Essentials for Beginners: Mosh Hamedani’s Guide' },
        { id: 'BGTx91t8q50?si', description: 'Java Fundamentals: Telusko’s Expert Course' },
        { id: 'BSVKUk58K6U?si', description: 'Object-Oriented Programming in Java with Kunal Kushwaha' },
        { id: 'A74TOX803D0?si', description: 'Java Programming for Everyone: FreeCodeCamp Course' },
        { id: 'yRpLlJmRo2w?si', description: 'Java Learning Made Easy: Apna College Course' },

    ];

    const videos1 = [
        { id: 'EAR7De6Goz4?si', description: 'C++ Mastery with Striver: The Legendary Course' },
        { id: '2Gexv2eld4Y?si', description: 'C++ Programming Essentials by Coder Army' },
        { id: 'oOmbSpOzvYg?si', description: 'Learn C++ Step-by-Step with Jenny’s Lectures' },
        { id: 'bL-o2xBENY0?si', description: 'C++ Programming Essentials with College Wallah' },
    ];

    const videoStyle = {
        position: 'relative',
        paddingBottom: '56.25%',
        overflow: 'hidden',
        background: '#000',
        borderRadius: '10px',

    };
    const iframeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',

    };

    const descriptionStyle = {
        marginTop: '10px',
        fontFamily: 'montserrat',
        fontSize: '16px',
        fontWeight: '500',
        textAlign: 'center'
    };
    return (
        <div>
            <NavBar />

            <p style={{ marginTop: '40px', fontSize: '17px', fontWeight: '500', maxWidth: '1200px', textAlign: 'center', marginLeft: '150px', lineHeight: '25px', letterSpacing: '0.4px' }}>
                Technex opens the doors to a world of knowledge and academic success. Discover a realm and elevate your learning journey with
                curated resources, offering expert insights and a comprehensive study toolkit. Excellence awaits - dive in!</p>


            <div style={{ display: 'flex', alignItems: 'center', width: '100%',marginTop:'50px' }}>
                <hr style={{ flex: 1, borderTop: '1px solid #ccc', margin: '0 10px' }} />
                <p style={{ margin: '0', whiteSpace: 'nowrap', fontWeight: '600',fontSize:'20px' }}>Java Tutorial</p>
                <hr style={{ flex: 1, borderTop: '1px solid #ccc', margin: '0 10px' }} />
            </div>

            <div style={{ margin: '30px 40px' }} className="video-grid">
                {videos.map((video) => (
                    <div key={video.id}>
                        <div style={videoStyle}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                allowFullScreen
                                title={`YouTube Video ${video.id}`}
                                style={iframeStyle}
                            ></iframe>
                        </div>
                        <div style={descriptionStyle}>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', width: '100%',marginTop:'80px'  }}>
                <hr style={{ flex: 1, borderTop: '1px solid #ccc', margin: '0 10px' }} />
                <p style={{ margin: '0', whiteSpace: 'nowrap', fontWeight: '600',fontSize:'20px' }}>C++ Tutorial</p>
                <hr style={{ flex: 1, borderTop: '1px solid #ccc', margin: '0 10px' }} />
            </div>

            <div style={{ margin: '30px 40px' }} className="video-grid">
                {videos1.map((video) => (
                    <div key={video.id}>
                        <div style={videoStyle}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                allowFullScreen
                                title={`YouTube Video ${video.id}`}
                                style={iframeStyle}
                            ></iframe>
                        </div>
                        <div style={descriptionStyle}>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>


    )
}

export default Resources
