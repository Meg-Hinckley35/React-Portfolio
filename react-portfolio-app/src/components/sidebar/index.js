import './index.scss';
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import SubLogo from '../../assets/images/Sub-Logo.png';
import MainLogo from '../../assets/images/Main-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return (
    <div className='nav-bar'>
<Link className='logo' to='/' onClick={() => setShowNav(false)}>
    <img src={SubLogo} alt='logo'/>
    <img className='sub-logo' src={MainLogo} alt='megan'/>
</Link>
<nav className={showNav ? 'mobile-show' : ''}>
    <NavLink 
    exact='true' 
    activeclassname='active' 
    to='/'
    onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
    </NavLink>
    <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
</nav>
    </div>
)};


export default Sidebar;