import React from "react";
import Background from './images/backgroung.jpg'

const About = () => {
    const today = new Date();
    const year = today.getFullYear();
    return( 
        <div className="aboutMain" 
            style={{
            background: `url(${Background})`,
          }}>
            <div className="aboutDiv">
                <h1>About Us</h1>
                <h3>Incomparable Passion</h3>
                <p>
                What makes a performance stick out in your mind? The set, the performers, or perhaps the 
                <br /> feeling it leaves you with? A performance is memorable for many reasons, and we do our best to
                <br /> ensure that we leave a lasting impression in your mind.

                <br /> A great deal of work has gone into this performance, and we couldn’t be happier to bring it to the
                <br /> stage. Pick up your ticket today to make sure you don’t miss out.
                </p>
                <footer className='Footer'>
                     <p><small>Copywrite © {year} OONTZTOPIA All rights reserved.</small></p>
                </footer>
            </div>
        </div>
    )
}

export default About