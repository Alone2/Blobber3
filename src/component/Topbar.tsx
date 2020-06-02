import React from 'react';
import './Topbar.css';
import logo from './logo.svg'

function Topbar() {
  return (
    <div className="banner">
        <img src={logo} className="banner-logo" />
        <a>
            blobber.
        </a>
        {/* <img src={logo} className="login-logo" /> */}
        <button className="loginbutton">login</button>
    </div>
  );
}

export default Topbar;
