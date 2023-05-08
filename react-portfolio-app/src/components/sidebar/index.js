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
<Link className='logo' to='/'>
    <img src={SubLogo} alt='logo'/>
    <img className='sub-logo' src={MainLogo} alt='megan'/>
</Link>
<nav>
    <NavLink exact='true' activeclassname='active' to='/'>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
    </NavLink>
</nav>
    </div>
)};


export default Sidebar;