import React from 'react';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import LogoBlobber from './LogoBlobber'

interface NavbarProps {
    paths: { [path: string]: string }
}

function Navbar(props : NavbarProps) {  
  const location = useLocation();
  var allEntries : JSX.Element[] = [];
  for (var k in props.paths) {
      allEntries.push(
         <Link key={k} to={k} className={styles.linkstyle}>
            <p className={location.pathname === k ? styles.buttonactive : styles.button}>
                {props.paths[k]}
            </p>
         </Link>
      );

  }
  return (
      <div className={styles.content}>
          <div className={styles.logo}>
              <LogoBlobber/>
          </div>
          {allEntries}
      </div>
    );
}
export default Navbar;
