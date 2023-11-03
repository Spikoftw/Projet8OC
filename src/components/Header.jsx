import React from 'react'
import headerimage from '../images/LOGO.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={headerimage} alt="Logo Kasa" />
            <ul className='header__menu'>
                <li><Link to={`../`}>Accueil</Link></li>
                <li><Link to={`/About/`}>A Propos</Link></li>
            </ul>
        </div>
    )
}

export default Header