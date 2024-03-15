import * as React from "react"
import { useDarkMode } from "../context/theme-context";
import Sun from '@mui/icons-material/Brightness5';
import Moon from '@mui/icons-material/Brightness4';
import Menu from '@mui/icons-material/Menu';
import MenuOpen from '@mui/icons-material/MenuOpen';
import Logo from '../images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const { darkMode, toggleDarkMode } = useDarkMode();

  const upcomingAlert = () => {
    alert('This feature is upcoming.');
  }

  return (
    <div className={`nav-container ${darkMode ? 'dark' : ''}`}>
      <nav>
        <label><a href="/"><img src={Logo}></img></a></label>
        <div className={`${darkMode ? 'dark' : ''}`} style={{ display: 'flex', flexDirection: 'row' }}>
          <ul>
            <li><a href="/tags">Posts</a></li>
            <li onClick={upcomingAlert}><a href="/">About</a></li>
          </ul>
          {/* dark mode toggle */}
          <div>
            <button className={`dark-mode-button ${darkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
              {darkMode ? <Sun></Sun> : <Moon></Moon>}
            </button>
          </div>
          {/* burger checkbox */}
          <div className={`openbtn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            {isOpen ? <MenuOpen style={{ color: `${darkMode ? '#e0e0e0' : '#212529'}` }}></MenuOpen> : <Menu style={{ color: `${darkMode ? '#e0e0e0' : '#212529'}` }}></Menu>}
          </div>
        </div>
      </nav>
      <div className={`burger-menu ${darkMode ? 'dark' : ''} ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="/tags">Posts</a></li>
          <li onClick={upcomingAlert}><a href="/">About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header
