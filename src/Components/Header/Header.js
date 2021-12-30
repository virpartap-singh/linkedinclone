import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LinkLogo from './linkedin.png';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../features/userSlice';


function Header() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = (e) => {
    e.preventDefault();
    dispatch(logout());
    auth.signOut();
  }
    return (
        <div className="header">
          <div className="header__left">
            <img src={ LinkLogo } alt="logoss" />
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" type="text" />
            </div>
          </div>
          <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notification" />
            <HeaderOption avatar={true} title={user?.displayName} onClick={logoutOfApp} />
          </div>
        </div>
      )
}

export default Header
