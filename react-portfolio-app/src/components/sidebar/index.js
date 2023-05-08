import './index.scss';
import {Link} from 'react-router-dom';
import SubLogo from '../../assets/images/Sub-Logo.png';
import MainLogo from '../../assets/images/Main-Logo.png';


const Sidebar = () => (
    <div className='nav-bar'>
<Link className='logo' to='/'>
    <img src={SubLogo} alt='logo'/>
    <img className='sub-logo' src={MainLogo} alt='megan'/>
</Link>
    </div>
);


export default Sidebar;