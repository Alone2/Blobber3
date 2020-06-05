import React from 'react';
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

function Navbar() {  
  return (
      <div className={styles.content}>
      <Link to="./home">
        <p>
          Home
        </p>
      </Link>
      <Link to="./news">
        <p>
          News
        </p>
      </Link>
      <Link to="./send">
        <p>
          Send money
        </p>
      </Link>
      <Link to="./unclaimed">
        <p>
          My Links
        </p>
      </Link>
      </div>
    );
}
export default Navbar;
