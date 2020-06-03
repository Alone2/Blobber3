import React from 'react';
import './Topbar.css';
import logo from '../assets/logo.svg'

function Topbar() {
  return (
    <div className="banner">
        <img alt="blobber logo" draggable="false" src={logo} className="banner-logo" />
        <a href="./">
            blobber.
        </a>
        <button className="loginbutton">login</button>
    </div>
  );
}

export default Topbar;
