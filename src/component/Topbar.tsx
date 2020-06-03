import React from 'react';
import styles from './Topbar.module.css';
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className={styles.banner}>
      <Link to="./">
        <img alt="blobber logo" draggable="false" src={logo} className={styles.bannerlogo} />
        <span className={styles.font}>
          blobber.
        </span>
      </Link>
      <Link className={styles.linkclass} to="/login">
        <button className={styles.loginbutton}>login</button>
      </Link>
    </div>
  );
}

export default Topbar;
