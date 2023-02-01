 import React from 'react';
 import oontztopia from './images/oontztopia.png'; 

const Home = () => { 
    return (
        <div className="home-container"> 
            <img src = {oontztopia} alt="Oontztopia logo" className='oontz' />
            <p>content goes here</p>
        </div> 
    );
}

export default Home;