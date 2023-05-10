import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import About from '../about/index';
import AnimatedLetters from '../animated letters/index';
import Contact from '../contact/index';
import Portfolio from '../portfolio/index';
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
    <Sidebar/>
    <div className="page">
        <span className="tags top-tags">
          <About><AnimatedLetters/></About>
        </span>

        <Outlet />
        <span className="tags bottom-tags">
          <Portfolio><AnimatedLetters/></Portfolio>
          <br />
          <span className="bottom-tag-html">
            <Contact><AnimatedLetters/></Contact>
          </span>
        </span>
      </div>
    </div>
    )
}

export default Layout;
