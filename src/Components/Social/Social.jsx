import React from 'react'
import wattsapp from '../../assets/icons8-whatsapp-48.png'
import insta from '../../assets/icons8-instagram-48.png'
import  fackbook from '../../assets/icons8-facebook-48.png'
import twitter from '../../assets/icons8-x-50.png'
import './Social.css'

const Social = () => {
  return (
    <div className='social' id='mysocial'>
        <div className="wattsapp">
            <a href="/">
                <img src={wattsapp} alt="" />
                <span>Wattsapp</span>
            </a>
        </div>
        <div className="Instagram">
            <a href="/">
                <img src={insta} alt="" />
                <span>Intagram</span>
            </a>
        </div>
        <div className="facebook">
            <a href="/">
                <img src={fackbook} alt="" />
                <span>Facebook</span>
            </a>
        </div>
        <div className='twitter'>
        <a href="/">
                <img src={twitter} alt="" />
                <span>Twitter</span>
            </a>
        </div>
    </div>
  )
}

export default Social
