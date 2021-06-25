import React from 'react';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import LogoBlobber from './LogoBlobber'

interface MatchParams {
}

interface NavbarProps extends RouteComponentProps<MatchParams> {
}

function Navbar(props : NavbarProps) {  
  console.log(props.location.pathname);
  return (
      <div className={styles.content}>
          <LogoBlobber/>
          <Link to="./" className={styles.linkstyle}>
            <p className={props.location.pathname === "/" ? styles.buttonactive : styles.button}>
              Home
            </p>
          </Link>
          <Link to="./news" className={styles.linkstyle}>
            <p className={props.location.pathname === "/news" ? styles.buttonactive : styles.button}>
              News
            </p>
          </Link>
          <Link to="./send" className={styles.linkstyle}>
            <p className={props.location.pathname === "/send" ? styles.buttonactive : styles.button}>
              Send money
            </p>
          </Link>
          <Link to="./unclaimed" className={styles.linkstyle}>
            <p className={props.location.pathname === "/unclaimed" ? styles.buttonactive : styles.button}>
              My Links
            </p>
          </Link>
      </div>
    );
}
export default Navbar;
