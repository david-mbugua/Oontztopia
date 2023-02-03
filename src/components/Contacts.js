import React from "react";
import oontztopia from './images/oontztopia.png';

const Contacts = () => {
    return(
        <div className="mainContacts">
            <div className="contactSection" style={{display: 'flex'}}>
                <h1>Contact</h1>
                <p>Nairobi, Kenya
                 <br /> oontztopia@gmail.com
                 <br /> +254742668324 </p>
            </div>
            <div className="logoSection" style={{display: 'flex'}}>
            <img src = {oontztopia} alt="Oontztopia logo" className='logoContacts' />
            </div>
        </div>
    )
}

export default Contacts