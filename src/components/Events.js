import React from "react";
import party from './images/party.jpg'
 
const Events = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="events-container">
            <h1>Events</h1>
        <div className="event-detail" style={{display: 'flex'}}>
            <div className="event-content" style={{width:'50%', float: "left"}}>
                <h2>OONTZTOPIA</h2>
                <p>This event brings people together through electronic music. 
                Genres such as AfroHouse, AfroTech and EDM have brought different cultures together. 
                <br /> That is our mission in Kenya! 
                <br /> Welcome to Oontztopia!
                <br /> Buy your tickets here.</p>
                <button>Buy now</button>
            </div>
            <div style={{width: '40%', float: 'left'}}>
                <img src= {party} alt="People at an edm event" className="party" />
            </div>
        </div>
        <footer className='Footer'>
            <p><small>Copywrite © {year} OONTZTOPIA All rights reserved.</small></p>
            </footer>
        </div>
    )
}

export default Events