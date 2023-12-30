import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <header>
        <nav className={scrolling ? 'scrolled' : ''} id='mynav'>
            <div className={scrolling?"nav-left-scroll":"nav-left"}>
                <span> <Link to="/mynav">Nidhi Bhagat</Link></span>
            </div>
            <div className={scrolling ? 'scrolled-nav-left' : 'nav-right'}>
                <ul>
                    <li><Link to="/mynav" spy={true} smooth={true}>Home</Link></li>
                    <li><Link to="/myeducation" spy={true} smooth={true} >Eductions</Link></li>
                    <li><Link to="/mysocial" spy={true} smooth={true}>Social Network</Link></li>
                    <li><Link to="/myexprience" spy={true} smooth={true}>Exprience</Link></li>
                    <li><Link to="/myabout" spy={true} smooth={true}>About</Link></li>
                    <li><Link id={scrolling?"scolling-btn":"contect-btn"} to="/myfooter" spy={true} smooth={true}>Contect Us</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
