import React from 'react'
import './style.scss';

function Nav(props) {
    return (
        <div className="navbar">
            <div className="navLeft">
                <img className="headerLogo" src={require("./images/googleLogoTransparent.png")} />
            </div>
            <span className="navRight">
                feau-Google Book Search
                <span>
                    <a className="navLink" href="#">Search</a>
                </span>
                <span>
                   <a className="navLink" href="#">Saved</a>                    
                </span>
    
            </span>
            <div className="navLinks">

           </div>
        </div>


    
    )
}

export default Nav;