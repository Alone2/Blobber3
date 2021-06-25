import React from 'react';
import styles from './Topbar.module.css';
import logo from '../assets/logo.svg'
import LogoBlobber from './LogoBlobber'
import { Link } from "react-router-dom";

function Topbar() {
  return (
      <div>
        <div className={styles.banner}>
          <Link to="./" className={styles.bloblogo}>
              <LogoBlobber />
          </Link>
          <Link className={styles.linkclass} to="/login">
             <div className={styles.middle}>
                <button className={styles.loginbutton}>login</button>
            </div>
          </Link>
        </div>
    </div>
  );
}

export default Topbar;
