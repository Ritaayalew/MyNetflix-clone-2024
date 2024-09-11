import React from 'react'
import './header.css'
import NetflixLogo from '../../resources/images/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PortraitIcon from '@mui/icons-material/Portrait';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='whole'>
        <div className='whole-container'>
            <div className='leftyBox'>
                <ul className='lefty'> 
                    <li><img src={NetflixLogo} alt='Netflix Logo' width='100'/></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse By Languages</li>
                </ul>

            </div>
            <div className='rightyBox'>
                <ul className='righty'>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><PortraitIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Header;