import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function Topbar(history) {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  }

  const handleLogout = async() => {
    localStorage.removeItem('user');
    

  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="logoutcontainer">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" onClick={handleClick}alt="" className="topAvatar" />
            <Link to="/login" style={display ? {display: 'block'} : {display: 'none'}} onClick={handleLogout} className="logout">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
