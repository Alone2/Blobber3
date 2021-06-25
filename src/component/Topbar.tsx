import React from 'react';
import styles from './Topbar.module.css';
import logo from '../assets/logo.svg'
import LogoBlobber from './LogoBlobber'
import { Link } from "react-router-dom";

function Topbar() {
  return (
      <div>
          <Link to="./" className={styles.bloblogo}>
              <LogoBlobber />
          </Link>
        <div className={styles.banner}>
          <Link className={styles.linkclass} to="/login">
            <button className={styles.loginbutton}>login</button>
          </Link>
        </div>
    </div>
  );
}

export default Topbar;
