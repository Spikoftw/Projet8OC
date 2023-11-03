import React from 'react'
import footerimage from '../images/LOGOF.png'

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__logo" src={footerimage} alt="Logo Kasa" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer