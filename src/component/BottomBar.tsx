import React from 'react';
import styles from './BottomBar.module.css';
import LogoBlobber from './LogoBlobber'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

interface NavbarProps {
    paths: { [path: string]: string }
}

function BottomBar(props: NavbarProps) {
  const location = useLocation();
  var allEntries : JSX.Element[] = [];
  for (var k in props.paths) {
      allEntries.push(
         <Link to={k} className={styles.linkstyle}>
            <p className={location.pathname === k ? styles.buttonactive : styles.button}>
                {props.paths[k]}
            </p>
         </Link>
      );

  }
  return (
      <div className={styles.flexbox}>
          <div className={styles.banner}>
              {allEntries}
          </div>
      </div>
    );
}

export default BottomBar;
