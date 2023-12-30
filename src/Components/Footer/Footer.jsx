import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='myfooter'>
      <div className='footer-left'>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium cumque voluptas voluptates unde aliquam dicta doloribus vel eos sint.</span>
      </div>
      <div className='footer-right'>
        <span>Email:   <a href="mailto:bhagatnidhi216@gmail.com" className='footer-a'>bhagatnidhi216@gmail.com</a></span>
        <span>Phone: <a href="tel:+917771851700" className='footer-a'>7771851700</a></span>
      </div>
    </div>
  )
}

export default Footer
