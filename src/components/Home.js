 import React from 'react';
 import oontztopia from './images/oontztopia.png'; 

const Home = () => { 
    const today = new Date();
    const year = today.getFullYear(); 
    return (
        <div className="home-container"> 
            <img src = {oontztopia} alt="Oontztopia logo" className='oontz' />
            <h1>Experience oontztopia!!</h1>
            <p className='engaging'>Engaging  Creative  Inspiring</p>
            <p className='description'>Join Oontztopia and take advantage of this moment to treasure with a live show unlike anything 
                <br /> you’ve seen before. We seek to unite people through their shared love for electronic music. 
                <br /> We are a culture with a goal of embracing electronic music, bringing together people of different cultures
                <br /> through electronic music.
            </p>
            <footer className='Footer'>
            <p><small>Copywrite © {year} OONTZTOPIA All rights reserved.</small></p>
            </footer>
        </div>
    );
}


export default Home;