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
  const paths : { [key: string]: string } ={
      "/":"Home", 
      "/news":"News", 
      "/send":"Send", 
      "/unclaimed":"Links"
  };
  var allEntries : JSX.Element[] = [];
  for (var k in props.paths) {
      allEntries.push(
         <Link to={k} className={styles.linkstyle}>
            <p className={location.pathname === k ? styles.buttonactive : styles.button}>
                {paths[k]}
            </p>
         </Link>
      );

  }
  return (
      <div className={styles.content}>
          <LogoBlobber/>
          {allEntries}
      </div>
    );
}
export default Navbar;
