import React from "react";
import oontztopia from './images/oontztopia.png';

const Contacts = () => {
    return(
        <div className="mainContacts" style={{display: 'flex'}}>
            <div className="contactSection" style={{width:'30%', float: "left"}}>
                <h1>Contacts</h1>
                <p>Nairobi, Kenya
                 <br /> oontztopia@gmail.com
                 <br /> +254742668324 </p> 
            </div>
            <div className="logoSection" style={{width:'50%', float: "left"}}>
            <img src = {oontztopia} alt="Oontztopia logo" className='logoContacts' />
            </div>
        </div>
    )
}

export default Contacts